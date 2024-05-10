import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={`${props.className} && 
        ' block flex-1 border-2 border-neutral-400 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md w-full ' `}
    />
  );
};

export default TextArea;
