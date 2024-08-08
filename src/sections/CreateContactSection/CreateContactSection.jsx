import { CreateContactForm } from "@/components/base";

export const CreateContactSection = () => {
  return (
    <section className="py-[22px] md:sticky top-0 md:py-0">
      <div className="smOnly:container">
        <CreateContactForm />
      </div>
    </section>
  );
};
