"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GOOGLE_FORM_URL = "https://forms.gle/SuGsZXWmrfYz28Ny9";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Academy", href: "#academy" },
    { name: "Private Training Services", href: "#private" },
    { name: "Event Organizer", href: "#eo" },
    { name: "Coach Profile", href: "#coach" },
    { name: "Gallery", href: "#gallery" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on link
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-sm border-b shadow-sm' 
          : 'backdrop-blur-none border-b-0 shadow-none'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(250, 250, 245, 0.98)' : 'transparent', 
        borderColor: isScrolled ? 'rgba(139, 21, 56, 0.2)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logos/logo-pt-badai-laut-asmara.png"
                alt="PT Badai Laut Asmara"
                width={180}
                height={50}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu - Show from md breakpoint */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
                style={{ color: isScrolled ? '#8B1538' : '#FFFFFF' }}
                onMouseEnter={(e) => e.currentTarget.style.color = isScrolled ? '#6B0F2A' : '#FAFAF5'}
                onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#8B1538' : '#FFFFFF'}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 lg:px-6 py-2 rounded-2xl text-xs lg:text-sm font-medium transition-colors whitespace-nowrap"
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
              className="p-2 transition-colors touch-manipulation"
              style={{ color: isScrolled ? '#8B1538' : '#FFFFFF' }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden backdrop-blur-sm border-t overflow-hidden"
            style={{ backgroundColor: 'rgba(250, 250, 245, 0.98)', borderColor: 'rgba(139, 21, 56, 0.2)' }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 rounded-2xl text-base font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
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
                </motion.a>
              ))}
              <motion.a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                className="block mt-4 text-white px-6 py-3 rounded-2xl text-center text-base font-medium transition-colors touch-manipulation min-h-[44px] flex items-center justify-center"
                style={{ backgroundColor: '#8B1538' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
              >
                REGISTER NOW
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

