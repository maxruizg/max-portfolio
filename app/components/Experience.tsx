import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "CEO & Co-Founder",
    company: "Kairos",
    location: "Mexico City, MX",
    period: "2025 - Present",
    description: [
      "Leading the company vision and strategic direction for innovative software solutions",
      "Building and managing a talented team of developers and designers",
      "Overseeing product development from concept to deployment",
      "Establishing partnerships and driving business growth",
    ],
    technologies: [
      "AI", "Rust", "Remix", "Svelte", "Go Lang", "TypeScript", "Tailwind CSS", "Actix"
    ],
    color: "#06b6d4",
    current: true,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "PayPal",
    location: "Mexico City, MX",
    period: "2024 - 2025",
    description: [
      "Maintained and enhanced 3 major HR platforms serving PayPal employees worldwide",
      "Refactored legacy systems to achieve optimal performance and scalability",
      "Implemented robust security measures to protect sensitive employee data globally",
      "Redesigned UI/UX to improve user experience across all HR applications",
    ],
    technologies: ["React", "Java", "Spring Boot", "SQL"],
    color: "#6366f1",
  },
  {
    id: 3,
    title: "Front-End Leader / Full Stack Developer",
    company: "PayCode",
    location: "Mexico City, MX",
    period: "Nov 2020 - 2024",
    description: [
      "Led a team of 5 front-end developers, fostering continuous learning",
      "Developed robust, scalable full-stack applications using React, Next.js, CSS, SASS, Tailwind",
      "Worked closely with design team to implement responsive and intuitive UI/UX",
      "Designed and implemented back-end solutions using Python, Node.js (Fastify, Express)",
      "Participated in code reviews, maintaining high standards of code quality",
    ],
    technologies: [
      "React", "Next.js", "Tailwind CSS", "Python", "PostgreSQL", "MongoDB", "Jest", "TypeScript", "CSS3"
    ],
    color: "#818cf8",
  },
  {
    id: 4,
    title: "RPA & Front-End Developer",
    company: "Nu4itAutomation",
    location: "Mexico City, MX",
    period: "Jan 2019 - Oct 2020",
    description: [
      "Developed, tested, and implemented RPA solutions to automate repetitive processes",
      "Improved operational efficiency by 30% to 80%",
      "Provided ongoing maintenance and support for RPA implementations",
      "Documented RPA processes and trained end-users for successful adoption",
    ],
    technologies: ["C++", "JavaScript", "Python", "PostgreSQL"],
    color: "#22d3ee",
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`relative flex items-center ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-16`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 lg:left-1/2 w-4 h-4 -translate-x-1/2 lg:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring" }}
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: experience.color }}
        />
        {experience.current && (
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full opacity-50"
            style={{ backgroundColor: experience.color }}
          />
        )}
      </div>

      {/* Content card */}
      <div
        className={`w-full lg:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
        } ml-8 lg:ml-0`}
      >
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-2xl p-6 md:p-8 group hover:border-opacity-50 transition-all duration-300"
          style={{ borderColor: `${experience.color}20` }}
        >
          {/* Period badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: `${experience.color}20`,
                color: experience.color,
              }}
            >
              {experience.period}
            </span>
            {experience.current && (
              <span className="flex items-center gap-1 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Current
              </span>
            )}
          </div>

          {/* Title and company */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 text-[#94a3b8] mb-4">
            <span className="font-medium" style={{ color: experience.color }}>
              {experience.company}
            </span>
            <span className="text-[#64748b]">•</span>
            <span className="text-sm">{experience.location}</span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-6">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-3 text-sm text-[#94a3b8]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: experience.color }}
                />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="px-3 py-1 bg-[#1a1a24] rounded-full text-xs text-[#94a3b8] border border-[#2e2e3a] hover:border-[#6366f1]/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6">
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
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-[#2e2e3a] -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#6366f1] to-[#06b6d4]"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
