"use client";
import { motion } from "framer-motion";

const services = [
  { id: 1, title: "Web Design", description: "Beautiful and responsive websites tailored to clients." },
  { id: 2, title: "Brand Strategy", description: "Creative strategies to build and grow brands." },
  { id: 3, title: "UI/UX Design", description: "User-friendly interfaces and experiences." },
  { id: 4, title: "Marketing Solutions", description: "Effective digital marketing campaigns for businesses." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold mb-12 text-[color:#0a3d62]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      {/* Service Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg p-8 w-72"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
