// src/components/ContactSection.tsx
"use client"; // Markera denna komponent som en klientkomponent

import { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || "Tack för ditt meddelande!");
        // Återställ formuläret
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setSubmitMessage(data.message || "Något gick fel. Försök igen senare.");
      }
    } catch (error) {
      console.error("Fel vid formulärskick:", error);
      setSubmitMessage("Ett oväntat fel uppstod. Försök igen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-16 bg-stone-800 text-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-50 section-divider">
          Kontakta Oss
        </h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h3 className="text-3xl font-bold mb-6">
              Redo att bevara ditt hem?
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Oavsett om det gäller en omfattande fasadrenovering, ett
              traditionellt interiörprojekt eller ett specialuppdrag som
              ådringsmålning, är vi här för att hjälpa till.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Kontakta oss för en kostnadsfri konsultation och offert. Vi ser
              fram emot att diskutera ditt projekt och hur vi kan bidra till att
              bevara ditt byggnadsarv.
            </p>
            <p className="text-lg">
              <strong>Gammel Byggnadsmåleri</strong>
              <br />
              Andersson & Söner AB
              <br />
              Kyrkgränd 12B, 592 34 Vadstena
              <br />
              Telefon: 0143-123 456
              <br />
              E-post: info@gammelbyggnadsmaleri.se
            </p>
          </div>

          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-stone-700 p-8 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-2"
                >
                  Namn
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-2"
                >
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold mb-2"
                >
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2"
                >
                  Meddelande
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-stone-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Skickar..." : "Skicka Meddelande"}
              </button>
              {submitMessage && (
                <p
                  className={`mt-4 text-center ${
                    submitMessage.includes("fel")
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
