import { object, string } from "yup";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const noOnlySpacesRegex = /^(?!\s*$).+/;

export const validationSchema = object({
  firstName: string()
    .matches(noOnlySpacesRegex, "This field cannot contain only spaces.")
    .required("Enter a first name"),
  lastName: string()
    .matches(noOnlySpacesRegex, "This field cannot contain only spaces.")
    .required("Enter a last name"),
  email: string()
    .matches(emailRegex, "Invalid format")
    .required("Enter a email"),
});
