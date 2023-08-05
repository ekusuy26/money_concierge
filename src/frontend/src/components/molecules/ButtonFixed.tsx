import { RegistSvg } from "../atoms/Svg";

export default function ButtonFixed({ callback }) {
  return (
    <button
      className="fixed bottom-16 right-4 h-14 w-14 p-4 rounded-full shadow-md border bg-white"
      onClick={callback}
    >
      <RegistSvg />
    </button>
  );
}
