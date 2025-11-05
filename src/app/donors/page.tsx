// src/app/donors/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

// Initial state for the form
const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  queryType: "",
  description: "",
};

export default function DonorsPage() {
  const [form, setForm] = useState(initialFormState);

  // --- ADD SUBMISSION STATE ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  // --- END ADD ---

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "queryType",
    "description",
  ];

  const filledCount = useMemo(() => {
    return requiredFields.reduce((count, key) => {
      const val = (form as any)[key];
      if (typeof val === "string" && val.trim() !== "") return count + 1;
      return count;
    }, 0);
  }, [form]);

  const progressPercent = Math.round(
    (filledCount / requiredFields.length) * 100
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  // Helper to reset form
  const resetForm = () => {
    setForm(initialFormState);
  };

  // --- REPLACE HANDLESUBMIT ---
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
          formType: "donor", // This tells our API what to do
          ...form,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmittedSuccess(true);
      resetForm();
    } catch (error: any) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  // --- END REPLACE ---

  return (
    <div className="min-h-screen bg-accent-light text-primary-dark">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Donor Inquiry</h1>
          </div>

          {/* 40 : 60 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-stretch">
            {/* LEFT SIDE - centered text */}
            <aside className="order-1">
              <div className="h-full rounded-2xl bg-primary-light text-white p-8 flex items-start justify-center">
                <div className="max-w-md text-center mt-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                    Donors
                  </h2>
                  <p className="mt-4 text-lg md:text-xl font-medium italic">
                    “Your donation makes a difference”
                  </p>
                  <p className="mt-4 text-lg md:text-lg font-medium">
                    Our smallest act of kindness is worth more than the grandest
                    intention. Be a part of something bigger and double your
                    impact toward sustainability, education, and community
                    programs.
                  </p>
                  <Image
                    src="/dono.webp" // replace with your image filename
                    alt="Volunteers helping the community"
                    width={400}
                    height={300}
                    className="w-full rounded-3xl mt-10"
                  />
                </div>
              </div>
            </aside>

            {/* RIGHT SIDE - inquiry form */}
            <main className="order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                {/* header */}
                <header className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark">
                    Donor Inquiry
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
                    Tell us how you'd like to support — we'll get back with
                    personalized options.
                  </p>
                </header>

                {/* progress bar with smooth gradient animation */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Progress</span>
                    <span>{progressPercent}% complete</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full transition-all duration-700 ease-out animate-gradient"
                      style={{
                        width: `${progressPercent}%`,
                        background:
                          "linear-gradient(90deg, #ff4d4f, #d4a017, #1E4620)",
                        backgroundSize: "200% 200%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <section>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Contact Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="First Name *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Last Name *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <select
                        name="queryType"
                        value={form.queryType}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light md:col-span-2 hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02] appearance-none md:appearance-auto text-sm md:text-base"
                        aria-label="Query Type"
                      >
                        <option value="">Query Type *</option>
                        <option>Receipt</option>
                        <option>Enquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Additional Inquiry
                    </h3>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full bg-gray-50 rounded-xl px-4 py-4 border border-gray-100 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </section>

                  <div className="pt-4 flex flex-col items-center">
                    {/* --- ADD THIS SECTION --- */}
                    {submittedSuccess && (
                      <div className="mb-4 text-center text-green-600 font-medium">
                        Thank you! Your inquiry has been submitted.
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
                      className="inline-flex items-center justify-center rounded-full bg-primary-dark text-white px-7 py-3 text-base font-medium transition-transform duration-300 hover:scale-[1.05] hover:shadow-custom-hover disabled:opacity-50" // <-- ADD disabled
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}{" "}
                      {/* <-- UPDATE TEXT */}
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}