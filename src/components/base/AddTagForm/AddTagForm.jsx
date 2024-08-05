import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";

import { TextField, Button } from "@/components/ui";

import { useAddTagMutation, useGetOneContactQuery } from "@/services";

import { initialValues } from "./initialValues";
import { fields } from "./fields";

export const AddTagForm = () => {
  const { id } = useParams();
  const { refetch: refetchContact, isLoading: isOneContactLoading } =
    useGetOneContactQuery(id);
  const [addTag, { isLoading }] = useAddTagMutation();

  return (
    <Formik
      onSubmit={async ({ tag }, { resetForm }) => {
        try {
          const currentContactData = await refetchContact();

          const currentTags =
            currentContactData?.data?.resources?.[0]?.tags.map(
              ({ tag }) => tag
            );

          const body = {
            tags: [...currentTags, tag],
          };

          await addTag({ id, body }).unwrap();

          resetForm();
        } catch (err) {
          console.log(err);
        }
      }}
      initialValues={initialValues}
    >
      <Form>
        <TextField {...fields.tag} />
        <Button
          className="mt-[6px]"
          type="submit"
          disabled={isOneContactLoading}
        >
          Add tag
        </Button>
      </Form>
    </Formik>
  );
};
