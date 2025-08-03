'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Navbar - Logos Only */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Left Side - EdTechPro Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-[#a435f0] hover:text-[#8b2db8] transition-colors">
              EdTechPro
            </Link>
          </div>
          
          {/* Right Side - Government Logos */}
          <div className="flex items-center gap-12">
            {/* Ministry Logo */}
            <Image
              src="/Ministry.png"
              alt="Ministry of Electronics and Information Technology"
              width={160}
              height={160}
              className="object-contain"
            />

            {/* NIELIT Logo */}
            <Image
              src="/NIELIT-Preview.png"
              alt="NIELIT"
              width={160}
              height={160}
              className="object-contain"
            />

            {/* Socteamup Logo */}
            <Image
              src="/Socteamup.png"
              alt="Socteamup"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navbar - Navigation Buttons */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/ip-library" className="text-[#1c1d1f] hover:text-[#a435f0] px-3 py-2 rounded text-sm font-medium transition-colors">
                  IP Library
                </Link>
                <Link href="/open-tools" className="text-[#1c1d1f] hover:text-[#a435f0] px-3 py-2 rounded text-sm font-medium transition-colors">
                  Open Tools
                </Link>
                <Link href="/community" className="text-[#1c1d1f] hover:text-[#a435f0] px-3 py-2 rounded text-sm font-medium transition-colors">
                  Community
                </Link>
                <Link href="/events" className="text-[#1c1d1f] hover:text-[#a435f0] px-3 py-2 rounded text-sm font-medium transition-colors">
                  Events
                </Link>
              </div>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center">
              <Link href="/login" className="bg-[#A435F0] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                Login
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1c1d1f] hover:text-[#a435f0] focus:outline-none focus:text-[#a435f0]"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/ip-library" className="text-[#1c1d1f] hover:text-[#a435f0] block px-2 py-1 rounded text-sm font-medium transition-colors">
              IP Library
            </Link>
            <Link href="/open-tools" className="text-[#1c1d1f] hover:text-[#a435f0] block px-2 py-1 rounded text-sm font-medium transition-colors">
              Open Tools
            </Link>
            <Link href="/community" className="text-[#1c1d1f] hover:text-[#a435f0] block px-2 py-1 rounded text-sm font-medium transition-colors">
              Community
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-200">
              <Link href="/login" className="bg-[#A435F0] text-white block px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#8b2db8] transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 