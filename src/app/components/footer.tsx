import { Heart, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-accent-warm" />
              <h3 className="text-2xl font-bold">Anjadhey Foundation</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Born out of the belief #ManidhamKaapom - "Protect Humanity". 
              Together, we create waves of compassion that reach every corner of society.
            </p>
            <div className="flex items-center space-x-2 text-accent-warm font-semibold">
              <Heart className="h-5 w-5" />
              <span>"Together, We Protect Humanity"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent-warm">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-white/80 hover:text-accent-warm transition-colors duration-300">
                About Us
              </Link>
              <Link href="/our-work" className="text-white/80 hover:text-accent-warm transition-colors duration-300">
                Our Work
              </Link>
              <Link href="/gallery" className="text-white/80 hover:text-accent-warm transition-colors duration-300">
                Gallery
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-accent-warm transition-colors duration-300">
                Contact
              </Link>
              <Link href="/donate" className="text-accent-warm font-semibold hover:text-white transition-colors duration-300">
                Donate Now
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent-warm">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-5 w-5 text-accent-warm flex-shrink-0" />
                <span>123 Humanity Lane, Compassion City, 12345, India</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-5 w-5 text-accent-warm flex-shrink-0" />
                <a href="mailto:info@anjadhey.org" className="hover:text-accent-warm transition-colors duration-300">
                  info@anjadhey.org
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-5 w-5 text-accent-warm flex-shrink-0" />
                <span>+91 123 456 7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Anjadhey Foundation. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-1">
            Made with ❤️ for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;