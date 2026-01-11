import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: personalInfo.github,
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: personalInfo.linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    color: "hover:text-accent-cyan",
  },
];

function ContactCard({ icon: Icon, label, value, href, copyable }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card-hover p-4 flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-accent-cyan" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-white hover:text-accent-cyan transition-colors truncate block text-sm"
          >
            {value}
          </a>
        ) : (
          <p className="text-white truncate text-sm">{value}</p>
        )}
      </div>
      {copyable && (
        <button
          onClick={handleCopy}
          className="text-gray-500 hover:text-accent-cyan transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      )}
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute left-1/2 bottom-0 w-1/2 h-96 bg-accent-cyan/5 blur-[120px] -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent-emerald text-sm font-mono tracking-wider uppercase">
              Contact
            </span>
            <h2 className="section-heading mt-2">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about tech.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="space-y-3 flex-1">
              <ContactCard
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                copyable
              />
              <ContactCard
                icon={Phone}
                label="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
                copyable
              />
              <ContactCard
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
              />
              </div>

              {/* Social Links */}
              <div className="pt-4 mt-4">
                <p className="text-sm text-gray-500 mb-3">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-11 h-11 rounded-xl glass-card flex items-center justify-center text-gray-400 ${link.color} transition-all hover:border-white/20`}
                    >
                      <link.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 relative overflow-hidden flex flex-col"
            >
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent-cyan/30 to-accent-violet/30 rounded-full blur-3xl" />

              <div className="relative flex flex-col flex-1">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  Let's Build Something Amazing
                </h3>
                <p className="text-gray-400 mb-4 text-sm flex-1">
                  Whether you have a project in mind, need a mobile app, or want
                  to collaborate on something innovative — I'm just a message
                  away.
                </p>

                <a
                  href={`mailto:${personalInfo.email}?subject=Let's Connect!`}
                  className="btn-primary inline-flex items-center gap-2 w-fit"
                >
                  <Send size={16} />
                  Send a Message
                </a>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
                    </span>
                    Currently available for freelance & full-time opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
