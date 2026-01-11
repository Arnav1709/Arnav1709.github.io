import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, ArrowRight } from "lucide-react";
import { projects } from "../data/portfolio";

const colorClasses = {
  emerald: {
    bg: "from-accent-emerald/20",
    border: "border-accent-emerald/20",
    text: "text-accent-emerald",
    glow: "group-hover:shadow-accent-emerald/20",
  },
  cyan: {
    bg: "from-accent-cyan/20",
    border: "border-accent-cyan/20",
    text: "text-accent-cyan",
    glow: "group-hover:shadow-accent-cyan/20",
  },
  violet: {
    bg: "from-accent-violet/20",
    border: "border-accent-violet/20",
    text: "text-accent-violet",
    glow: "group-hover:shadow-accent-violet/20",
  },
  rose: {
    bg: "from-accent-rose/20",
    border: "border-accent-rose/20",
    text: "text-accent-rose",
    glow: "group-hover:shadow-accent-rose/20",
  },
};

function ProjectCard({ project, index, isInView }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = colorClasses[project.color] || colorClasses.cyan;

  // Collect all available links
  const links = [];
  if (project.links?.github) links.push({ href: project.links.github, icon: Github, label: "Code" });
  if (project.links?.live) links.push({ href: project.links.live, icon: ExternalLink, label: "Live Demo" });
  if (project.links?.npm) links.push({ href: project.links.npm, icon: ExternalLink, label: "NPM" });
  if (project.links?.playstore) links.push({ href: project.links.playstore, icon: ExternalLink, label: "Play Store" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
      className={`group glass-card-hover overflow-hidden ${colors.glow} hover:shadow-2xl transition-all duration-500 flex flex-col h-full`}
    >
      {/* Card Header with Gradient */}
      <div
        className={`h-1.5 bg-gradient-to-r ${colors.bg} to-transparent`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <h3 className="text-lg font-display font-semibold text-white group-hover:text-gradient transition-all">
                {project.name}
              </h3>
              <p className={`text-xs ${colors.text}`}>{project.tagline}</p>
            </div>
          </div>
          {project.date && (
            <span className="badge text-xs flex-shrink-0">
              {project.date}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Highlights - Fixed height section */}
        <div className="space-y-1.5 mb-4 flex-1">
          {(isExpanded ? project.highlights : project.highlights.slice(0, 3)).map(
            (highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-2"
              >
                <ChevronRight
                  className={`w-3.5 h-3.5 ${colors.text} mt-0.5 flex-shrink-0`}
                />
                <span className="text-xs text-gray-300 leading-relaxed">{highlight}</span>
              </div>
            )
          )}
          {project.highlights.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-1 text-xs ${colors.text} hover:underline mt-1`}
            >
              {isExpanded ? "Show less" : `+${project.highlights.length - 3} more`}
              <ArrowRight
                className={`w-3 h-3 transition-transform ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-0.5 text-xs rounded-md bg-white/5 ${colors.border} border`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links - Always at bottom with consistent spacing */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/5 mt-auto">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <link.icon size={14} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute right-0 top-1/3 w-1/3 h-96 bg-accent-cyan/5 blur-[100px]" />
      <div className="absolute left-0 bottom-1/4 w-1/4 h-64 bg-accent-rose/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-rose text-sm font-mono tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="section-heading mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              A selection of projects I've built, from full-stack web applications
              to mobile apps and developer tools.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* View More CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Arnav1709"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors group"
            >
              <span>View more on GitHub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
