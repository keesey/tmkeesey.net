import cv from "@/data/cv.json";
import type { CV } from "@/types/cv";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Societies } from "@/components/Societies";
import { Education } from "@/components/Education";
import { Links } from "@/components/Links";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui";

const data = cv as CV;

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 sm:px-8">
      <Header person={data.person} />

      <Section id="contact" title="Contact" hideTitle>
        <Contact person={data.person} />
      </Section>

      <Section id="objective" title="Expertise">
        <p className="text-lg leading-relaxed text-stone-700">{data.objective}</p>
      </Section>

      <Section id="experience" title="Work Experience">
        <Experience items={data.experience} />
      </Section>

      <Section id="projects" title="Projects">
        <Projects items={data.projects} />
      </Section>

      <Section id="publications" title="Publications">
        <Publications items={data.publications} />
      </Section>

      <Section id="societies" title="Societies">
        <Societies items={data.societies} />
      </Section>

      <Section id="education" title="Education">
        <Education items={data.education} />
      </Section>

      <Section id="links" title="Further Links">
        <Links items={data.links} />
      </Section>

      <Footer person={data.person} />
    </main>
  );
}
