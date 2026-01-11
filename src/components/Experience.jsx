import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ExternalLink, ChevronRight } from "lucide-react";
import { experience, responsibilities } from "../data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 relative">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 w-1/3 h-96 bg-accent-violet/5 blur-[100px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-violet text-sm font-mono tracking-wider uppercase">
              Experience
            </span>
            <h2 className="section-heading mt-2">
              Where I've <span className="text-gradient">worked</span>
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="glass-card-hover p-6 md:p-8 relative overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-cyan/10 via-accent-violet/5 to-transparent rounded-full blur-2xl" />

                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-midnight-950" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-accent-cyan font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="badge mt-3 md:mt-0">{exp.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + j * 0.1 }}
                        className="flex items-start gap-3 text-gray-300 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Responsibilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-display font-semibold mb-8 text-center">
              Positions of <span className="text-gradient">Responsibility</span>
            </h3>

            {responsibilities.map((resp, i) => (
              <motion.div
                key={resp.role}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <h4 className="font-semibold text-white">{resp.role}</h4>
                      <p className="text-sm text-accent-violet">
                        {resp.organization}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">
                    {resp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {resp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-accent-violet mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
