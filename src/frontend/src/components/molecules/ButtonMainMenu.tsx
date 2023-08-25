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
        isActive
          ? "bg-main text-baseWhite fill-baseWhite"
          : "text-accent fill-accent"
      }`}
      href={href}
    >
      <div>
        <div className="mx-auto mb-1">
          <Svg slug={slug} size={7} />
        </div>
        {title}
      </div>
    </Link>
  );
}
