"use client";

import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FormProps } from "@/interfaces/interface";
import ButtonCategory from "@/components/molecules/ButtonCategory";
import Load from "@/components/molecules/Load";
import axios from "axios";

type Inputs = {
  id: number;
  amount: string;
  date: string;
  category_id: string;
  income_flg: string;
  memo: string;
  user_id: string;
};

export default function Form({ finance = null, callback }: FormProps) {
  const [userId, setUserId] = useState("");

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/category`,
    fetcher
  );
  const init = finance === null ? new Date() : new Date(finance.date);
  const [startDate, setStartDate] = useState<Date | null>(init);
  // console.log(startDate);
  // const [isRegist, setisRegist] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      id: finance && finance.id,
      income_flg: finance ? String(finance.income_flg) : "0",
      category_id: finance ? String(finance.category_id) : "1",
      amount: finance && finance.amount,
      memo: finance && finance.memo,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userId !== "") {
      data.user_id = userId;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/finance/store`, data)
      .then(function (response) {
        callback("登録完了");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch("/api/userId");
      const data = await response.json();
      setUserId(data.userId);
    };
    fetchUserId();
  }, []);

  // console.log(watch()); // watch input value by passing the name of it

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("id")} />
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
              {...register("income_flg", { required: true })}
            />
            <label htmlFor="income" className="py-2">
              収入
            </label>
            <input
              type="radio"
              className="hidden"
              id="income"
              value={1}
              {...register("income_flg", { required: true })}
            />
            <div className="mj-slideBar"></div>
          </div>
        </div>
        <div className="border-b px-5">
          <label htmlFor="date">日付</label>
          <Controller
            name="date"
            control={control}
            defaultValue={startDate?.toLocaleString()}
            render={({ field }) => (
              <DatePicker
                dateFormat="yyyy年MM月dd日"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  field.onChange(date?.toLocaleString());
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
            {data.map((category, _) => (
              <ButtonCategory
                key={category.id}
                id={category.id}
                name={category.name}
                slug={category.slug}
                register={register("category_id", { required: true })}
              />
            ))}
          </div>
          {errors.category_id && (
            <p className="text-xs text-red-500">This field is required</p>
          )}
        </div>
        <div className="border-b px-5">
          <div className="flex justify-between items-center">
            <label htmlFor="memo">memo</label>
            <input
              className="bg-inherit outline-none p-3"
              autoComplete="off"
              {...register("memo")}
            />
          </div>
          {errors.memo && (
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
