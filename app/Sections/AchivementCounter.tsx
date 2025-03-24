// components/achievements-counter.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Projects Completed", value: 87, suffix: "+" },
  { id: 2, name: "Happy Clients", value: 42, suffix: "+" },
  { id: 3, name: "Years Experience", value: 5, suffix: "+" },
  { id: 4, name: "Open Source Contributions", value: 23, suffix: "" },
];

export function AchievementsCounter() {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <CounterItem
              key={stat.id}
              name={stat.name}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CounterItem({
  name,
  value,
  suffix,
}: {
  name: string;
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const increment = value / (duration / 16); // Roughly 60fps

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= value) {
          clearInterval(timer);
          return value;
        }
        return Math.ceil(prev + increment);
      });
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 md:text-base">
        {name}
      </div>
    </motion.div>
  );
}
