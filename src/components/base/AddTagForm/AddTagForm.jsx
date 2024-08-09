import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

import { TextField, Button } from "@/components/ui";

import { useAddTagMutation, useGetOneContactQuery } from "@/services";

import { cn } from "@/utils";

import { validationSchema } from "./validationSchema";

import { initialValues } from "./initialValues";
import { fields } from "./fields";

import "react-toastify/dist/ReactToastify.css";

export const AddTagForm = () => {
  const { id } = useParams();
  const { refetch: refetchContact, isLoading: isOneContactLoading } =
    useGetOneContactQuery(id);
  const [addTag, { isLoading: isAddTagLoading }] = useAddTagMutation();
  const navigate = useNavigate();

  const handleSubmit = async ({ tag }, { resetForm }) => {
    try {
      const currentContactData = await refetchContact();

      const currentContact = currentContactData?.data?.resources?.[0];

      const isContactDeleted =
        currentContactData?.data?.resources?.length === 0;
      const isTagExist =
        currentContact &&
        currentContact?.tags?.some(
          (el) => el?.tag.toUpperCase().trim() === tag.toUpperCase().trim()
        );

      if (isContactDeleted) {
        navigate("/contacts");
        toast.error("Ooops, it seems this contact was deleted.", {
          position: "top-right",
        });

        return;
      }

      if (isTagExist) {
        toast.error(
          "Ooops, such tag already exists. Try to enter another one.",
          {
            position: "top-right",
          }
        );

        return;
      }

      const currentTags = currentContact?.tags?.map(({ tag }) => tag.trim());

      const body = {
        tags: [...currentTags, tag.trim()],
      };

      await addTag({ id, body }).unwrap();

      resetForm();

      toast.success("Tag has successfully added.", {
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
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({ errors }) => (
        <Form className="md:w-[400px]">
          <div className="relative">
            <TextField
              {...fields.tag}
              className={cn({ "border-errorColor": errors.tag })}
            />
            <ErrorMessage
              className="text-[12px] text-errorColor absolute bottom-[-15px] left-[12px]"
              name={fields.tag.name}
              component="p"
            />
          </div>

          <Button
            className="flex justify-center items-center gap-[5px] mt-[15px]"
            type="submit"
            disabled={isOneContactLoading}
          >
            Add tag
            {isAddTagLoading ? (
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
