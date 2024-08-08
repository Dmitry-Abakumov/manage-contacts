import { useParams, Navigate, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

import { Button } from "@/components/ui";

import { useGetOneContactQuery } from "@/services";

import jsonData from "@/data/data.json";

import { ReactComponent as ArrowBack } from "@/icons/arrow-back.svg";

export const SingleContact = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetOneContactQuery(id);
  const navigate = useNavigate();

  const { singleContactTagsTitle } = jsonData;

  const isContactDeleted = data?.resources?.length === 0;

  if (isContactDeleted) {
    return <Navigate to="/contacts" />;
  }

  const contactData = data?.resources?.[0];

  const areTags = contactData?.tags?.length > 0;

  const email = contactData?.fields?.email?.[0].value;
  const firstName = contactData?.fields["first name"]?.[0].value;
  const lastName = contactData?.fields["last name"]?.[0].value;

  if (isError)
    toast.error(
      "Ooops, something went wrong. Please, try to reload the page.",
      {
        position: "top-right",
      }
    );

  return (
    <>
      {isLoading && (
        <TailSpin
          height="30"
          width="30"
          color="#000000"
          wrapperClass="spinner"
        />
      )}

      {data && (
        <div className="md:flex flex-col md:items-center">
          <div className="md:flex md:items-center md:gap-[10px]">
            <Button
              onClick={() => navigate("/contacts")}
              type="button"
              className="w-auto mb-[10px] h-auto px-[10px] py-[5px] md:mb-0"
            >
              <ArrowBack width="20" height="20" />
            </Button>

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
          </div>

          {areTags && (
            <p className="text-[16px] font-[500] mt-[26px]">
              {singleContactTagsTitle}
            </p>
          )}

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
        </div>
      )}
    </>
  );
};
