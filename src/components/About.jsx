import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award } from "lucide-react";
import { personalInfo, education, achievements } from "../data/portfolio";

const stats = [
  { label: "CGPA", value: "8.82", icon: Award },
  { label: "Year", value: "3rd", icon: Calendar },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-accent-cyan text-sm font-mono tracking-wider uppercase"
            >
              About Me
            </motion.span>
            <h2 className="section-heading mt-2">
              Passionate about{" "}
              <span className="text-gradient">crafting digital experiences</span>
            </h2>
          </div>

          {/* Main Content Grid - Equal columns */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - About Text & Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="glass-card p-6 flex-1">
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.about}
                </p>
                <p className="text-gray-400 leading-relaxed mt-4 text-sm">
                  Currently working as an App Developer at{" "}
                  <span className="text-accent-cyan font-medium">Flowbee AI</span>
                  , where I build production-grade mobile applications with
                  Flutter. I enjoy tackling challenging problems, whether it's
                  optimizing app performance or designing scalable architectures.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-accent-cyan" />
                    <div className="text-2xl font-display font-bold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">🎓</span> Education
              </h3>
              <div className="space-y-3 flex-1">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="glass-card-hover p-4 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{edu.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm">
                          {edu.institution}
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">{edu.degree}</p>
                        <div className="flex items-center justify-between mt-1.5">
                          <span className="text-xs text-gray-500">
                            {edu.duration}
                          </span>
                          <span className="badge-accent text-xs">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-4"
          >
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="glass-card-hover p-6 flex items-center gap-4"
              >
                <span className="text-3xl">{achievement.icon}</span>
                <div>
                  <h4 className="font-medium text-white">{achievement.title}</h4>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
