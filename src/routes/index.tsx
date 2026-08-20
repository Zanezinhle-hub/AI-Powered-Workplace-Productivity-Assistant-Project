import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  AiJourney,
  Certifications,
  Contact,
  Education,
  Footer,
  GithubSection,
  Lab,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const TITLE = "Zanezinhle Mkwanazi | Computer Engineering Graduate | Software, Networking & AI";
const DESCRIPTION =
  "Portfolio of Zanezinhle Mkwanazi, a Computer Engineering graduate from South Africa with a foundation in software development, computer networking, electronics and artificial intelligence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Computer Engineering Graduate South Africa, Junior Software Developer, Software Development Graduate, Computer Networking, Network Engineer Graduate, AI Graduate, Artificial Intelligence, Cloud Computing, Graduate Engineer, Technology Graduate, Computer Engineering Internship, Software Development Internship, Networking Internship, AI Internship",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Lab />
        <AiJourney />
        <Education />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
