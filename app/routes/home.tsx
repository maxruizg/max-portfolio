import type { Route } from "./+types/home";
import {
  CustomCursor,
  Navigation,
  Hero,
  About,
  Experience,
  Skills,
  Contact,
  Footer,
} from "~/components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Maximiliano Ruiz González | Full-Stack Developer & CEO" },
    {
      name: "description",
      content:
        "Portfolio of Maximiliano Ruiz González - Full-Stack Developer, Tech Leader, and CEO & Co-Founder of Kairos. Building scalable software solutions that drive business growth.",
    },
    {
      name: "keywords",
      content:
        "Full-Stack Developer, React, TypeScript, Node.js, CEO, Software Engineer, Mexico, PayPal, Kairos",
    },
    { property: "og:title", content: "Maximiliano Ruiz González | Full-Stack Developer & CEO" },
    {
      property: "og:description",
      content:
        "Portfolio of Maximiliano Ruiz González - Building scalable software solutions that drive business growth.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Maximiliano Ruiz González | Full-Stack Developer & CEO" },
    {
      name: "twitter:description",
      content: "Full-Stack Developer, Tech Leader, and CEO & Co-Founder of Kairos.",
    },
  ];
}

export default function Home() {
  return (
    <div className="noise">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
