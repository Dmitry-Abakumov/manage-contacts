import { TailSpin } from "react-loader-spinner";

import { useGetAllContactsQuery } from "@/services";

import { ContactListItem } from "@/components/ui";

export const ContactList = () => {
  const { data, isLoading, isError } = useGetAllContactsQuery();

  return (
    <ul className="flex flex-col gap-[14px]">
      {data &&
        !isLoading &&
        !isError &&
        data.resources.map((contact) => (
          <ContactListItem key={contact.id} {...contact} />
        ))}

      {isLoading && (
        <TailSpin
          height="30"
          width="30"
          color="#d3d3d3"
          wrapperClass="spinner"
        />
      )}

      {/* {isError && <p>{error.message}</p>} */}
    </ul>
  );
};
