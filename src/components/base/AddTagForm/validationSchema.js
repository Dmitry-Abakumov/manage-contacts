import { object, string } from "yup";

const noOnlySpacesRegex = /^(?!\s*$).+/;

export const validationSchema = object({
  tag: string()
    .matches(noOnlySpacesRegex, "This field cannot contain only spaces.")
    .required("Enter a tag"),
});
