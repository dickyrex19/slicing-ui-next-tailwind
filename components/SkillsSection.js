import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-20 bg-primaryGray" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
        <div className="flex -mx-4 mt-16 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16 md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs-icon.svg"
              imageClassName="h-16 md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Tailwind CSS"
              level="Menengah"
              image="/tailwindcss-icon.svg"
              imageClassName="h-16 md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16 md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs-icon.svg"
              imageClassName="h-16 md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Tailwind CSS"
              level="Menengah"
              image="/tailwindcss-icon.svg"
              imageClassName="h-16 md:h-12"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full md:h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
