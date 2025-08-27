import { FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import motion

export default function About() {
  const values = [
    {
      icon: <FaLightbulb className="text-5xl text-blue-500 mb-4" />,
      title: "Innovation",
      desc: "We craft smart software solutions for modern businesses.",
    },
    {
      icon: <FaRocket className="text-5xl text-purple-500 mb-4" />,
      title: "Performance",
      desc: "High-quality, efficient, and reliable products every time.",
    },
    {
      icon: <FaUsers className="text-5xl text-pink-500 mb-4" />,
      title: "Customer Focus",
      desc: "Your success drives our mission and software development.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold mb-6 text-[color:#0a3d62] font-poppins"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} // animate only once
      >
        About Neuronix
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="max-w-3xl mx-auto mb-12 text-gray-700 text-lg md:text-xl font-poppins"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Neuronix is a smart software company delivering innovative AI and cloud
        solutions for businesses worldwide.
      </motion.p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 w-72 md:w-80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }} // stagger effect
            viewport={{ once: true }}
          >
            {v.icon}
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 font-poppins">
              {v.title}
            </h3>
            <p className="text-gray-600 font-poppins">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
