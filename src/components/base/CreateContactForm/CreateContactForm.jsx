import { Formik, Form } from "formik";

import { TextField, Button } from "@/components/ui";

import { useAddContactMutation } from "@/services";

import { initialValues } from "./initialValues";
import { fields } from "./fields";
import { newContactSettings } from "./newContactSettings";

export const CreateContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async (
    { firstName, lastName, email },
    { resetForm }
  ) => {
    const newContact = {
      ...newContactSettings,
      fields: {
        "first name": [
          {
            label: "first name",
            modifier: "",
            value: firstName,
          },
        ],
        "last name": [
          {
            label: "last name",
            modifier: "",
            value: lastName,
          },
        ],
        email: [
          {
            label: "email",
            modifier: "other",
            value: email,
          },
        ],
      },
    };

    try {
      await addContact(newContact).unwrap();

      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-[10px] px-[24px]">
        <TextField {...fields.firstName} />
        <TextField {...fields.lastName} />
        <TextField {...fields.email} />

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
