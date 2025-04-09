"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const ContactSection = () => {
  const formRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const socialLinks = [
    { icon: <FiGithub />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
    { icon: <FiTwitter />, href: "#" },
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800 p-8 rounded-2xl shadow-xl"
            whileHover={{ rotateY: 2, rotateX: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <form ref={formRef} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 md:pl-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-slate-800 p-6 rounded-2xl shadow-xl group hover:bg-slate-750 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <FiPhone className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Phone
                  </h3>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800 p-6 rounded-2xl shadow-xl group hover:bg-slate-750 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <FiMail className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Email
                  </h3>
                  <p className="text-slate-300">contact@yourportfolio.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800 p-6 rounded-2xl shadow-xl group hover:bg-slate-750 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <FiMapPin className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Address
                  </h3>
                  <p className="text-slate-300">New York, NY 10001, USA</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 rounded-lg hover:bg-purple-500 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-2xl">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
