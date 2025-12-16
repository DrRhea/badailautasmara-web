"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID"; // Ganti dengan link Google Form Fathan

const sports = [
  "Sepak Bola (Football)",
  "Basket (Basketball)",
  "Bulutangkis (Badminton)",
  "Renang (Swimming)",
  "Cricket & Kick Boxing",
];

const pricing = [
  { type: "Trial Session", price: "IDR 150.000", per: "/ player" },
  { type: "Small Group", price: "IDR 200.000", per: "/ player" },
  { type: "Couple Training", price: "IDR 250.000", per: "/ player" },
  { type: "Single Visit / Private", price: "IDR 300.000", per: "" },
];

export default function JOGOSection() {
  return (
    <section id="jogo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Program Latihan & Private Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pelatihan intensif didukung oleh pelatih lulusan Sarjana Ilmu
            Keolahragaan (Sports Science)
          </p>
        </motion.div>

        {/* Cabang Olahraga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Cabang Olahraga Tersedia:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 border border-gray-300 rounded-md"
              >
                <CheckCircle className="h-5 w-5 text-gray-700 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{sport}</span>
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
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            JOGO Private Training - Harga:
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-6 py-4 text-left text-sm font-semibold text-gray-800">
                    Paket
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left text-sm font-semibold text-gray-800">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      {item.type}
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
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            Daftar Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}

