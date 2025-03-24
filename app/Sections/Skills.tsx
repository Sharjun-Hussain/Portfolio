"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Data for cards
  const skillCards = [
    {
      title: "Frontend Engineering",
      icon: "💻",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      level: 95,
      color: "from-purple-600 to-blue-500",
      bg: "bg-gradient-to-br from-purple-900/30 to-blue-900/30",
      border: "border-purple-500/30",
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express", "GraphQL", "REST APIs"],
      level: 88,
      color: "from-cyan-500 to-emerald-500",
      bg: "bg-gradient-to-br from-cyan-900/30 to-emerald-900/30",
      border: "border-cyan-500/30",
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      skills: ["Figma", "Adobe XD", "User Testing", "Prototyping"],
      level: 82,
      color: "from-pink-500 to-rose-500",
      bg: "bg-gradient-to-br from-pink-900/30 to-rose-900/30",
      border: "border-pink-500/30",
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
      level: 78,
      color: "from-amber-500 to-orange-500",
      bg: "bg-gradient-to-br from-amber-900/30 to-orange-900/30",
      border: "border-amber-500/30",
    },
  ];

  const techStacks = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️", level: "Expert" },
        { name: "Next.js", icon: "⏭️", level: "Advanced" },
        { name: "Tailwind", icon: "🌀", level: "Expert" },
      ],
      bg: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20",
      border: "border-indigo-500/20",
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "🟢", level: "Advanced" },
        { name: "GraphQL", icon: "📊", level: "Intermediate" },
        { name: "PostgreSQL", icon: "🐘", level: "Intermediate" },
      ],
      bg: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      border: "border-blue-500/20",
    },
    {
      category: "Tools",
      technologies: [
        { name: "Docker", icon: "🐳", level: "Intermediate" },
        { name: "Git", icon: "🔀", level: "Advanced" },
        { name: "Figma", icon: "✏️", level: "Expert" },
      ],
      bg: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20",
      border: "border-emerald-500/20",
    },
  ];

  const achievementCards = [
    {
      title: "Projects Shipped",
      value: "50+",
      description: "Web & mobile applications",
      icon: "🚀",
      bg: "bg-gradient-to-br from-violet-600/80 to-fuchsia-600/80",
    },
    {
      title: "Years Experience",
      value: "8+",
      description: "Building scalable products",
      icon: "⏳",
      bg: "bg-gradient-to-br from-blue-600/80 to-cyan-600/80",
    },
    {
      title: "Client Satisfaction",
      value: "100%",
      description: "5-star rated engagements",
      icon: "❤️",
      bg: "bg-gradient-to-br from-rose-600/80 to-pink-600/80",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gray-950 overflow-hidden"
      id="skills"
    >
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-white/10"
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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A deep dive into my skills, technologies, and professional
            milestones.
          </p>
        </motion.div>

        {/* Skill Cards (Glass Morphism) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setIsHovered(index)}
              onHoverEnd={() => setIsHovered(null)}
              className={`relative rounded-2xl overflow-hidden backdrop-blur-lg border ${card.border} ${card.bg} p-6 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Proficiency</span>
                  <span>{card.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${card.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${card.color}`}
                  />
                </div>
              </div>
              <ul className="space-y-2">
                {card.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="text-purple-400">▹</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
              {/* Hover glow effect */}
              {isHovered === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Cards (3D Depth) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.4 },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"
        >
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`rounded-2xl backdrop-blur-lg border ${stack.border} ${stack.bg} p-6 transition-all duration-300 shadow-xl`}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {stack.category} Stack
              </h3>
              <div className="space-y-4">
                {stack.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-white">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-xs px-3 py-1 bg-gray-800/50 rounded-full text-gray-300">
                      {tech.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards (Glowing) */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.6 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievementCards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl overflow-hidden ${card.bg} p-6 shadow-lg relative`}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  {card.value}
                </div>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
