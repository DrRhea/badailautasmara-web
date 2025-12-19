"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const GOOGLE_FORM_EVENT = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Event

const services = [
  "Event Management: Local to international tournaments, permits, & venues",
  "Media & Digital Marketing: Integrated promotion strategies",
  "Event Activation & Branding: Physical and digital collaboration",
  "Logistics & Operations: Transportation, accommodation, and security",
];

const advantages = [
  "End-to-End Solutions",
  "Large-Scale Experience",
  "Collaborative Approach",
];

export default function EOSection() {
  return (
    <section id="eo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Sports Event Organizer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Event Organizer services for companies and institutions looking to
            host quality sports events
          </p>
        </motion.div>

        {/* Layanan Kami */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-50 border border-gray-300 rounded-md"
              >
                <CheckCircle className="h-5 w-5 text-gray-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Keunggulan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border border-gray-300 rounded-lg text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {advantage}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={GOOGLE_FORM_EVENT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            Inquire Event Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}

