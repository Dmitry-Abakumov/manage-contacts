import { object, string } from "yup";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const validationSchema = object({
  firstName: string().required("Enter a first name"),
  lastName: string().required("Enter a last name"),
  email: string()
    .matches(emailRegex, "Invalid format")
    .required("Enter a email"),
});
