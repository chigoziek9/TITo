import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0F1E] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TITO NIG LTD</h3>
            <p className="text-gray-400 text-sm">
              Excellence in furniture supply and premium engineering with unmatched professionalism.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#D4932D]">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#D4932D]">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Projects
              </Link>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Headquarters */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#D4932D]">Headquarters</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4932D] mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  No. 1, Beco Street Onipetesi Estate, Mangoro, Lagos State, Nigeria.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4932D] flex-shrink-0" />
                <a
                  href="tel:+2348161743711"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +234 816 174 3711
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4932D] flex-shrink-0" />
                <a
                  href="mailto:titoniglimited@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors break-all"
                >
                  titoniglimited@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © 2024 TITO NIG LTD. No. 1, Beco Street Onipetesi Estate, Mangoro, Lagos State.
          </p>
        </div>
      </div>
    </footer>
  );
}
