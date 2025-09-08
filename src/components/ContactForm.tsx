"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Enkel klientvalidering
    if (!formData.name.trim()) {
      setErrorMessage("Vänligen fyll i ditt namn.");
      setStatus("error");
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMessage(
        "Vänligen fyll i antingen din e-postadress eller ditt telefonnummer."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setPreviewUrl(result.preview || "");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Något gick fel. Försök igen.");
      }
    } catch (error: unknown) {
      setStatus("error");
      let msg = "Nätverksfel eller serverfel.";
      if (error instanceof Error) {
        msg = error.message;
      } else if (typeof error === "string") {
        msg = error;
      }
      setErrorMessage(msg);
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
          {previewUrl && (
            <p className="text-sm mt-2">
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Visa mejlet i Ethereal
              </a>
            </p>
          )}
        </div>
      )}

      {status === "error" && errorMessage && (
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
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-lg font-semibold mb-2">
          Telefonnummer
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-semibold mb-2">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-stone-600 border border-stone-600 text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
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
