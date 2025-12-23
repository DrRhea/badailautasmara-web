"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6281188022607";
const BOOKING_MESSAGE = encodeURIComponent("Hello, I would like to book an event with JOGO Football Event Organizer. Please provide more information.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MESSAGE}`;

export default function BookingContactSection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(250, 250, 245, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#8B1538' }}>
            Booking & Contact
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-medium transition-colors text-lg"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              Contact Us for Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

