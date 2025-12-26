"use client";

import { Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#8B1538', color: '#FAFAF5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Footer */}
        <div className="mb-8">
          <Image
            src="/logos/logo-pt.png"
            alt="PT Badai Laut Asmara"
            width={180}
            height={50}
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Alamat */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FAFAF5' }}>Address</h3>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
              <p style={{ color: '#FAFAF5', opacity: 0.9 }}>
                Gedung AD Premier Lt. 9, Jl. TB Simatupang 
              </p>
              <p>
                No. 5, Jakarta Selatan 12550
              </p>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a
                  href="tel:+6281188022607"
                  className="transition-colors"
                  style={{ color: '#FAFAF5', opacity: 0.9 }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
                >
                  +62 811 8802 2607
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Social Media
            </h3>
            <div className="space-y-3">
              <a
                href="https://instagram.com/jfa.idn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span className="text-sm">@jfa.idn</span>
              </a>
              <a
                href="https://tiktok.com/@jogoprivatetraining"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="bi bi-tiktok mr-2" 
                  viewBox="0 0 16 16"
                  style={{ color: '#FAFAF5' }}
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
                <span className="text-sm">@jogoprivatetraining</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: 'rgba(250, 250, 245, 0.3)', color: '#FAFAF5', opacity: 0.8 }}>
          <p>&copy; 2025 PT Badai Laut Asmara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

