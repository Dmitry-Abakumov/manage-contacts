export const Button = ({ children, type, className }) => {
  return (
    <button
      className={`flex justify-center items-center h-[48px] border-[1px] border-solid border-lightGrayColor rounded-[8px] w-full ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
