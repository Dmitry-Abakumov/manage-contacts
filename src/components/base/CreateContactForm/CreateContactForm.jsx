import { Formik, Form, ErrorMessage } from "formik";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

import { TextField, Button } from "@/components/ui";

import { useAddContactMutation } from "@/services";

import { cn } from "@/utils";

import { validationSchema } from "./validationSchema";

import { initialValues } from "./initialValues";
import { fields } from "./fields";
import { newContactSettings } from "./newContactSettings";

import "react-toastify/dist/ReactToastify.css";

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

      toast.success("Contact has successfully created", {
        position: "top-right",
      });
    } catch {
      toast.error(
        "Ooops, something went wrong. Please, try to reload the page.",
        {
          position: "top-right",
        }
      );
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form className="flex flex-col gap-[15px] p-[24px] md:w-[300px] xl:w-[550px]">
          <div className="relative">
            <TextField
              className={cn({ "border-errorColor": errors.firstName })}
              {...fields.firstName}
            />
            <ErrorMessage
              className="text-[12px] text-errorColor absolute bottom-[-15px] left-[12px]"
              name={fields.firstName.name}
              component="p"
            />
          </div>

          <div className="relative">
            <TextField
              className={cn({ "border-errorColor": errors.lastName })}
              {...fields.lastName}
            />
            <ErrorMessage
              className="text-[12px] text-errorColor absolute bottom-[-15px] left-[12px]"
              name={fields.lastName.name}
              component="p"
            />
          </div>

          <div className="relative">
            <TextField
              className={cn({ "border-errorColor": errors.email })}
              {...fields.email}
            />
            <ErrorMessage
              className="text-[12px] text-errorColor absolute bottom-[-15px] left-[12px]"
              name={fields.email.name}
              component="p"
            />
          </div>

          <Button
            className="flex justify-center items-center gap-[5px]"
            type="submit"
          >
            Add contact
            {isLoading ? (
              <TailSpin height="10" width="10" color="#000000" />
            ) : (
              <div className="size-[10px]"></div>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
