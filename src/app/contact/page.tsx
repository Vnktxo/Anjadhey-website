import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Send Us a Message
            </h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary-dark"
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
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-dark"
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
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-dark"
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
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-accent-warm text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
                >
                  Submit
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
                  No: 3, Sri Balaji Nagar Main Road, Gundumedu, New Perungalathur, Chennai – 600063.
                  <br />
                  <span className="text-accent-warm">Landmark: Near Lingam Builders</span>
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
                  <a href="mailto:drivingofmydream@gmail.com">drivingofmydream@gmail.com</a>
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
