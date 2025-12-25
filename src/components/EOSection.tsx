"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const GOOGLE_FORM_EVENT = "https://forms.gle/v7c5Tp9XM3ZpHEoLA";
const WHATSAPP_NUMBER = "6281188022607";
const BOOKING_MESSAGE = encodeURIComponent("Hello, I’m interested in JOGO services and would like to get more details.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${BOOKING_MESSAGE}`;

const services = [
  "Event Management: Local to international tournaments, permits, & venues",
  "Media & Digital Marketing: Integrated promotion strategies",
  "Event Activation & Branding: Physical and digital collaboration",
  "Logistics & Operations: Transportation, accommodation, and security",
];

const advantages = [
  "End-to-End Solutions",
  "Large-Scale Experience",
  "Collaborative Approach",
];

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

export default function EOSection() {
  return (
    <section id="eo" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event-organizer/bg-final.png"
          alt="Event Organizer Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay untuk readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(250, 250, 245, 0.8)' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#8B1538' }}>
            EVENT ORGANIZER
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 space-y-2"
            style={{ color: '#333333' }}
          >
            <p>Specialist in sports events.</p>
            <p>Fun, Professional, and Memorable.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <a
              href={GOOGLE_FORM_EVENT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white px-8 py-3 rounded-2xl font-medium transition-colors"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              Plan Your Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Professional Sports Event Organizer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            Professional Sports Event Organizer
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Event Organizer services for companies and institutions looking to
            host quality sports events
          </p>
        </motion.div>

        {/* Layanan Kami */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#8B1538' }}>
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start p-4 rounded-xl border"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
              >
                <CheckCircle className="h-5 w-5 mr-3 mt-1 shrink-0" style={{ color: '#8B1538' }} />
                <span style={{ color: '#8B1538' }}>{service}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Keunggulan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#8B1538' }}>
            Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl text-center border"
                style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538' }}
              >
                <h4 className="text-lg font-semibold" style={{ color: '#8B1538' }}>
                  {advantage}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Flow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" style={{ color: '#FAFAF5' }}>
            Event Flow
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventFlowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="relative h-full"
              >
                {/* Connector Line (except for last item) */}
                {index < eventFlowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0" style={{ backgroundColor: '#FAFAF5', opacity: 0.3 }}>
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 h-4 w-4" style={{ color: '#FAFAF5' }} />
                  </div>
                )}
                
                <div className="relative z-10 h-full flex flex-col p-6 rounded-2xl border" style={{ backgroundColor: '#FAFAF5', borderColor: '#8B1538', minHeight: '200px' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0" style={{ backgroundColor: '#8B1538', color: '#FAFAF5' }}>
                      <span className="font-bold text-lg">{step.number}</span>
                    </div>
                    <CheckCircle className="h-6 w-6 shrink-0" style={{ color: '#8B1538' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 shrink-0" style={{ color: '#8B1538' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm grow" style={{ color: '#333333', opacity: 0.8 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="text-center mt-12"
        >
          <a
            href={GOOGLE_FORM_EVENT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3 rounded-xl font-medium transition-colors"
            style={{ backgroundColor: '#8B1538' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
          >
            Inquire Event Services
          </a>
        </motion.div>

        {/* Booking & Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#FAFAF5' }}>
            Booking & Contact
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white px-8 py-4 rounded-2xl font-medium transition-colors text-lg"
              style={{ backgroundColor: '#8B1538' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B0F2A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B1538'}
            >
              Contact Us for Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

