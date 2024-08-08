import { cn } from "@/utils";

export const Button = ({ children, className, ...btnAttrs }) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center h-[48px] text-[16px] font-[500] border-[1px] border-solid border-lightGrayColor rounded-[8px] w-full disabled:bg-primaryBgColor disabled:text-lightGrayColor",
        className
      )}
      {...btnAttrs}
    >
      {children}
    </button>
  );
};
