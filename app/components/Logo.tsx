import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function Logo({ size = "md", animated = true }: LogoProps) {
  const sizes = {
    sm: { width: 40, height: 40, text: "text-lg" },
    md: { width: 48, height: 48, text: "text-xl" },
    lg: { width: 64, height: 64, text: "text-2xl" },
  };

  const { width, height } = sizes[size];

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      {animated && (
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4] blur-lg opacity-50"
          style={{ width, height }}
        />
      )}

      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Background hexagon */}
        <motion.path
          d="M32 4L56 18V46L32 60L8 46V18L32 4Z"
          fill="url(#bgGradient)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Inner hexagon border */}
        <motion.path
          d="M32 8L52 20V44L32 56L12 44V20L32 8Z"
          stroke="url(#borderGradient)"
          strokeWidth="1"
          fill="none"
          variants={animated ? pathVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
        />

        {/* Letter M */}
        <motion.path
          d="M20 42V22L26 32L32 22L38 32L44 22V42"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={animated ? pathVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
        />

        {/* Decorative dots */}
        <motion.circle
          cx="32"
          cy="14"
          r="2"
          fill="#06b6d4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
        <motion.circle
          cx="32"
          cy="50"
          r="2"
          fill="#6366f1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="bgGradient" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12121a" />
            <stop offset="1" stopColor="#1a1a24" />
          </linearGradient>
          <linearGradient id="borderGradient" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export function LogoText({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
    >
      <Logo size={size} />
      <div className="flex flex-col">
        <span className={`${sizes[size]} font-bold text-white leading-none`}>
          Max
          <span className="gradient-text">Ruiz</span>
        </span>
        <span className="text-xs text-[#64748b] tracking-widest uppercase">
          Developer
        </span>
      </div>
    </motion.div>
  );
}

export function LogoMinimal() {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#6366f1] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{ backgroundSize: "200% 100%" }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative px-4 py-2 bg-[#12121a] rounded-xl border border-[#2e2e3a] group-hover:border-transparent transition-colors duration-300">
        <span className="text-2xl font-bold">
          <span className="text-white">M</span>
          <span className="gradient-text">RG</span>
        </span>
      </div>
    </motion.div>
  );
}

export function LogoIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Outer ring */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="url(#ringGradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Inner circle */}
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="url(#innerGradient)"
      />

      {/* M Letter */}
      <path
        d="M20 44V20L32 34L44 20V44"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <defs>
        <linearGradient id="ringGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="innerGradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#12121a" />
          <stop offset="1" stopColor="#1a1a24" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
