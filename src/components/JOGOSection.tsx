"use client";

import { motion } from "framer-motion";

const GOOGLE_FORM_PRIVATE = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form untuk Private

const pricing = [
  { type: "Trial Session", price: "IDR 150.000", per: "/ player", note: "" },
  { type: "Small Group", price: "IDR 200.000", per: "/ player", note: "(3-6 participant)" },
  { type: "Couple Training", price: "IDR 250.000", per: "/ player", note: "" },
  { type: "Single Visit / Private", price: "IDR 300.000", per: "", note: "" },
];

export default function JOGOSection() {
  return (
    <section id="private" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            JOGO Private Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Personalized one-on-one or small group training sessions tailored
            to your needs
          </p>
        </motion.div>

        {/* Tabel Harga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            JOGO Private Training - Pricing:
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
                      {item.type}
                      {item.note && (
                        <span className="block text-sm text-gray-500 mt-1">
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700 font-medium">
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
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            Register for Private Training
          </a>
        </motion.div>
      </div>
    </section>
  );
}

