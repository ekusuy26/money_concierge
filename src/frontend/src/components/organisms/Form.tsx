import { useForm, Controller, SubmitHandler } from "react-hook-form";
import ButtonCategory from "../molecules/ButtonCategory";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Inputs = {
  amount: string;
  date: string;
  category: string;
  balance: string;
  note: string;
};

export default function Form({ closeModal }) {
  const [startDate, setStartDate] = useState(new Date());
  // const [isRegist, setisRegist] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      balance: "0",
      category: "1",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // setisRegist(true);
    closeModal(false, "登録が完了しました。");
  };

  // console.log(watch()); // watch input value by passing the name of it

  const categories = [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
    { id: 5, name: "name5" },
    { id: 6, name: "name6" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-b">
          <div className="relative grid grid-cols-2 divide-x border-t border-x rounded-lg mx-5 text-center">
            <label htmlFor="payment" className="py-2">
              支出
            </label>
            <input
              type="radio"
              className="hidden"
              id="payment"
              value={0}
              {...register("balance", { required: true })}
            />
            <label htmlFor="income" className="py-2">
              収入
            </label>
            <input
              type="radio"
              className="hidden"
              id="income"
              value={1}
              {...register("balance", { required: true })}
            />
            <div className="mj-slideBar"></div>
          </div>
        </div>
        <div className="border-b px-5">
          <label htmlFor="date">日付</label>
          <Controller
            name="date"
            control={control}
            defaultValue={startDate.toString()}
            render={({ field }) => (
              <DatePicker
                dateFormat="yyyy年MM月dd日"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  field.onChange(date?.toString());
                }}
                className="bg-inherit outline-none p-3"
              />
            )}
          />
          {errors.date && (
            <p className="text-xs text-red-500">This field is required</p>
          )}
        </div>
        <div className="border-b px-5">
          <div className="flex justify-between items-center">
            <label htmlFor="amount">金額</label>
            <input
              className="bg-inherit text-right outline-none p-3"
              autoComplete="off"
              {...register("amount", { required: true })}
            />
            <span>円</span>
          </div>
          {errors.amount && (
            <p className="text-xs text-red-500">This field is required</p>
          )}
        </div>
        <div className="border-b p-5">
          <p className="mb-3">カテゴリー</p>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category, _) => (
              <ButtonCategory
                key={category.id}
                id={category.id}
                name={category.name}
                register={register("category", { required: true })}
              />
            ))}
          </div>
          {errors.category && (
            <p className="text-xs text-red-500">This field is required</p>
          )}
        </div>
        <div className="border-b px-5">
          <div className="flex justify-between items-center">
            <label htmlFor="note">memo</label>
            <input
              className="bg-inherit outline-none p-3"
              autoComplete="off"
              {...register("note")}
            />
          </div>
          {errors.note && (
            <p className="text-xs text-red-500">This field is required</p>
          )}
        </div>
        {/* errors will return when field validation fails  */}
        <div className="flex items-center my-5">
          <button className="border px-10 py-2 mx-auto" type="submit">
            登録する
          </button>
        </div>
      </form>
    </>
  );
}
