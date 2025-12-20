"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form Fathan

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Academy", href: "#academy" },
    { name: "Private Training", href: "#private" },
    { name: "Event Organizer", href: "#eo" },
    { name: "Coach Profile", href: "#coach" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-sm" style={{ backgroundColor: 'rgba(250, 250, 245, 0.9)', borderColor: 'rgba(139, 21, 56, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <Image
                src="/logos/logo-pt-badai-laut-asmara.png"
                alt="PT Badai Laut Asmara"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: '#8B1538' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#6B0F2A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#8B1538'}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              REGISTER NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors"
              style={{ color: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8B1538'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-sm border-t"
          style={{ backgroundColor: 'rgba(250, 250, 245, 0.95)', borderColor: 'rgba(139, 21, 56, 0.2)' }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-base font-medium transition-colors"
                style={{ color: '#8B1538' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6B0F2A';
                  e.currentTarget.style.backgroundColor = 'rgba(139, 21, 56, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B1538';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 text-white px-6 py-2 rounded-xl text-center text-sm font-medium transition-colors"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              REGISTER NOW
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

