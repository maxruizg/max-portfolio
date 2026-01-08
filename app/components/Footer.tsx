import { motion } from "framer-motion";
import { LogoIcon } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#1a1a24]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <LogoIcon />
            <span className="text-lg font-bold text-white">
              Max<span className="gradient-text">Ruiz</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-[#64748b] text-center">
            © {currentYear} Maximiliano Ruiz González. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
          >
            Back to top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </motion.a>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px w-full bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent mt-8"
        />

        {/* Made with love */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-[#64748b] mt-6"
        >
          Built with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block text-red-500"
          >
            ❤️
          </motion.span>{" "}
          using React Router, Framer Motion & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
