"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form Fathan

export default function Hero() {
  return (
    <section
      id="beranda"
      className="pt-16 min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Solusi Olahraga Terintegrasi:
            <br />
            <span className="text-gray-700">
              Pelatihan Profesional & Event Organizer Berkelas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Membangun generasi atlet bersama <strong>JOGO</strong> dan menciptakan
            event olahraga spektakuler bersama <strong>PT Badai Laut Asmara</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
            >
              Daftar Latihan (JOGO)
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#eo"
              className="inline-flex items-center justify-center bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Lihat Layanan EO
            </a>
          </motion.div>

          {/* Placeholder untuk background image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-gray-300 rounded-lg h-64 sm:h-96 flex items-center justify-center border-2 border-gray-400 border-dashed">
              <p className="text-gray-500 text-sm">Background Image: B23 Arena Simprug / BTN Jakarta Run</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

