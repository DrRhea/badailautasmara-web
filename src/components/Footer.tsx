"use client";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Footer */}
        <div className="mb-8">
          <Image
            src="/logos/logo-pt-badai-laut-asmara-white.png"
            alt="PT Badai Laut Asmara"
            width={180}
            height={50}
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Alamat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-300">
                Gedung AD Premier Lt.9, JI.TB Simatupang No.5, Jakarta Selatan
                12550
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
                  href="tel:+628118139943"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +62 811 8139 943
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a
                  href="mailto:pt.badailautasmara@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  pt.badailautasmara@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/b23.arenaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span className="text-sm">@b23.arenaofficial</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://instagram.com/volkiessoccer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span className="text-sm">@volkiessoccer</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 PT Badai Laut Asmara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

