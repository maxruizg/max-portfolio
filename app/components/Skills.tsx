import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  // Languages
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { name: "Python", icon: "🐍", color: "#3776ab" },
  { name: "Rust", icon: "🦀", color: "#dea584" },
  { name: "Go Lang", icon: "Go", color: "#00add8" },
  { name: "Java", icon: "☕", color: "#ed8b00" },
  { name: "C++", icon: "C+", color: "#00599c" },
  { name: "SQL", icon: "DB", color: "#336791" },

  // Frontend
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Next.js", icon: "N", color: "#ffffff" },
  { name: "Remix", icon: "💿", color: "#121212" },
  { name: "Svelte", icon: "🔥", color: "#ff3e00" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06b6d4" },
  { name: "CSS3", icon: "🎭", color: "#264de4" },

  // Backend & Frameworks
  { name: "Spring Boot", icon: "🍃", color: "#6db33f" },
  { name: "Actix", icon: "⚡", color: "#000000" },
  { name: "Node.js", icon: "🟢", color: "#339933" },

  // Databases
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "MongoDB", icon: "🍃", color: "#47a248" },

  // Tools & Other
  { name: "AI", icon: "🤖", color: "#8b5cf6" },
  { name: "Jest", icon: "🃏", color: "#c21325" },
  { name: "Git", icon: "📦", color: "#f05032" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
  { name: "AWS", icon: "☁️", color: "#ff9900" },
];

// Duplicate for seamless loop
const row1 = [...technologies.slice(0, 13)];
const row2 = [...technologies.slice(13), ...technologies.slice(0, 5)];

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.02 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex-shrink-0 group"
    >
      <div
        className="flex items-center gap-3 px-6 py-4 glass rounded-2xl hover:border-opacity-50 transition-all duration-300 min-w-fit"
        style={{ borderColor: `${tech.color}30` }}
      >
        <span className="text-2xl">{tech.icon}</span>
        <span className="text-white font-medium whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#06b6d4] transition-all duration-300">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30
}: {
  items: typeof technologies;
  direction?: "left" | "right";
  speed?: number;
}) {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? [0, -50 * items.length] : [-50 * items.length, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {/* Triple the items for seamless loop */}
        {[...items, ...items, ...items].map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} index={index % items.length} />
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] border border-[#6366f1]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] border border-[#06b6d4]/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#6366f1] text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-6">
            Technologies and tools I've worked with throughout my career
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] mx-auto rounded-full" />
        </motion.div>

        {/* Tech carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={40} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { label: "Languages", value: "8+", icon: "💻" },
            { label: "Frameworks", value: "10+", icon: "🛠️" },
            { label: "Databases", value: "4+", icon: "🗄️" },
            { label: "Tools", value: "15+", icon: "⚙️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center group hover:border-[#6366f1]/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
