"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const eventFlowSteps = [
  {
    number: "1",
    title: "Consultation & concept",
    description: "Understanding your vision and requirements"
  },
  {
    number: "2",
    title: "Event planning",
    description: "Detailed planning and preparation"
  },
  {
    number: "3",
    title: "Execution",
    description: "Professional event implementation"
  },
  {
    number: "4",
    title: "Evaluation & documentation",
    description: "Post-event review and documentation"
  },
];

export default function EventFlowSection() {
  return (
    <section className="py-20" style={{ backgroundColor: 'rgba(139, 21, 56, 0.03)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            Event Flow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventFlowSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (except for last item) */}
              {index < eventFlowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0" style={{ backgroundColor: '#8B1538', opacity: 0.3 }}>
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#8B1538' }} />
                </div>
              )}
              
              <div className="relative z-10 p-6 rounded-2xl border" style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#8B1538', color: '#FAFAF5' }}>
                    <span className="font-bold text-lg">{step.number}</span>
                  </div>
                  <CheckCircle className="h-6 w-6" style={{ color: '#8B1538' }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8B1538' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: '#333333', opacity: 0.8 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

