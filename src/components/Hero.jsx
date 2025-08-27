import HeroImage from "../assets/image.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white"
        initial={{ opacity: 0, y: 50 }}         // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}          // Fade in and move up
        transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Smart Software Solutions
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Empowering businesses and freelancers to create cutting-edge digital products.
        </motion.p>

        <motion.a
          href="#services"
          className="bg-[color:#f39c12] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 hover:bg-[color:#0a3d62]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Get Started
        </motion.a>
      </motion.div>
    </section>
  );
}
