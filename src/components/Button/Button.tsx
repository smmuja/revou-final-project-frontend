import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} && ' font-normal rounded-md  p-2 my-5 mx-1 bg-green-500 hover:border-sky-500  hover:bg-opacity-25 '`}
    >
      {label}
    </button>
  );
};

export default Button;
