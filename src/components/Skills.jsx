import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// All skills with their icons (using simple-icons CDN or emoji fallbacks)
const allSkills = [
  // Languages
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  // Frameworks
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  // Databases
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

function SkillItem({ skill }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-8 py-4 min-w-[120px]">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2.5 group-hover:border-accent-cyan/30 transition-all">
        <img
          src={skill.icon}
          alt={skill.name}
          className={`w-full h-full object-contain ${skill.invert ? "invert" : ""}`}
          loading="lazy"
        />
      </div>
      <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function InfiniteCarousel({ skills, direction = "left", speed = 30 }) {
  // Double the items for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split skills into two rows
  const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-accent-violet/10 rounded-full blur-[150px]" />
      <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-amber text-sm font-mono tracking-wider uppercase">
              Skills
            </span>
            <h2 className="section-heading mt-2">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Infinite Carousels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <InfiniteCarousel skills={firstRow} direction="left" speed={35} />
            <InfiniteCarousel skills={secondRow} direction="right" speed={40} />
          </motion.div>

          {/* Additional Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h4 className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
              Also familiar with
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "REST APIs",
                "GraphQL",
                "BLoC Pattern",
                "Clean Architecture",
                "CI/CD",
                "Agile",
                "WebSockets",
                "OAuth",
                "State Management",
                "Unit Testing",
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  className="badge"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
