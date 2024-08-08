import { Field } from "formik";

import { cn } from "@/utils";

export const TextField = ({ label, className, ...fieldProps }) => {
  return (
    <label className="flex flex-col gap-[6px]">
      <span className="text-[12px] ml-[12px]">{label}</span>
      <Field
        {...fieldProps}
        className={cn(
          "h-[48px] border-[1px] border-solid rounded-[8px] pl-[12px] placeholder:text-[12px]/[1.7] placeholder:text-lightGrayColor placeholder:font-[500]",
          className
        )}
      />
    </label>
  );
};
