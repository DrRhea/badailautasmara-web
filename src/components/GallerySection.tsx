"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Array untuk foto galeri - dibagi menjadi 4 kategori
const galleryCategories = [
  {
    title: "JOGO Football Academy",
    images: [
      { src: "/images/gallery-new/academy-1.jpg", alt: "JOGO Football Academy 1" },
      { src: "/images/gallery-new/academy-2.jpg", alt: "JOGO Football Academy 2" },
      { src: "/images/gallery-new/academy-3.jpg", alt: "JOGO Football Academy 3" },
    ],
  },
  {
    title: "JOGO Private Training Services",
    images: [
      { src: "/images/gallery-new/private-1.png", alt: "JOGO Private Training 1" },
      { src: "/images/gallery-new/private-2.png", alt: "JOGO Private Training 2" },
      { src: "/images/gallery-new/private-3.png", alt: "JOGO Private Training 3" },
    ],
  },
  {
    title: "JOGO Private Training Small Group",
    images: [
      { src: "/images/gallery-new/small-group-1.png", alt: "JOGO Small Group Training 1" },
      { src: "/images/gallery-new/small-group-2.png", alt: "JOGO Small Group Training 2" },
      { src: "/images/gallery-new/small-group-3.png", alt: "JOGO Small Group Training 3" },
    ],
  },
  {
    title: "Sports Event",
    images: [
      { src: "/images/gallery-new/sports-event-1.png", alt: "Sports Event 1" },
      { src: "/images/gallery-new/sports-event-2.png", alt: "Sports Event 2" },
      { src: "/images/gallery-new/sports-event-3.png", alt: "Sports Event 3" },
    ],
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20" style={{ background: 'linear-gradient(to bottom, #FAFAF5, #8B1538)' }}>
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
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B1538' }}>
            Moments from our events and training sessions
          </p>
        </motion.div>

        <div className="space-y-16">
          {galleryCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ 
                color: categoryIndex < 2 ? '#8B1538' : '#FAFAF5' 
              }}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + imageIndex * 0.1 }}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

