// src/app/volunteers/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function VolunteersPage() {
  // form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [stateField, setStateField] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  // communication address
  const [sameAsPermanent, setSameAsPermanent] = useState(false);
  const [commCountry, setCommCountry] = useState("");
  const [commState, setCommState] = useState("");
  const [commCity, setCommCity] = useState("");
  const [commAddress, setCommAddress] = useState("");
  const [commPincode, setCommPincode] = useState("");

  // skills / experience / languages / final steps
  const [skills, setSkills] = useState("");
  const [prevExp, setPrevExp] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [attended, setAttended] = useState(false);
  const [agree, setAgree] = useState(false);

  // progress
  const [progress, setProgress] = useState(0);

  // NEW: Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // helper to toggle languages
  function toggleLanguage(lang: string) {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  }

  // copy permanent address to communication address when checkbox toggled
  useEffect(() => {
    if (sameAsPermanent) {
      setCommCountry(country);
      setCommState(stateField);
      setCommCity(city);
      setCommAddress(address);
      setCommPincode(pincode);
    } else {
      // optional: clear comm fields when unchecked
      setCommCountry("");
      setCommState("");
      setCommCity("");
      setCommAddress("");
      setCommPincode("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sameAsPermanent]);

  // compute progress whenever relevant fields change
  useEffect(() => {
    const checks = [
      fullName.trim() !== "",
      /\S+@\S+\.\S+/.test(email.trim()), // simple email check
      phone.trim() !== "",
      gender.trim() !== "",
      dob.trim() !== "",
      country.trim() !== "",
      stateField.trim() !== "",
      city.trim() !== "",
      address.trim() !== "",
      pincode.trim() !== "",
      skills.trim() !== "",
      languages.length > 0,
      agree === true,
    ];

    const filled = checks.reduce((acc, ok) => acc + (ok ? 1 : 0), 0);
    const total = checks.length;
    const pct = Math.round((filled / total) * 100);
    setProgress(pct);
  }, [
    fullName,
    email,
    phone,
    gender,
    dob,
    country,
    stateField,
    city,
    address,
    pincode,
    skills,
    languages,
    agree,
  ]);

  // Helper function to clear the form
  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setGender("");
    setDob("");
    setCountry("");
    setStateField("");
    setCity("");
    setAddress("");
    setPincode("");
    setSameAsPermanent(false);
    setCommCountry("");
    setCommState("");
    setCommCity("");
    setCommAddress("");
    setCommPincode("");
    setSkills("");
    setPrevExp("");
    setLanguages([]);
    setAttended(false);
    setAgree(false);
  };

  // submission (placeholder)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmittedSuccess(false);

    // Collect all data
    const formData = {
      fullName,
      email,
      phone,
      gender,
      dob,
      country,
      stateField,
      city,
      address,
      pincode,
      commCountry,
      commState,
      commCity,
      commAddress,
      commPincode,
      skills,
      prevExp,
      languages,
      attended,
      agree,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "volunteer", // This tells our API what to do
          ...formData,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong.");
      }

      // Success!
      setSubmittedSuccess(true);
      resetForm(); // Clear the form
    } catch (error: any) {
      setSubmissionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  // common input classes: keep your hover/focus lift effect
  const inputClass =
    "bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-primary-light focus:border-primary-light outline-none";

  return (
    <div className="min-h-screen bg-accent-light text-primary-dark">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Volunteers</h1>
          </div>

          {/* 40 : 60 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-stretch">
            {/* LEFT */}
            <aside className="order-1">
              <div className="h-full rounded-2xl bg-primary-light text-white p-8 flex items-start justify-center">
                <div className="max-w-md text-center mt-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                    Join as a Volunteer
                  </h2>
                  <p className="mt-4 text-lg md:text-xl font-medium italic">
                    "The best way to find yourself is to lose yourself in the
                    service of others."
                  </p>
                  <p className="mt-4 text-lg md:text-lg font-regular">
                    We Anjadhey Helping Hands Foundation creates easy
                    volunteering opportunities for all ages, fostering a
                    thriving ecosystem of positive change.
                  </p>
                  {/* ✅ Added volunteer image here */}
                  <Image
                    src="/volun.webp" // replace with your image filename
                    alt="Volunteers helping the community"
                    width={400}
                    height={300}
                    className="w-full rounded-3xl mt-10"
                  />
                </div>
              </div>
            </aside>

            {/* RIGHT */}
            <main className="order-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                {/* Header */}
                <header className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark">
                    Volunteer Registration
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
                    Volunteers are the pillars of strength for Anjadhey and they
                    play a key role in every part of our initiatives.
                  </p>
                </header>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Registration Progress</span>
                    <span>{progress}% complete</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={progress}
                      className="h-2 transition-all duration-700 animate-gradient-move shadow-[0_0_6px_rgba(42,99,59,0.4)]"
                      style={{
                        width: `${progress}%`,
                        backgroundImage:
                          "linear-gradient(to right, #e63946, #d4a017, #2a633b)",
                        backgroundSize: "200% 100%",
                      }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <section className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className={inputClass}
                        required
                      />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                        className={inputClass}
                        required
                      />

                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        className={inputClass}
                        required
                      />
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className={`${inputClass} appearance-none md:appearance-auto text-sm md:text-base`}
                        required
                      >
                        <option value="">Gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                        <option>Prefer not to say</option>
                      </select>

                      <input
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        aria-label="Date of birth"
                        type="date"
                        className={inputClass}
                      />
                      <input
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Country"
                        className={`${inputClass} appearance-none md:appearance-auto text-sm md:text-base`}
                        required
                      />

                      <input
                        value={stateField}
                        onChange={(e) => setStateField(e.target.value)}
                        placeholder="State"
                        className={inputClass}
                        required
                      />
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City/District"
                        className={inputClass}
                        required
                      />

                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                        className={`md:col-span-2 ${inputClass}`}
                      />
                      <input
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="Pincode"
                        className={inputClass}
                        required
                      />
                    </div>
                  </section>

                  {/* Communication Address */}
                  <section className="space-y-4 pt-2 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800">
                      Communication Address
                    </h3>

                    <label className="flex items-center space-x-3 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={sameAsPermanent}
                        onChange={(e) =>
                          setSameAsPermanent(e.target.checked)
                        }
                      />
                      <span>Same as permanent address</span>
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        value={commCountry}
                        onChange={(e) => setCommCountry(e.target.value)}
                        placeholder="Country"
                        className={inputClass}
                      />
                      <input
                        value={commState}
                        onChange={(e) => setCommState(e.target.value)}
                        placeholder="State"
                        className={inputClass}
                      />
                      <input
                        value={commCity}
                        onChange={(e) => setCommCity(e.target.value)}
                        placeholder="City/District"
                        className={inputClass}
                      />
                      <input
                        value={commAddress}
                        onChange={(e) => setCommAddress(e.target.value)}
                        placeholder="Address"
                        className={inputClass}
                      />
                      <input
                        value={commPincode}
                        onChange={(e) => setCommPincode(e.target.value)}
                        placeholder="Pincode"
                        className={inputClass}
                      />
                    </div>
                  </section>

                  {/* Skills & Experience */}
                  <section className="space-y-4 pt-2 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800">
                      Skills & Experience
                    </h3>

                    <textarea
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      placeholder="What skills can you contribute? e.g., Teaching, Communication, Project Management..."
                      required
                      className={`w-full bg-gray-50 rounded-xl px-4 py-4 border border-gray-100 min-h-[88px] ${inputClass}`}
                    />

                    <textarea
                      value={prevExp}
                      onChange={(e) => setPrevExp(e.target.value)}
                      placeholder="Previous volunteer experience (optional)"
                      className={`w-full bg-gray-50 rounded-xl px-4 py-4 border border-gray-100 min-h-[72px] ${inputClass}`}
                    />

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">
                        Languages You Know
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {[
                          "Tamil",
                          "English",
                          "Hindi",
                          "Telugu",
                          "Malayalam",
                          "Kannada",
                          "Others",
                        ].map((l) => (
                          <label
                            key={l}
                            className="inline-flex items-center gap-3 text-sm"
                          >
                            <input
                              type="checkbox"
                              checked={languages.includes(l)}
                              onChange={() => toggleLanguage(l)}
                              className="h-4 w-4"
                            />
                            <span>{l}</span>
                          </label>
                        ))}
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        Select all languages you're comfortable speaking
                      </div>
                    </div>
                  </section>

                  {/* Final Steps */}
                  <section className="space-y-4 pt-2 border-t border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800">
                      Final Steps
                    </h3>

                    <label className="inline-flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={attended}
                        onChange={(e) => setAttended(e.target.checked)}
                      />
                      <div className="text-sm">
                        I have previously attended Anjadhey volunteer training
                        sessions
                      </div>
                    </label>

                    <label className="inline-flex items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        required
                      />
                      <div className="text-sm">
                        I agree to the volunteer terms and conditions and commit
                        to contributing meaningfully to Anjadhey's mission
                      </div>
                    </label>

                    <div className="pt-4 flex flex-col items-center">
                      {/* --- ADD THIS SECTION --- */}
                      {submittedSuccess && (
                        <div className="mb-4 text-center text-green-600 font-medium">
                          Thank you! Your registration has been submitted
                          successfully.
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
                        disabled={isSubmitting} // Disable button while submitting
                        className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-primary-dark text-white px-7 py-3 text-base font-medium hover:opacity-95 transition disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Complete Registration"}
                      </button>

                      <p className="text-xs text-gray-400 mt-3 text-center">
                        By submitting, you agree to receive communication about
                        volunteer opportunities.
                      </p>
                    </div>
                  </section>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}