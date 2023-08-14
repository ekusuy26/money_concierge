import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Svg from "../atoms/Svg";

type Inputs = {
  id: number;
};

export default function FormDeleteFinance({ id, callback }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { id: id } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/finance/${data.id}`)
      .then(function (response) {
        response.data && callback("削除しました");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
      <button type="submit" className="h-8 w-8 fill-red-500">
        <Svg slug="trash" />
      </button>
    </form>
  );
}
