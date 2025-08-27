"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold mb-8 text-[color:#0a3d62]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4 px-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:#f39c12]"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        />

        <motion.input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:#f39c12]"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        />

        <motion.textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:#f39c12]"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        />

        {error && <p className="text-red-600">{error}</p>}

        <motion.button
          type="submit"
          className="bg-[color:#f39c12] text-white py-3 rounded-full hover:bg-[color:#0a3d62] transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
