import { ButtonCategoryProps } from "@/interfaces/interface";
import Svg from "@/components/atoms/Svg";

export default function ButtonCategory({
  id,
  name,
  slug,
  register,
}: ButtonCategoryProps) {
  return (
    <>
      <input
        type="radio"
        className="hidden"
        id={`category${id}`}
        value={id}
        {...register}
      />
      <label
        className="mj-categoryBtn border py-2 rounded-md text-center text-xs"
        htmlFor={`category${id}`}
      >
        <div className="mx-auto">
          <Svg slug={slug} size={7} />
        </div>
        {name}
      </label>
    </>
  );
}
