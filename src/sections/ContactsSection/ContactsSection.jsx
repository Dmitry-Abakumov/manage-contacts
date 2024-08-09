import { ContactList } from "@/components/base";

import data from "@/data/data.json";

export const ContactsSection = () => {
  const { contactsSectionTitle } = data;
  return (
    <section className="py-[22px] md:py-0 md:mt-[-387px]  md:flex md:justify-end">
      <div className="smOnly:container">
        <h1 className="text-[20px] font-[500] mb-[24px]">
          {contactsSectionTitle}
        </h1>
        <ContactList />
      </div>
    </section>
  );
};
