import { Field } from "formik";

export const TextField = ({ label, ...fieldProps }) => {
  return (
    <label className="flex flex-col gap-[6px]">
      {label}
      <Field
        {...fieldProps}
        className="h-[48px] border-[1px] border-solid border-lightGrayColor rounded-[8px] pl-[12px]"
      />
    </label>
  );
};
