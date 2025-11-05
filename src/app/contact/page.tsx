// src/app/contact/page.tsx
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  // --- ADD STATE ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  // --- END ADD STATE ---

  // --- ADD HANDLE_SUBMIT ---
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmittedSuccess(false);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact", // This tells our API what to do
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmittedSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  // --- END HANDLE_SUBMIT ---

  return (
    <div className="bg-accent-light text-primary-dark min-h-screen">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get In Touch
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto opacity-80">
            We&apos;d love to hear from you! Whether you have a question, a
            suggestion, or want to volunteer, please reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-accent-warm">
              Send Us a Message
            </h2>
            {/* --- UPDATE THE FORM TAG --- */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-accent-warm"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-warm focus:border-accent-warm"
                  placeholder="Enter your full name"
                  value={name} // <-- ADD
                  onChange={(e) => setName(e.target.value)} // <-- ADD
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-accent-warm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-warm focus:border-accent-warm"
                  placeholder="Enter your email"
                  value={email} // <-- ADD
                  onChange={(e) => setEmail(e.target.value)} // <-- ADD
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-accent-warm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent-warm focus:border-accent-warm"
                  placeholder="Type your message..."
                  value={message} // <-- ADD
                  onChange={(e) => setMessage(e.target.value)} // <-- ADD
                ></textarea>
              </div>
              <div>
                {/* --- ADD THIS SECTION --- */}
                {submittedSuccess && (
                  <div className="mb-4 text-center text-green-600 font-medium">
                    Thank you! Your message has been sent.
                  </div>
                )}
                {submissionError && (
                  <div className="mb-4 text-center text-red-600 font-medium">
                    Error: {submissionError}
                  </div>
                )}
                {/* --- END OF ADDED SECTION --- */}

                <button
                  type="submit"
                  disabled={isSubmitting} // <-- ADD
                  className="w-full bg-accent-warm text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-all duration-300 disabled:opacity-50" // <-- ADD disabled
                >
                  {isSubmitting ? "Sending..." : "Submit"} {/* <-- UPDATE TEXT */}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Contact Information
            </h2>
            <div className="flex items-start space-x-4">
              <div className="bg-accent-warm/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Address</h3>
                <p className="opacity-90">
                  No: 3, Sri Balaji Nagar Main Road, Gundumedu, New
                  Perungalathur, Chennai – 600063.
                  <br />
                  <span className="text-accent-warm">
                    Landmark: Near Lingam Builders
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-accent-warm/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="opacity-90 hover:text-accent-warm transition">
                  <a href="mailto:drivingofmydream@gmail.com">
                    drivingofmydream@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-accent-warm/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="opacity-90">+91-8800365370 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}