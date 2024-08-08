import { CreateContactForm } from "@/components/base";

import data from "@/data/data.json";

console.log(data);

export const CreateContactSection = () => {
  const { createContactSectionTitle } = data;

  return (
    <section className="py-[22px] md:sticky top-0 md:py-0">
      <div className="smOnly:container">
        <h2 className="ml-[24px] text-[20px] font-[500]">
          {createContactSectionTitle}
        </h2>
        <CreateContactForm />
      </div>
    </section>
  );
};
