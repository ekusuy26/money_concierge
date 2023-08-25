import { ButtonFixedProps } from "@/interfaces/interface";
import Svg from "@/components/atoms/Svg";

export default function ButtonFixed({ callback }: ButtonFixedProps) {
  return (
    <button
      className="fixed bottom-20 right-4 p-4 rounded-full shadow-md border bg-white"
      onClick={() => callback()}
    >
      <Svg slug="regist" />
    </button>
  );
}
