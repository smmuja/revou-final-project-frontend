import { PropsWithChildren, ReactNode, TableHTMLAttributes } from "react";

interface Props
  extends TableHTMLAttributes<HTMLTableElement>,
    PropsWithChildren {
  children?: ReactNode;
  label: string;
  data: string | number;
}

export const TableRow = ({ label, data }: Props) => {
  return (
    <tr className="py-3">
      <th className="text-left">{label}</th>
      <td>{data}</td>
    </tr>
  );
};

const Table = ({ children }: Props) => {
  return (
    <table className="w-full mt-5">
      <TableRow label={""} data={""} />
      {children}
    </table>
  );
};

export default Table;
