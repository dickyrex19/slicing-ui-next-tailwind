import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";
import Field from "./Field";
import Button from "./Button";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0" id="contact">
      <div className="bg-primaryGray rounded-lg flex flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-primaryGray-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>
              Beberapa cara menghubungi saya
            </SectionParagraph>
            <ContactItem
              icon="/mail.svg"
              label="Mail"
              value="enjoybeat19@gmail.com"
              className="mt-10"
            />
            <ContactItem
              icon="/phone.svg"
              label="Mail"
              value="085768985968"
              className="mt-6"
            />
            <ContactItem
              icon="/twitter.svg"
              label="Twitter"
              value="@dickyrex19"
              className="mt-6"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Name" name="Name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Email" name="Email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="Subject" type="text" />
            <Field
              label="Message"
              name="Message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="fill-black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
