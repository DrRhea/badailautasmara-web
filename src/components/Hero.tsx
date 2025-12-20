"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_ACADEMY = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Academy
const GOOGLE_FORM_PRIVATE = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Private
const GOOGLE_FORM_EVENT = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Event

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay untuk readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(139, 21, 56, 0.65)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            One Integrated Sports Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 text-white"
          >
            From elite athlete development with <strong>JOGO</strong>{" "}
            to premium sports event management by <strong>PT Badai Laut Asmara</strong> —
            we deliver excellence on and off the field.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#academy"
              className="inline-flex items-center justify-center text-white px-8 py-3 rounded-2xl font-medium transition-colors"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              Academy
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#private"
              className="inline-flex items-center justify-center text-white px-8 py-3 rounded-2xl font-medium transition-colors"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              Private Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#eo"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl font-medium transition-colors"
              style={{ 
                backgroundColor: '#FAFAF5',
                color: '#8B1538',
                border: '2px solid #8B1538'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8B1538';
                e.currentTarget.style.color = '#FAFAF5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FAFAF5';
                e.currentTarget.style.color = '#8B1538';
              }}
            >
              Event Organizer
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

