import { TailSpin } from "react-loader-spinner";

import { useGetAllContactsQuery } from "@/services";

import { Contact } from "@/components/ui/Contact/Contact";

export const ContactList = () => {
  const { data, error, isLoading, isError } = useGetAllContactsQuery();

  return (
    <ul>
      {data &&
        !isLoading &&
        !isError &&
        data.resources.map((contact) => (
          <Contact key={contact.id} {...contact} />
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
