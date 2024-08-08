import { ContactList } from "@/components/base";

export const ContactsSection = () => {
  return (
    <section className="py-[22px] md:py-0 md:mt-[-375px]  md:flex md:justify-end">
      <div className="smOnly:container">
        <ContactList />
      </div>
    </section>
  );
};
