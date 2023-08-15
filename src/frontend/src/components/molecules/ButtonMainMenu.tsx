import Link from "next/link";
import Svg from "@/components/atoms/Svg";
import { ButtonMainMenuProps } from "@/interfaces/interface";

export default function ButtonMainMenu({
  title,
  href,
  slug,
  isActive,
}: ButtonMainMenuProps) {
  return (
    <Link
      className={`flex items-center justify-center ${
        isActive ? "bg-red-500" : ""
      }`}
      href={href}
    >
      <div>
        <div className="h-7 w-7 mx-auto mb-1">
          <Svg slug={slug} />
        </div>
        {title}
      </div>
    </Link>
  );
}
