"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Fees Management System",
    description:
      "Mobile app for private institutes to manage fee collection and student data",
    tags: ["React Native", "Firebase", "Node.js"],
    link: "#",
    image: "/fees-management.jpg", // Replace with your image
  },
  {
    title: "Salon Booking Platform",
    description:
      "Customer and merchant apps with real-time scheduling and payments",
    tags: ["Flutter", "Stripe", "MongoDB"],
    link: "#",
    image: "/salon-booking.jpg",
  },
  {
    title: "School Attendance System",
    description: "Automated attendance tracking with scanner mobile apps",
    tags: ["React Native", "NFC", "AWS"],
    link: "#",
    image: "/school-attendance.jpg",
  },
  {
    title: "Inventory Management",
    description: "ERP system with module creation and database optimization",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    image: "/inventory-system.jpg",
  },
];

export const ProjectsSections = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Selected work showcasing technical solutions and user-focused design
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
