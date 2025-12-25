"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_EVENT = "https://forms.gle/SuGsZXWmrfYz28Ny9";

export default function EOHeroSection() {
  return (
    <section
      id="eo-hero"
      className="py-20 min-h-[60vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event-organizer/bg-1.png"
          alt="Event Organizer Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay untuk readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(250, 250, 245, 0.6)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#8B1538' }}
          >
            Event Organizer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 space-y-2"
            style={{ color: '#333333' }}
          >
            <p>Specialist in sports events.</p>
            <p>Fun, Professional, and Memorable.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <a
              href={GOOGLE_FORM_EVENT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white px-8 py-3 rounded-2xl font-medium transition-colors"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              Plan Your Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

