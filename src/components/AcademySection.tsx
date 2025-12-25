"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_ACADEMY = "https://forms.gle/SuGsZXWmrfYz28Ny9";

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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* Main Content Grid - 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Age Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6 border-2"
              style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b-2" style={{ color: '#8B1538', borderColor: '#8B1538' }}>
                Age Categories:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ageCategories.map((age, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 rounded-xl border-2"
                    style={{ backgroundColor: index % 2 === 0 ? 'rgba(139, 21, 56, 0.05)' : '#FAFAF5', borderColor: '#8B1538', color: '#8B1538' }}
                  >
                    <span className="text-center text-sm font-medium" style={{ color: '#8B1538' }}>{age}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Training Venues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#8B1538' }}>
                Training Venues:
              </h3>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: '#8B1538' }}>
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/field/dugout.png"
                      alt="Dugout Club Arena BSD"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 border-t-2" style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}>
                    <h4 className="font-semibold text-lg mb-2" style={{ color: '#8B1538' }}>
                      Dugout Club Arena BSD
                    </h4>
                    <p className="text-sm" style={{ color: '#8B1538', opacity: 0.8 }}>
                      Professional football training facility
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: '#8B1538' }}>
                  <div className="relative w-full h-48">
                    <Image
                      src="/images/field/b23.png"
                      alt="B23 Simprug Arena"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 border-t-2" style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}>
                    <h4 className="font-semibold text-lg mb-2" style={{ color: '#8B1538' }}>
                      B23 Simprug Arena
                    </h4>
                    <p className="text-sm" style={{ color: '#8B1538', opacity: 0.8 }}>
                      Professional football training facility
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl p-6 border-2"
              style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b-2" style={{ color: '#8B1538', borderColor: '#8B1538' }}>
                Training Schedule:
              </h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 border-2"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? 'rgba(139, 21, 56, 0.05)' : '#FAFAF5', 
                      borderColor: '#8B1538' 
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: '#8B1538' }} />
                      <span className="font-semibold" style={{ color: '#8B1538' }}>{item.day}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: '#8B1538' }} />
                      <span style={{ color: '#8B1538' }}>{item.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: '#8B1538' }} />
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
              className="rounded-2xl p-6 border-2"
              style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b-2" style={{ color: '#8B1538', borderColor: '#8B1538' }}>
                Price List:
              </h3>
              <div className="space-y-2">
                {pricing.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 border-2"
                    style={{ 
                      backgroundColor: index % 2 === 0 ? 'rgba(139, 21, 56, 0.05)' : '#FAFAF5', 
                      borderColor: '#8B1538' 
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-semibold mb-1" style={{ color: '#8B1538' }}>
                          {item.package}
                        </div>
                        {item.note && (
                          <div className="text-xs mt-1" style={{ color: '#8B1538', opacity: 0.8 }}>
                            {item.note}
                          </div>
                        )}
                      </div>
                      <div className="font-bold text-right ml-4" style={{ color: '#8B1538' }}>
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

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
            className="inline-block text-white px-8 py-3 rounded-2xl font-medium transition-colors border-2"
            style={{ backgroundColor: '#8B1538', borderColor: '#8B1538' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6B0F2A';
              e.currentTarget.style.borderColor = '#6B0F2A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#8B1538';
              e.currentTarget.style.borderColor = '#8B1538';
            }}
          >
            Register for JOGO FOOTBALL ACADEMY
          </a>
        </motion.div>
      </div>
    </section>
  );
}

