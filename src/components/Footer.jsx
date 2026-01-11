import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} {personalInfo.name}
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-cyan transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
