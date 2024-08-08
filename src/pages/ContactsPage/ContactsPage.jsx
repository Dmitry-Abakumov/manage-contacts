import { CreateContactSection, ContactsSection } from "@/sections";

const ContactsPage = () => {
  return (
    <div className="md:relative md:container md:py-[36px]">
      <CreateContactSection />
      <ContactsSection />
    </div>
  );
};

export default ContactsPage;
