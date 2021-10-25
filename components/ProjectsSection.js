import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa proyek yang saya buat</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              image="/hasten.png"
              name="Hasten"
              desc="Eksplorasi Landing Page"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              image="/resources.png"
              name="Resources"
              desc="Eksplorasi Resources Page"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              image="/resources.png"
              name="Resources"
              desc="Eksplorasi Resources Page"
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItem
              image="/hasten.png"
              name="Hasten"
              desc="Eksplorasi Landing Page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
