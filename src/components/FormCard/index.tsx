import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props extends PropsWithChildren {
  children?: ReactNode;
  topLabel: string;
  footer: string;
  link: string;
  footerLabel: string;
}

const FormCard = ({ children, topLabel, footer, link, footerLabel }: Props) => {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            {topLabel}
          </h2>
        </div>
      </div>

      <div className="mt-5 mx-10 sm:mx-auto sm:w-full sm:max-w-sm border border-slate-300 justify-center m-auto p-10">
        {children}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        {footer}
        <Link
          to={link}
          className="font-semibold leading-6 text-black hover:text-indigo-500"
        >
          {" "}
          {footerLabel}
        </Link>
      </p>
    </div>
  );
};

export default FormCard;
