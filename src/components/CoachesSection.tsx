"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const coaches = [
  {
    name: "Swara Andhika Emil",
    role: "Founder & Owner",
    specialization: [],
    photo: "/images/coaches/swara-andhika-emil.png",
  },
  {
    name: "Muhhamad Fahrul Saputra",
    role: "Coach - Universitas Negeri Jakarta Sports Science",
    specialization: ["Football", "Swimming", "Basket", "Badminton"],
    photo: "/images/coaches/muhhamad-fahrul-saputra.png",
  },
  {
    name: "Raihan Eka Putra",
    role: "Coach - Universitas Pamulang Sports Science",
    specialization: ["Football", "Basket", "Kick Boxing"],
    photo: null,
  },
  {
    name: "Asmin Syahrul Aziz",
    role: "Coach - Universitas Pamulang Sports Science",
    specialization: ["Basket", "Badminton", "Swimming"],
    photo: null,
  },
  {
    name: "Teguh Dwi Andhika",
    role: "Coach - English Science",
    specialization: [],
    photo: null,
  },
];

export default function CoachesSection() {
  return (
    <section id="coach" className="py-20" style={{ backgroundColor: 'rgba(139, 21, 56, 0.03)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            Meet The Coaches
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Professional coaching team with Sports Science
            educational background
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -(316 * coaches.length)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate coaches untuk infinite scroll */}
            {[...coaches, ...coaches].map((coach, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[350px] rounded-2xl p-6 shadow-sm border"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
              >
                <div className="mb-4">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border-2 overflow-hidden" style={{ borderColor: '#8B1538', backgroundColor: 'rgba(139, 21, 56, 0.1)' }}>
                    {coach.photo ? (
                      <Image
                        src={coach.photo}
                        alt={coach.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-xs text-center" style={{ color: '#8B1538', opacity: 0.7 }}>Photo</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-center" style={{ color: '#8B1538' }}>
                    {coach.name}
                  </h3>
                  <p className="text-sm text-center mt-1" style={{ color: '#8B1538', opacity: 0.8 }}>
                    {coach.role}
                  </p>
                </div>
                {coach.specialization.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2" style={{ color: '#8B1538' }}>
                      Specialization:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full border"
                          style={{ backgroundColor: 'rgba(139, 21, 56, 0.1)', color: '#8B1538', borderColor: '#8B1538' }}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

