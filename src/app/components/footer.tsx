import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Youtube,   // ✅ import YouTube icon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GradientText from "./GradientText";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/Anjadhey Icon.png"
                alt="Anjadhey Foundation"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              We ANJADHEY Helping Hands Foundation are unified in engaging diverse activities across various sectors for sustainable development and inclusive public welfare.
            </p>
            <div className="flex items-center space-x-2 text-accent-warm font-semibold">
              <Heart className="h-5 w-5" />
              <GradientText className="text-sm">#ManidhamKaapom</GradientText>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent-warm">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-white/80 hover:text-accent-warm transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link href="/about" className="text-white/80 hover:text-accent-warm transition-colors duration-300 text-sm">
                About Us
              </Link>
              <Link href="/our-work" className="text-white/80 hover:text-accent-warm transition-colors duration-300 text-sm">
                Our Work
              </Link>
              <Link href="/gallery" className="text-white/80 hover:text-accent-warm transition-colors duration-300 text-sm">
                Gallery
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-accent-warm transition-colors duration-300 text-sm">
                Contact
              </Link>
              <Link href="/donate" className="text-accent-warm font-semibold hover:text-white transition-colors duration-300 text-sm">
                Donate Now
              </Link>
            </nav>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent-warm">Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80 text-sm">
                <Mail className="h-4 w-4 text-accent-warm flex-shrink-0" />
                <a href="mailto:drivingofmydream@gmail.com" className="hover:text-accent-warm transition-colors duration-300">
                  drivingofmydream@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80 text-sm">
                <Phone className="h-4 w-4 text-accent-warm flex-shrink-0" />
                <a href="tel:+918800365370" className="hover:text-accent-warm transition-colors duration-300">
                  +91 88003 65370
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80 text-sm">
                <MessageCircle className="h-4 w-4 text-accent-warm flex-shrink-0" />
                <a href="https://wa.me/918800365370" target="_blank" rel="noopener noreferrer" className="hover:text-accent-warm transition-colors duration-300">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent-warm">Office Address</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-white/80 text-sm">
                <MapPin className="h-5 w-5 text-accent-warm flex-shrink-0 mt-1" />
                <div>
                  <p>No: 3, Sri Balaji Nagar Main Road,</p>
                  <p>Gundumedu, New Perungalathur,</p>
                  <p>Chennai - 600063</p>
                  <p className="text-accent-warm mt-1">Near Lingam Builders</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-accent-warm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/anjadheyfoundation" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-warm hover:scale-110 transition-all duration-300">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.facebook.com/share/19vCu3goBW/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-warm hover:scale-110 transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://x.com/anjadhey" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-warm hover:scale-110 transition-all duration-300">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-warm hover:scale-110 transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://wa.me/918800365370" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-warm hover:scale-110 transition-all duration-300">
                  <MessageCircle className="h-4 w-4" />
                </a>
                {/* ✅ YouTube Link */}
                <a href="https://youtube.com/@anjadheyfoundation" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-warm hover:scale-110 transition-all duration-300">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Anjadhey Foundation. All rights reserved. | Secure SSL
            </p>
            <p className="text-white/60 text-sm text-center md:text-right">
              Made with ❤️ for humanity | <GradientText> #ManidhamKaapom</GradientText>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
