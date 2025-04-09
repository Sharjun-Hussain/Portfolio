"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";
import saloonappcustomer from "@/public/saloon-app-customer.svg";
import saloonappmerchant from "@/public/saloon-app-merchant.svg";
import inventory from "@/public/inventory.png";
import softxpertz from "@/public/softxpertz.png";

const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [hoveredProject, setHoveredProject] = useState<any>();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Project data with image stacks
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Next.js store with Stripe payments and inventory management",
      tech: [
        { name: "Next.js", icon: "⏭️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Stripe", icon: "💳" },
        { name: "Tailwind", icon: "🎨" },
      ],
      images: [saloonappcustomer, saloonappmerchant],
      links: {
        github: "#",
        live: "#",
        caseStudy: "#",
      },
      stats: {
        commits: 128,
        stars: 89,
      },
    },
    {
      title: "AI Content Generator",
      description:
        "GPT-4 powered writing assistant with real-time collaboration",
      tech: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "OpenAI", icon: "🧠" },
        { name: "MongoDB", icon: "🍃" },
      ],
      images: ["/project-ai-1.jpg", "/project-ai-2.jpg", "/project-ai-3.jpg"],
      links: {
        github: "#",
        live: "#",
        caseStudy: "#",
      },
      stats: {
        commits: 256,
        stars: 142,
      },
    },
    {
      title: "Health Analytics Dashboard",
      description: "Real-time patient data visualization for clinics",
      tech: [
        { name: "React", icon: "⚛️" },
        { name: "D3.js", icon: "📈" },
        { name: "Firebase", icon: "🔥" },
        { name: "AWS", icon: "☁️" },
      ],
      images: [
        "/project-health-1.jpg",
        "/project-health-2.jpg",
        "/project-health-3.jpg",
      ],
      links: {
        github: "#",
        live: "#",
        caseStudy: "#",
      },
      stats: {
        commits: 84,
        stars: 56,
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gray-950 overflow-hidden"
      id="projects"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Project
            </span>{" "}
            Portfolio
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Selected works showcasing pixel-perfect execution and technical
            innovation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              {/* Stacked Images Container */}
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
                variants={{
                  hover: {
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent z-10" />

                {/* Stacked images */}
                {project.images.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className={`absolute inset-0 ${
                      imgIndex > 0 ? "pointer-events-none" : ""
                    }`}
                    initial={{ scale: 1 }}
                    animate={{
                      scale:
                        hoveredProject === index
                          ? imgIndex === 0
                            ? 1
                            : 1 - imgIndex * 0.03
                          : 1,
                      y:
                        hoveredProject === index
                          ? imgIndex === 0
                            ? 0
                            : imgIndex * -8
                          : 0,
                      zIndex: 10 - imgIndex,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </motion.div>
                ))}

                {/* Quick action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    y: hoveredProject === index ? 0 : 10,
                  }}
                  className="absolute bottom-4 right-4 flex gap-2 z-20"
                >
                  <a
                    href={project.links.github}
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.links.live}
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="Live demo"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={project.links.caseStudy}
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                    aria-label="Case study"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </a>
                </motion.div>

                {/* Stats badge */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  <div className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.stats.stars}
                  </div>
                  <div className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-white flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {project.stats.commits}
                  </div>
                </div>
              </motion.div>

              {/* Project info */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1"
                    >
                      <span>{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
