import Link from "next/link";
import Svg from "@/components/atoms/Svg";
import { ButtonMainMenuProps } from "@/interfaces/interface";

export default function ButtonMainMenu({
  title,
  href,
  icon,
  isActive,
}: ButtonMainMenuProps) {
  return (
    <Link href={href} className={`${isActive ? "bg-main" : ""} py-2`}>
      {icon}
      <p>{title}</p>
    </Link>
  );
}
