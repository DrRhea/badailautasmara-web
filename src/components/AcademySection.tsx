"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const GOOGLE_FORM_ACADEMY = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Academy

// Schedule data
const schedule = [
  { day: "Tuesday", time: "16:00 - 18:00", venue: "Dugout Club Arena BSD" },
  { day: "Thursday", time: "16:00 - 18:00", venue: "Dugout Club Arena BSD" },
  { day: "Sunday", time: "08:00 - 10:00", venue: "Dugout Club Arena BSD" },
  { day: "Wednesday", time: "16:00 - 18:00", venue: "B23 Simprug Arena" },
  { day: "Saturday", time: "16:00 - 18:00", venue: "B23 Simprug Arena" },
];

const ageCategories = [
  "2.5 - 4 years old",
  "5 - 7 years old",
  "8 - 10 years old",
  "11 - 15 years old",
  "16 - 18 years old",
];

const pricing = [
  { package: "Registration", price: "IDR 500.000", note: "Include training kit; 1 set training jersey + socks" },
  { package: "4 sessions", price: "IDR 800.000", note: "" },
  { package: "8 sessions", price: "IDR 1.440.000", note: "" },
  { package: "12 sessions", price: "IDR 1.800.000", note: "" },
  { package: "24 sessions", price: "IDR 2.880.000", note: "" },
  { package: "48 sessions", price: "IDR 5.000.000", note: "Free registration" },
];

const sports = [
  "Football",
  "Basketball",
  "Badminton",
  "Swimming",
  "Cricket",
  "Kick Boxing",
];

export default function AcademySection() {
  return (
    <section id="academy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JOGO Academy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Structured training programs with regular schedules and professional
            coaching
          </p>
        </motion.div>

        {/* Available Sports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Available Sports:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 border border-gray-300 rounded-md"
              >
                <span className="text-gray-700">{sport}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Age Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Age Categories:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ageCategories.map((age, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-50 border border-gray-300 rounded-md"
              >
                <span className="text-gray-700 text-center">{age}</span>
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
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Training Schedule:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-300 rounded-lg p-6"
              >
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-gray-700 mr-2" />
                  <span className="font-semibold text-gray-900">{item.day}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-gray-700 mr-2" />
                  <span className="text-gray-700">{item.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-700 mr-2" />
                  <span className="text-gray-700 text-sm">{item.venue}</span>
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
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Price List:
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-6 py-4 text-left text-sm font-semibold text-gray-800">
                    Package
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left text-sm font-semibold text-gray-800">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {item.package}
                      {item.note && (
                        <span className="block text-sm text-gray-500 mt-1">
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700 font-medium">
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
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            Register for Academy
          </a>
        </motion.div>
      </div>
    </section>
  );
}

