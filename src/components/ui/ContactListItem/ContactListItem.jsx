import { Link } from "react-router-dom";

export const ContactListItem = ({ id, avatar_url, fields, tags }) => {
  const email = fields.email?.[0].value;
  const firstName = fields["first name"]?.[0].value;
  const lastName = fields["last name"]?.[0].value;

  return (
    <li className="bg-primaryBgColor px-[8px] py-[10px] rounded-[5px]">
      <Link to={id}>
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
              className="bg-secondaryBgColor px-[12px] rounded-[5px]"
            >
              <p>{tag}</p>
            </li>
          ))}
        </ul>
        {/* <button type="button"></button> */}
      </Link>
    </li>
  );
};
