// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  // Hämta uppgifter från miljövariabler
  const transporter = nodemailer.createTransport({
    host: process.env.ETHEREAL_HOST,
    port: parseInt(process.env.ETHEREAL_PORT || "587", 10), // Se till att porten är en siffra
    auth: {
      user: process.env.ETHEREAL_USER,
      pass: process.env.ETHEREAL_PASS,
    },
  });

  const mailOptions = {
    from: `"Gammel Byggnadsmåleri" <${process.env.ETHEREAL_USER}>`, // Ändra avsändarens namn om du vill
    to: "din_riktiga_epost@example.com", // Ändra till den e-postadress dit meddelanden ska skickas
    subject: `Nytt kontaktformulär från ${name}`,
    html: `
      <p><strong>Namn:</strong> ${name}</p>
      <p><strong>E-post:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
      <p><strong>Meddelande:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Meddelande skickat!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Kunde inte skicka meddelandet." },
      { status: 500 }
    );
  }
}
