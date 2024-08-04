import { Formik, Form } from "formik";

import { TextField, Button } from "@/components/ui";

import { fields } from "./fields";

export const AddTagForm = () => {
  return (
    <Formik onSubmit={() => {}}>
      <Form>
        <TextField {...fields.tag} />
        <Button className="mt-[6px]" type="submit">
          Add tag
        </Button>
      </Form>
    </Formik>
  );
};
