import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

import { useGetAllContactsQuery } from "@/services";

import { ContactListItem } from "@/components/ui";

import "react-toastify/dist/ReactToastify.css";

export const ContactList = () => {
  const { data, isLoading, isError } = useGetAllContactsQuery();

  if (isError)
    toast.error(
      "Ooops, something went wrong. Please, try to reload the page.",
      {
        position: "top-right",
      }
    );

  return (
    <>
      <div className="md:w-[300px] xl:w-[550px]">
        {isLoading && (
          <TailSpin
            height="30"
            width="30"
            color="#000000"
            wrapperClass="spinner"
          />
        )}
      </div>

      {data && !isLoading && !isError && (
        <ul className="flex flex-col gap-[14px] md:w-[300px] xl:w-[550px]">
          {data.resources.map((contact) => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
};
