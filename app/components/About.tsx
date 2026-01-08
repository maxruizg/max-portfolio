import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Technologies" },
  { value: "5", label: "Team Leadership" },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={containerRef} className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Crafting Digital
            <span className="gradient-text"> Experiences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -inset-4 border border-[#6366f1]/20 rounded-2xl"
              />
              <motion.div
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-8 border border-[#06b6d4]/10 rounded-3xl"
              />

              {/* Main content box */}
              <div className="relative gradient-border p-8 md:p-12">
                <div className="text-center">
                  {/* Enhanced Avatar/Icon */}
                  <div className="relative w-40 h-40 mx-auto mb-8">
                    {/* Outer rotating ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 160 160" className="w-full h-full">
                        <defs>
                          <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="80"
                          cy="80"
                          r="76"
                          fill="none"
                          stroke="url(#ringGradient1)"
                          strokeWidth="2"
                          strokeDasharray="20 10"
                        />
                      </svg>
                    </motion.div>

                    {/* Middle counter-rotating ring */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2"
                    >
                      <svg viewBox="0 0 144 144" className="w-full h-full">
                        <circle
                          cx="72"
                          cy="72"
                          r="70"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="1"
                          strokeDasharray="8 16"
                          opacity="0.5"
                        />
                      </svg>
                    </motion.div>

                    {/* Orbital dots */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#06b6d4] rounded-full shadow-lg shadow-[#06b6d4]/50" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#6366f1] rounded-full shadow-lg shadow-[#6366f1]/50" />
                    </motion.div>

                    {/* Main avatar circle */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-4"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] blur-xl opacity-50" />

                      {/* Gradient border */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#06b6d4] p-[3px]">
                        {/* Inner circle with initials */}
                        <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                          {/* Background pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#6366f1_25%,transparent_25%,transparent_75%,#6366f1_75%)] bg-[length:20px_20px]" />
                          </div>

                          {/* Initials */}
                          <div className="relative">
                            <span className="text-5xl font-bold bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#06b6d4] bg-clip-text text-transparent">
                              MR
                            </span>
                            {/* Shine effect */}
                            <motion.div
                              animate={{ x: [-100, 100] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Corner accents */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#06b6d4] rounded-tr-lg" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#6366f1] rounded-bl-lg" />
                  </div>

                  {/* Code snippet decoration */}
                  <div className="text-left bg-[#0a0a0f] rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <code className="text-[#94a3b8]">
                      <span className="text-[#6366f1]">const</span>{" "}
                      <span className="text-[#06b6d4]">developer</span> = {"{"}
                      <br />
                      <span className="ml-4 text-[#818cf8]">name:</span>{" "}
                      <span className="text-green-400">"Max"</span>,
                      <br />
                      <span className="ml-4 text-[#818cf8]">company:</span>{" "}
                      <span className="text-green-400">"Kairos"</span>,
                      <br />
                      <span className="ml-4 text-[#818cf8]">role:</span>{" "}
                      <span className="text-green-400">"CEO & Co-Founder"</span>,
                      <br />
                      <span className="ml-4 text-[#818cf8]">passion:</span>{" "}
                      <span className="text-green-400">"Building next gen apps"</span>
                      <br />
                      {"}"};
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-lg text-[#94a3b8] leading-relaxed">
              <p>
                I'm a versatile technology professional with over{" "}
                <span className="text-white font-medium">6 years of experience</span>{" "}
                holding diverse roles as a Front-End Leader, RPA Developer, Back-End
                Developer, and Full-Stack Developer.
              </p>
              <p>
                My journey has taken me through exciting challenges at companies like{" "}
                <span className="text-[#06b6d4] font-medium">PayPal</span>,{" "}
                <span className="text-[#6366f1] font-medium">PayCode</span>, and{" "}
                <span className="text-[#818cf8] font-medium">Nu4itAutomation</span>,
                where I've led teams and built scalable solutions.
              </p>
              <p>
                Currently, I'm the{" "}
                <span className="text-white font-medium">CEO & Co-Founder</span> of{" "}
                <span className="gradient-text font-semibold">Kairos</span>, where we're
                creating innovative software solutions that make a difference.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-6 text-center group hover:border-[#6366f1]/30 transition-colors duration-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
