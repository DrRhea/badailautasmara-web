"use client";

import { motion } from "framer-motion";

const GOOGLE_FORM_PRIVATE = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Private

const sports = [
  "Football",
  "Basketball",
  "Badminton",
  "Swimming",
  "Cricket",
  "Kick Boxing",
];

const pricing = [
  { type: "Trial Session", price: "IDR 150,000", per: "/ player", note: "" },
  { type: "Small Group", price: "IDR 200,000", per: "/ player", note: "(3-6 participant)" },
  { type: "Couple Training", price: "IDR 250,000", per: "/ player", note: "" },
  { type: "Single Visit / Private", price: "IDR 300,000", per: "", note: "" },
];

export default function JOGOSection() {
  return (
    <section id="private" className="py-20" style={{ backgroundColor: 'rgba(250, 250, 245, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            JOGO PRIVATE TRAINING SERVICES
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Personalized one-on-one or small group training sessions tailored
            to your needs
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
          <h3 className="text-xl font-semibold mb-6" style={{ color: '#8B1538' }}>
            Available Sports:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="flex items-center p-4 rounded-xl border"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538', color: '#8B1538' }}
              >
                <span style={{ color: '#8B1538' }}>{sport}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabel Harga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#8B1538' }}>
                JOGO PRIVATE TRAINING SERVICES - Pricing:
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
                      {item.type}
                      {item.note && (
                        <span className="block text-sm mt-1" style={{ color: '#8B1538', opacity: 0.8 }}>
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="border px-6 py-4 font-medium" style={{ borderColor: '#8B1538', color: '#8B1538' }}>
                      {item.price} {item.per}
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
            href={GOOGLE_FORM_PRIVATE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-xl font-medium transition-colors"
            style={{ backgroundColor: '#8B1538' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
          >
                Register for JOGO PRIVATE TRAINING SERVICES
          </a>
        </motion.div>
      </div>
    </section>
  );
}

