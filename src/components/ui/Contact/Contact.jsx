import { Link } from "react-router-dom";

export const Contact = ({ id, avatar_url, fields, tags }) => {
  const email = fields.email.value;
  const firstName = fields["first name"]?.[0].value;
  const lastName = fields["last name"]?.[0].value;

  return (
    <li>
      <Link to={id}>
        <div>
          <img src={avatar_url} alt="avatar" />

          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>

          <p>{email}</p>
        </div>

        <ul>
          {tags?.map(({ id, tag }) => (
            <li key={id}>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
        <button type="button"></button>
      </Link>
    </li>
  );
};
