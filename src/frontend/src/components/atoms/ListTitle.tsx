import { ListTitleProps } from "@/interfaces/interface";

export default function ListTitle({ title }: ListTitleProps) {
  return <p className="px-5 py-1 text-sm border-b">{title}</p>;
}
