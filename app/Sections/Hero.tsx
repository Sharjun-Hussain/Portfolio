"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../Component/ui/Hero-highlight";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "../Component/ui/floating-navbar";
import { Spotlight } from "../Component/ui/Spotlight";
import { HoverBorderGradient } from "../Component/ui/hover-border-gradient";

function Hero() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <HeroHighlight>
      <Spotlight
        className="-top-40 left-0 md:left-30 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:right-10 md:-top-20"
        fill="blue"
      />

      <FloatingNav navItems={navItems} />
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hey there! I&apos;m Sharjun Hussain, a creative MERN developer .
        <Highlight className="text-black dark:text-white">
          delivering cutting-edge web applications
        </Highlight>
        <div className="m-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <a href="mailto:sharjunhssain@outlook.com" className="text-xl">Let's have a conversation</a>
          </HoverBorderGradient>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

export default Hero;
