import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement>{
    children: string;
}

const Paragraph = ({ children, ...props} : Props) => {

    return (
        <p {... props} className={`"truncate ..."`}>{children}</p>
    )
}

export default Paragraph