import { Link } from "react-router-dom";

import { useDeleteContactMutation } from "@/services";

export const ContactListItem = ({ id, avatar_url, fields, tags }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const email = fields.email?.[0].value;
  const firstName = fields["first name"]?.[0].value;
  const lastName = fields["last name"]?.[0].value;

  return (
    <li className="relative bg-primaryBgColor px-[8px] py-[10px] rounded-[5px]">
      <div className="flex items-center gap-[5px]">
        <div className="rounded-[5px] overflow-hidden">
          <img src={avatar_url} alt="avatar" width="59" height="59" />
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
        {tags?.map(({ id, tag }) => (
          <li
            key={id}
            className="bg-secondaryBgColor px-[12px] py-[6px] rounded-[5px]"
          >
            <p className="flex justify-center items-center">{tag}</p>
          </li>
        ))}
      </ul>

      <Link to={id} className="absolute top-0 left-0 right-0 bottom-0" />

      <button
        className="absolute z-100 top-[10px] right-[20px]"
        type="button"
        onClick={() => deleteContact(id)}
      >
        remove
      </button>
    </li>
  );
};
