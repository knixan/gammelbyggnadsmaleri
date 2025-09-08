"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Ett oväntat fel inträffade.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Nätverksfel eller serverfel. Försök igen senare.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-stone-800 p-8 rounded-lg shadow-lg text-stone-100"
    >
      {status === "success" && (
        <div className="bg-green-500 text-stone-50 p-3 rounded mb-4 text-center">
          Tack! Ditt meddelande har skickats.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-500 text-stone-50 p-3 rounded mb-4 text-center">
          {errorMessage}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-semibold mb-2">
          Namn
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-semibold mb-2">
          E-post
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-lg font-semibold mb-2">
          Telefonnummer
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-semibold mb-2">
          Meddelande
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full bg-yellow-500 hover:bg-yellow-600 text-stone-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ${
          status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {status === "submitting" ? "Skickar..." : "Skicka Meddelande"}
      </button>
    </form>
  );
};

export default ContactForm;
