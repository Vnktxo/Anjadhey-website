// src/app/corporate-donors/page.tsx
"use client";

import { useMemo, useState } from "react";

export default function CorporateDonorsPage() {
  const [form, setForm] = useState({
    corporateName: "",
    email: "",
    phone: "",
    contactPerson: "",
    address: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    website: "",
    industry: "",
    supportType: "",
    heardFrom: "",
    comments: "",
    agree: false,
  });

  // fields considered for progress calculation (required ones)
  const requiredFields = [
    "corporateName",
    "email",
    "phone",
    "contactPerson",
    "address",
    "country",
    "state",
    "district",
    "pincode",
    "supportType",
  ];

  const filledCount = useMemo(() => {
    return requiredFields.reduce((count, key) => {
      const val = (form as any)[key];
      if (typeof val === "string" && val.trim() !== "") return count + 1;
      return count;
    }, 0);
  }, [form]);

  const progressPercent = Math.round((filledCount / requiredFields.length) * 100);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, type } = e.target;
    if (type === "checkbox") {
      setForm((s) => ({ ...s, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      const value = e.target.value;
      setForm((s) => ({ ...s, [name]: value }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Replace with real submit logic later
    alert("Corporate donor inquiry submitted (mock). Thank you!");
  }

  return (
    <div className="min-h-screen bg-accent-light text-primary-dark">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Corporate Donor Inquiry</h1>
          </div>

          {/* 40 : 60 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-stretch">
            {/* LEFT - CTA column */}
            <aside className="order-1">
              <div className="h-full rounded-2xl bg-primary-light text-white p-8 flex items-start justify-center">
                <div className="max-w-md text-center mt-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                    Corporate Donors
                  </h2>
                  <p className="mt-4 text-lg md:text-xl font-medium italic">
                    “Comply’ is not a vision”
                  </p>
                  <p className="mt-6 text-base md:text-lg">
                    Engaging the power of Corporate Social Responsibility (CSR) into strategic initiatives can empower communities and drive sustainable development. This approach “The price of greatness is responsibility” uses CSR to fund projects that address pressing an education need, dedicated to tackling environmental causes and access to social welfare programs, which builds a more resilient society for everyone.
                  </p>
                </div>
              </div>
            </aside>

            {/* RIGHT - form */}
            <main className="order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                {/* header */}
                <header className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark">
                    Corporate Donor Inquiry
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
                    Tell us how your organization would like to support. We'll reach out with tailored partnership options.
                  </p>
                </header>

                {/* progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Progress</span>
                    <span>{progressPercent}% complete</span>
                  </div>

                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div
                      className="h-3 rounded-full transition-all duration-900 ease-out animate-gradient"
                      style={{
                        width: `${progressPercent}%`,
                        background: "linear-gradient(90deg, #ff4d4f, #d4a017, #1E4620)",
                        backgroundSize: "200% 200%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <section>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        name="corporateName"
                        value={form.corporateName}
                        onChange={handleChange}
                        placeholder="Corporate Name *"
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
                        placeholder="Phone Number *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="contactPerson"
                        value={form.contactPerson}
                        onChange={handleChange}
                        placeholder="Contact Person Name *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Address *"
                        className="md:col-span-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Country *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        placeholder="State *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="district"
                        value={form.district}
                        onChange={handleChange}
                        placeholder="District / City *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        placeholder="Pincode *"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="Website / LinkedIn URL"
                        className="md:col-span-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <input
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        placeholder="Industry"
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                      />
                      <select
                        name="supportType"
                        value={form.supportType}
                        onChange={handleChange}
                        className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 
                                    focus:outline-none focus:ring-2 focus:ring-primary-light 
                                    md:col-span-1 hover:shadow-custom-hover transition-transform 
                                    duration-300 hover:scale-[1.02] appearance-none md:appearance-auto 
                                    text-sm md:text-base"
                        aria-label="Type of Support"
                >
                        <option value="">Type of Support *</option>
                        <option>Financial Support</option>
                        <option>Training & Capacity Building</option>
                        <option>Volunteering Support</option>
                        <option>Infrastructure / Venue Support</option>
                        <option>Educational Sponsorship</option>
                        <option>Health & Medical Support</option>
                        <option>Technology Support</option>
                        <option>Awareness & Campaign Support</option>
                        <option>Disaster Relief Support</option>
                        <option>Event Sponsorship</option>
                        <option>Operational / Admin Support</option>
                        <option>Training / Placement / Internship</option>
                        <option>Industrial Visit / In Plant Training</option>
                      </select>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Additional Information</h3>
                    <textarea
                      name="heardFrom"
                      value={form.heardFrom}
                      onChange={handleChange}
                      placeholder="How do you know about Anjadhey? e.g., newspaper, social media, friends"
                      className="w-full bg-gray-50 rounded-xl px-4 py-4 border border-gray-100 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                    />

                    <textarea
                      name="comments"
                      value={form.comments}
                      onChange={handleChange}
                      placeholder="Any other general comments or inquiries? Type your message here..."
                      className="w-full bg-gray-50 rounded-xl px-4 py-4 border border-gray-100 min-h-[120px] mt-4 focus:outline-none focus:ring-2 focus:ring-primary-light hover:shadow-custom-hover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </section>

                  <label className="inline-flex items-center gap-3">
                    <input
                      name="agree"
                      type="checkbox"
                      checked={form.agree}
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <span className="text-sm">I agree to the Anjadhey terms and conditions</span>
                  </label>

                  <div className="pt-4 flex flex-col items-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-primary-dark text-white px-7 py-3 text-base font-medium transition-transform duration-300 hover:scale-[1.05] hover:shadow-custom-hover"
                    >
                      Submit
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
