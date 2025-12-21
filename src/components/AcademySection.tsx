"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_ACADEMY = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Academy

// Schedule data
const schedule = [
  { day: "Tuesday", time: "4 - 6 PM", venue: "Dugout Club Arena BSD" },
  { day: "Thursday", time: "4 - 6 PM", venue: "Dugout Club Arena BSD" },
  { day: "Sunday", time: "8 - 10 AM", venue: "Dugout Club Arena BSD" },
  { day: "Wednesday", time: "4 - 6 PM", venue: "B23 Simprug Arena" },
  { day: "Saturday", time: "4 - 6 PM", venue: "B23 Simprug Arena" },
];

const ageCategories = [
  "2.5 - 4 years old",
  "5 - 7 years old",
  "8 - 10 years old",
  "11 - 15 years old",
  "16 - 18 years old",
];

const pricing = [
  { package: "Registration", price: "IDR 500,000", note: "Include training kit; 1 set training jersey + socks" },
  { package: "4 sessions", price: "IDR 800,000", note: "" },
  { package: "8 sessions", price: "IDR 1,440,000", note: "" },
  { package: "12 sessions", price: "IDR 1,800,000", note: "" },
  { package: "24 sessions", price: "IDR 2,880,000", note: "" },
  { package: "48 sessions", price: "IDR 5,000,000", note: "Free registration" },
];

export default function AcademySection() {
  return (
    <section id="academy" className="py-20" style={{ backgroundColor: 'rgba(139, 21, 56, 0.03)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/logos/logo-jogo.png"
              alt="JOGO Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            JOGO FOOTBALL ACADEMY
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Structured training programs with regular schedules and professional
            coaching for Football
          </p>
        </motion.div>

        {/* Age Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6" style={{ color: '#8B1538' }}>
            Age Categories:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ageCategories.map((age, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-xl border"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538', color: '#8B1538' }}
              >
                <span className="text-center" style={{ color: '#8B1538' }}>{age}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6" style={{ color: '#8B1538' }}>
            Training Schedule:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
              >
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 mr-2" style={{ color: '#8B1538' }} />
                  <span className="font-semibold" style={{ color: '#8B1538' }}>{item.day}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 mr-2" style={{ color: '#8B1538' }} />
                  <span style={{ color: '#8B1538' }}>{item.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" style={{ color: '#8B1538' }} />
                  <span className="text-sm" style={{ color: '#8B1538' }}>{item.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Price List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-6" style={{ color: '#8B1538' }}>
            Price List:
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl overflow-hidden border" style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(139, 21, 56, 0.2)' }}>
                  <th className="border px-6 py-4 text-left text-sm font-semibold" style={{ borderColor: '#8B1538', color: '#8B1538' }}>
                    Package
                  </th>
                  <th className="border px-6 py-4 text-left text-sm font-semibold" style={{ borderColor: '#8B1538', color: '#8B1538' }}>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#FAFAF5' : 'rgba(139, 21, 56, 0.05)' }}>
                    <td className="border px-6 py-4" style={{ borderColor: '#8B1538', color: '#8B1538' }}>
                      {item.package}
                      {item.note && (
                        <span className="block text-sm mt-1" style={{ color: '#8B1538', opacity: 0.8 }}>
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="border px-6 py-4 font-medium" style={{ borderColor: '#8B1538', color: '#8B1538' }}>
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href={GOOGLE_FORM_ACADEMY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-xl font-medium transition-colors"
            style={{ backgroundColor: '#8B1538' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
          >
            Register for Academy
          </a>
        </motion.div>
      </div>
    </section>
  );
}

