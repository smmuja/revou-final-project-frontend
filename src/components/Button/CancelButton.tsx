import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonCancel = ({ label, ...props }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        navigate(-1);
      }}
      {...props}
      className={`${props.className} && ' font-normal rounded-md  p-2 my-5 mx-1  bg-slate-300 hover:border-sky-400  hover:bg-opacity-25 '`}
    >
      {label}
    </button>
  );
};

export default ButtonCancel;
