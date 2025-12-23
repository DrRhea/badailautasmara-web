"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Array untuk foto galeri
const galleryImages = [
  { src: "/images/gallery/gallery-10.png", alt: "Team Photo - JOGO" },
  { src: "/images/gallery/gallery-1.png", alt: "JOGO Training Session" },
  { src: "/images/gallery/gallery-2.png", alt: "Football Training" },
  { src: "/images/gallery/gallery-3.png", alt: "Football Match Action" },
  { src: "/images/gallery/gallery-4.png", alt: "Team Celebration" },
  { src: "/images/gallery/gallery-5.png", alt: "Football Player" },
  { src: "/images/gallery/gallery-6.png", alt: "Swimming Training" },
  { src: "/images/gallery/gallery-8.png", alt: "Football Player - JOGO" },
  { src: "/images/gallery/gallery-9.png", alt: "Football Training Session" },
];

export default function GallerySection() {
  // Jika belum ada foto, tampilkan placeholder
  if (galleryImages.length === 0) {
    return (
      <section id="gallery" className="py-20" style={{ backgroundColor: 'rgba(139, 21, 56, 0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
              Gallery
            </h2>
            <p className="text-lg mb-8" style={{ color: '#333333' }}>
              Photo gallery will be displayed here
            </p>
            <div className="bg-gray-200 rounded-2xl p-12 border-2 border-dashed" style={{ borderColor: '#8B1538' }}>
              <p className="text-sm" style={{ color: '#8B1538', opacity: 0.7 }}>
                Upload photos to /public/images/gallery/ folder
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: 'rgba(139, 21, 56, 0.03)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#8B1538' }}>
            Gallery
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#333333' }}>
            Moments from our events and training sessions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden border"
              style={{ borderColor: '#8B1538' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

