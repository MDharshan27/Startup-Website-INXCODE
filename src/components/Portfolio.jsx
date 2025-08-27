"use client";
import { motion } from "framer-motion";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const projects = [
  { id: 1, title: "E-commerce Website", tags: ["Web Design"], image: project1 },
  { id: 2, title: "Brand Logo Set", tags: ["Branding"], image: project2 },
  { id: 3, title: "Mobile App UI", tags: ["UI/UX"], image: project3 },
  { id: 4, title: "Marketing Campaign", tags: ["Digital Marketing"], image: project4 },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold mb-12 text-[#0a3d62]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Portfolio
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.h3
                className="text-xl font-semibold mb-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {project.tags.join(", ")}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
