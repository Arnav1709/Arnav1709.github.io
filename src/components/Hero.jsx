import { motion } from "framer-motion";
import {
  ArrowDown,
  MapPin,
  Sparkles,
  Code2,
  Smartphone,
  Database,
  FileText,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%" },
  { Icon: Smartphone, delay: 0.5, x: "85%", y: "30%" },
  { Icon: Database, delay: 1, x: "15%", y: "70%" },
  { Icon: Sparkles, delay: 1.5, x: "80%", y: "75%" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] animate-pulse animation-delay-400" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          className="absolute text-white/5"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + delay, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={48 + i * 10} strokeWidth={1} />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent-emerald/10 border border-accent-emerald/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
          </span>
          <span className="text-sm text-accent-emerald font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
          <motion.span
            className="inline-block ml-3"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl text-gray-400 mb-4 font-medium"
        >
          {personalInfo.title}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-gray-500 mb-8"
        >
          <MapPin size={16} />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-amber/30 bg-accent-amber/10 text-accent-amber hover:bg-accent-amber/20 hover:border-accent-amber/50 transition-all text-sm font-medium"
          >
            <FileText size={16} />
            Resume
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator - Outside the content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 hover:text-accent-cyan transition-colors"
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-950 to-transparent" />
    </section>
  );
}
