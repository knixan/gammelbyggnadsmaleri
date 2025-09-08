// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validering: namn + meddelande krävs, samt minst e-post eller telefon
    if (!name || !message || (!email && !phone)) {
      return NextResponse.json(
        {
          message:
            "Vänligen fyll i ditt namn, meddelande och antingen e-post eller telefonnummer.",
        },
        { status: 400 }
      );
    }

    // Skapa Nodemailer transporter (Ethereal)
    const transporter = nodemailer.createTransport({
      host: process.env.ETHEREAL_HOST,
      port: Number(process.env.ETHEREAL_PORT) || 587,
      secure: false, // STARTTLS används
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS,
      },
    });

    const mailOptions = {
      from: `"Gammel Byggnadsmåleri" <${process.env.ETHEREAL_USER}>`,
      to: process.env.RECEIVER_EMAIL || "din_riktiga_epost@example.com",
      subject: `Nytt kontaktformulär från ${name}`,
      html: `
        <h2>Kontaktformulär - Nytt meddelande</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email || "Inte angiven"}</p>
        <p><strong>Telefon:</strong> ${phone || "Inte angiven"}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // Returnerar preview URL för Ethereal (synligt i frontend)
    return NextResponse.json(
      {
        message: "Meddelandet skickades framgångsrikt!",
        preview: nodemailer.getTestMessageUrl(info),
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("API Error:", error);
    const message = "Ett internt fel uppstod vid skickande av meddelandet.";
    let errorMsg = "";
    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (typeof error === "string") {
      errorMsg = error;
    }
    return NextResponse.json(
      {
        message,
        error: errorMsg,
      },
      { status: 500 }
    );
  }
}
