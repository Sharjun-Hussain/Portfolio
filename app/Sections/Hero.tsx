"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, isMobile ? 10 : 20, 0],
      transition: {
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "⏭️" },
    { name: "JavaScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind", icon: "🎨" },
    { name: "GraphQL", icon: "📊" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        {hasMounted &&
          [...Array(isMobile ? 5 : 10)].map((_, i) => (
            <motion.div
              key={i}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: `${Math.random() * (isMobile ? 100 : 200) + 50}px`,
                height: `${Math.random() * (isMobile ? 100 : 200) + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
      </motion.div>

      {/* Binary rain effect for tech vibe */}
      {hasMounted && (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {[...Array(isMobile ? 20 : 40)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: [0, window.innerHeight + 100],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-green-400 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      )}

      <div className="container mx-auto py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 md:space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-purple-300">Sharjun Hussain</span>
              </h1>
              <div className="h-14 sm:h-16 md:h-20 mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-100">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Tech Enthusiast",
                    2000,
                    "Problem Solver",
                    2000,
                    "UI/UX Lover",
                    2000,
                    "Coffee Addict ☕",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              I craft{" "}
              <span className="text-purple-300 font-medium">
                digital experiences
              </span>{" "}
              that are fast, accessible, and visually stunning. With{" "}
              {new Date().getFullYear() - 2023}+ years of transforming ideas
              into{" "}
              <span className="text-purple-300 font-medium">
                scalable solutions
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
                View Projects
              </button>
              <button className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Contact Me
              </button>
            </motion.div>

            {/* Tech stack cloud */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 md:pt-8"
            >
              <p className="text-gray-400 mb-3">My tech arsenal:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.7 + i * 0.1,
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-3 py-1 bg-gray-800 bg-opacity-60 rounded-full text-sm text-white flex items-center gap-1 cursor-default"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
            >
              <div className="bg-gray-800 bg-opacity-40 p-3 rounded-lg border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-purple-300">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
              </div>
              <div className="bg-gray-800 bg-opacity-40 p-3 rounded-lg border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-purple-300">
                  10M+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Users</div>
              </div>
              <div className="bg-gray-800 bg-opacity-40 p-3 rounded-lg border border-gray-700">
                <div className="text-2xl sm:text-3xl font-bold text-purple-300">
                  ∞
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Coffee Cups
                </div>
              </div>
            </motion.div> */}
          </div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20"
              />

              {/* Main card */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden border-4 border-white border-opacity-10 shadow-2xl relative">
                  {/* Placeholder for your image - replace with Next/Image */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <div className="text-white font-mono text-sm sm:text-base">
                        {isMobile
                          ? "Your Image Here"
                          : "Your Awesome Profile Image"}
                      </div>
                    </div>
                  </div>

                  {/* Code snippet overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs sm:text-sm font-mono text-green-400">
                    <div className="flex">
                      <span className="text-gray-500 mr-2">1</span>
                      <span className="text-purple-300 me-1">const </span>{" "}
                      <span className="text-white">developer</span> = {"{"}
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-2">2</span>
                      <span className="ml-4 text-white">name:</span>{" "}
                      <span className="text-yellow-300">
                        &quot;Sharjun Hussain&quot;
                      </span>
                      ,
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-2">3</span>
                      <span className="ml-4 text-white">skills:</span>{" "}
                      <span className="text-blue-300">
                        [&quot;React&quot;, &quot;Next.js&quot;]
                      </span>
                      ,
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-2">4</span>
                      <span className="ml-4 text-white">passion:</span>{" "}
                      <span className="text-yellow-300">
                        Creating awesome stuff
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 mr-2">5</span>
                      {"}"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              {!isMobile && (
                <>
                  <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -left-4 -top-4 bg-white p-2 rounded-lg shadow-lg"
                  >
                    <div className="text-xs font-mono font-bold text-gray-800">
                      $ npm start
                    </div>
                  </motion.div>

                  <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                    className="absolute -right-4 -bottom-4 bg-white p-2 rounded-lg shadow-lg"
                  >
                    <div className="text-xs font-mono font-bold text-gray-800">
                      git push --force
                    </div>
                  </motion.div>

                  <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute -right-6 top-1/4 bg-yellow-400 p-2 rounded-lg shadow-lg rotate-12"
                  >
                    <div className="text-xs font-mono font-bold text-gray-900">
                      🚀 New Project!
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Explore more</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Social links */}
    </section>
  );
};

export default Hero;
