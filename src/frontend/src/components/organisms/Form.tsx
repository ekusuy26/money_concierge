import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  amount: string;
  date: string;
  section: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch()); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-b p-3">
        <label htmlFor="amount">金額</label>
        <input
          className="bg-inherit"
          {...register("amount", { required: true })}
        />
        {errors.amount && (
          <p className="text-xs text-red-500">This field is required</p>
        )}
      </div>
      <div className="border-b p-3">
        <label htmlFor="section">項目</label>
        <input
          className="bg-inherit"
          {...register("section", { required: true })}
        />
        {errors.section && (
          <p className="text-xs text-red-500">This field is required</p>
        )}
      </div>
      <div className="border-b p-3">
        <label htmlFor="date">日付</label>
        <input
          className="bg-inherit"
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p className="text-xs text-red-500">This field is required</p>
        )}
      </div>
      {/* errors will return when field validation fails  */}
      <div className="flex items-center mt-5">
        <button className="border px-10 py-2 mx-auto" type="submit">
          登録する
        </button>
      </div>
    </form>
  );
}
