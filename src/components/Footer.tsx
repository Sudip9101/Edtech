import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">NOSEDC</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering Future of Chip Design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>



          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>hello@nosedc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 NOSEDC. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/terms" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 