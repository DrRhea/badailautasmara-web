"use client";

import { motion } from "framer-motion";

const portfolios = [
  {
    title: "BTN Jakarta Run",
    description: "Event lari skala besar",
  },
  {
    title: "Abnon Olahraga Activities",
    description: "Tee Party, Running",
  },
  {
    title: "CIC x Abnon Olahraga",
    description: "International Basketball Event",
  },
  {
    title: "Kerjasama dengan Kedutaan Turki",
    description: "29 Ekim Event",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Event-event sukses yang telah kami selenggarakan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center border-b border-gray-400 border-dashed">
                <span className="text-gray-500 text-sm">Portfolio Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-gray-600">{portfolio.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

