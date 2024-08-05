import { useParams, Navigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import { useGetOneContactQuery } from "@/services";

export const SingleContact = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetOneContactQuery(id);

  const isContactDeleted = data?.resources?.length === 0;

  if (isContactDeleted) return <Navigate to="/contacts" />;

  const contactData = data?.resources?.[0];

  const email = contactData?.fields?.email?.[0].value;
  const firstName = contactData?.fields["first name"]?.[0].value;
  const lastName = contactData?.fields["last name"]?.[0].value;

  return (
    <>
      {isLoading && (
        <TailSpin
          height="30"
          width="30"
          color="#d3d3d3"
          wrapperClass="spinner"
        />
      )}
      {data && (
        <>
          <div className="flex items-center gap-[5px]">
            <div className="rounded-[5px] overflow-hidden">
              <img
                src={contactData?.avatar_url}
                alt="avatar"
                width="59"
                height="59"
              />
            </div>

            <div>
              <div className="flex items-center gap-[5px]">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>

              <p>{email}</p>
            </div>
          </div>

          <ul className="flex items-center gap-[5px] flex-wrap mt-[10px]">
            {contactData?.tags?.map(({ id, tag }) => (
              <li
                key={id}
                className="bg-secondaryBgColor px-[12px] rounded-[5px]"
              >
                <p>{tag}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
