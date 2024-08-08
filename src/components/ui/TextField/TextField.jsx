import { Field } from "formik";

import { cn } from "@/utils";

export const TextField = ({ label, className, ...fieldProps }) => {
  return (
    <label className="flex flex-col gap-[6px]">
      {label}
      <Field
        {...fieldProps}
        className={cn(
          "h-[48px] border-[1px] border-solid rounded-[8px] pl-[12px]",
          className
        )}
      />
    </label>
  );
};
