"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founder = {
  name: "Swara Andhika Emil",
  university: "Universitas Indonesia",
  major: "Dutch Literature",
  role: "Founder & Owner of JOGO",
  additionalRoles: [
    "President Director at PT BADAI LAUT ASMARA",
    "Chairman of Yayasan Abang None Jakarta Olahraga",
    "President of Pemuda Olahraga Bersatu",
    "Indonesian - Actor"
  ],
  specialization: [],
  photo: "/images/coaches/foto-swara-new.png",
};

const coaches = [
  {
    name: "Muhhamad Fahrul Saputra",
    university: "Universitas Negeri Jakarta",
    major: "Sports Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Football", "Swimming", "Basketball", "Badminton"],
    photo: "/images/coaches/muhhamad-fahrul-saputra.png",
  },
  {
    name: "Raihan Eka Putra",
    university: "Universitas Pamulang",
    major: "Sports Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Football", "Basketball", "Kick Boxing"],
    photo: "/images/coaches/raihan-eka-putra.png",
  },
  {
    name: "Asmin Syahrul Aziz",
    university: "Universitas Pamulang",
    major: "Sports Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Basketball", "Badminton", "Swimming"],
    photo: "/images/coaches/asmin-syahrul-aziz.png",
  },
  {
    name: "Teguh Dwi Andhika",
    university: "Universitas Pamulang",
    major: "English Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Football", "Kick Boxing", "Basketball"],
    photo: "/images/coaches/teguh-dwi-andhika.png",
  },
  {
    name: "Muhammad Naufal Tarmizi",
    university: "Universitas Pamulang",
    major: "Sports Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Football"],
    photo: "/images/coaches/muhammad-naufal-tarmizi.png",
  },
  {
    name: "Faqih Anwar Rudin",
    university: "Universitas Pamulang",
    major: "Sports Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Football", "Basketball"],
    photo: "/images/coaches/faqih-anwar-rudin.png",
  },
  {
    name: "Ardian Syah Harahap",
    university: "Universitas Pamulang",
    major: "Sports Science - Bachelor Degree",
    role: "Coach - Indonesian",
    specialization: ["Football", "Kick Boxing"],
    photo: "/images/coaches/ardian-syah-harahap.png",
  },
];

export default function CoachesSection() {
  return (
    <section id="coach" className="relative py-24 sm:py-28 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/meet-the-team-coaches/meet-the-team-coaches-background.png"
          alt="Meet The Team Coaches Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay untuk readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(250, 250, 245, 0.6)' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#8B1538' }}>
            Meet The Team Coaches
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Professional coaching team with Sports Science
            educational background
          </p>
        </motion.div>

        {/* Founder Card - Separate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 sm:mb-24"
        >
          <div className="max-w-md mx-auto rounded-2xl p-8 sm:p-10 border-2 shadow-lg" style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}>
            <div className="mb-6">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 flex items-center justify-center border-2 overflow-hidden" style={{ borderColor: '#8B1538', backgroundColor: 'rgba(139, 21, 56, 0.1)' }}>
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                ) : (
                  <span className="text-xs text-center" style={{ color: '#8B1538', opacity: 0.7 }}>Photo</span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-center" style={{ color: '#8B1538' }}>
                {founder.name}
              </h3>
              {founder.university && (
                <p className="text-sm text-center mt-1" style={{ color: '#8B1538', opacity: 0.7 }}>
                  {founder.university}
                </p>
              )}
              {founder.major && (
                <p className="text-sm text-center mt-0.5" style={{ color: '#8B1538', opacity: 0.7 }}>
                  {founder.major}
                </p>
              )}
              <p className="text-base text-center mt-3 font-medium" style={{ color: '#8B1538', opacity: 0.9 }}>
                {founder.role}
              </p>
              {founder.additionalRoles && founder.additionalRoles.length > 0 && (
                <div className="mt-3 space-y-1">
                  {founder.additionalRoles.map((additionalRole, idx) => (
                    <p key={idx} className="text-xs text-center" style={{ color: '#8B1538', opacity: 0.7 }}>
                      {additionalRole}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="overflow-hidden py-4">
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={{
              x: [0, -(350 * coaches.length)],
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
                className="shrink-0 w-[300px] sm:w-[320px] md:w-[350px] rounded-2xl p-6 sm:p-8 shadow-lg border-2"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
              >
                <div className="mb-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-5 flex items-center justify-center border-2 overflow-hidden" style={{ borderColor: '#8B1538', backgroundColor: 'rgba(139, 21, 56, 0.1)' }}>
                    {coach.photo ? (
                      <Image
                        src={coach.photo}
                        alt={coach.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover object-top rounded-full"
                      />
                    ) : (
                      <span className="text-xs text-center" style={{ color: '#8B1538', opacity: 0.7 }}>Photo</span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-center" style={{ color: '#8B1538' }}>
                    {coach.name}
                  </h3>
                  {coach.university && (
                    <p className="text-xs text-center mt-1" style={{ color: '#8B1538', opacity: 0.7 }}>
                      {coach.university}
                    </p>
                  )}
                  {coach.major && (
                    <p className="text-xs text-center mt-0.5" style={{ color: '#8B1538', opacity: 0.7 }}>
                      {coach.major}
                    </p>
                  )}
                  <p className="text-sm text-center mt-2 font-medium" style={{ color: '#8B1538', opacity: 0.9 }}>
                    {coach.role}
                  </p>
                </div>
                {coach.specialization.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2" style={{ color: '#8B1538' }}>
                      Specialties:
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

