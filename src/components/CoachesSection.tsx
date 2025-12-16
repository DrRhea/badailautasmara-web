"use client";

import { motion } from "framer-motion";

const coaches = [
  {
    name: "Swara Andhika Emil",
    role: "Founder & Owner",
    specialization: [],
  },
  {
    name: "Muhammad Fahrul Saputra",
    role: "Coach - UNJ Sports Science",
    specialization: ["Football", "Swimming", "Basket", "Badminton"],
  },
  {
    name: "Raihan Eka Putra",
    role: "Coach - Unpam Sports Science",
    specialization: ["Football", "Basket", "Kick Boxing"],
  },
  {
    name: "Asmin Syahrul Aziz",
    role: "Coach - Unpam Sports Science",
    specialization: ["Basket", "Badminton", "Swimming"],
  },
  {
    name: "Teguh Dwi Andhika",
    role: "Coach - English Science",
    specialization: [],
  },
];

export default function CoachesSection() {
  return (
    <section id="coach" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet The Coaches
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tim pelatih profesional dengan latar belakang pendidikan Ilmu
            Keolahragaan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm"
            >
              <div className="mb-4">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-400 border-dashed">
                  <span className="text-gray-500 text-xs text-center">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {coach.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-1">
                  {coach.role}
                </p>
              </div>
              {coach.specialization.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Spesialis:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialization.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

