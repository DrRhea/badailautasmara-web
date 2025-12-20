"use client";

import { motion } from "framer-motion";

const portfolios = [
  {
    title: "BTN Jakarta Run",
    description: "Large-scale running event",
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
    title: "Collaboration with Turkish Embassy",
    description: "29 Ekim Event",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20" style={{ backgroundColor: 'rgba(139, 21, 56, 0.03)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            Portfolio Highlights
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Successful events we have organized
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
              className="rounded-2xl overflow-hidden shadow-sm border"
              style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
            >
              <div className="h-48 flex items-center justify-center border-b border-dashed" style={{ backgroundColor: 'rgba(139, 21, 56, 0.1)', borderColor: '#8B1538' }}>
                <span className="text-sm" style={{ color: '#8B1538', opacity: 0.7 }}>Portfolio Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8B1538' }}>
                  {portfolio.title}
                </h3>
                <p style={{ color: '#8B1538', opacity: 0.8 }}>{portfolio.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

