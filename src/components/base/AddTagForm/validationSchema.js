import { object, string } from "yup";

export const validationSchema = object({
  tag: string().required("Enter a tag"),
});
