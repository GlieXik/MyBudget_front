"use client";
import CardWrapper from "@/components/CardWrapper";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Add() {
  const [filterGroup, setFilterGroup] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const handleChangeGroup = (filter) => {
    setFilterGroup(filter);
  };
  const handleInputChange = (e) => {
    let { value } = e.target;
    value = value.replace(/[^-+.,\d]/g, ""); // Видаляємо всі символи, крім "-", "+", ".", ",", та цифр
    setValue("amount", value);
  };

  const onSubmit = (data) => {
    const formData = {
      amount: data.amount.replace(/[.,]/g, ""),
    };
    console.log(formData);
  };

  return (
    <>
      <CardWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex shadow-sm rounded-md ">
            <button
              type="button"
              className={` rounded-tl-lg  w-full  text-sm font-medium px-4 py-2 text-gray-900 hover:bg-red-400 transition-colors ${
                filterGroup === 0 ? "bg-red-400" : "bg-white"
              } `}
              onClick={() => {
                handleChangeGroup(0);
              }}
            >
              Spending
            </button>

            <button
              type="button"
              className={`rounded-tr-md w-full   text-sm font-medium px-4 py-2 text-gray-900 hover:bg-green-400 transition-colors ${
                filterGroup === 1 ? " bg-green-400" : "bg-white"
              } `}
              onClick={() => {
                handleChangeGroup(1);
              }}
            >
              Income
            </button>
          </div>
          <input
            {...register("amount", {
              pattern: /^[-+]?(\d+([.,]\d*)?|[.,]\d+)$/,
              required: true,
            })}
            type="text"
            inputMode="numeric"
            id="amount"
            onChange={handleInputChange}
            className={`text-6xl w-full ${
              filterGroup === 1 ? " bg-green-400" : "bg-red-400"
            } `}
          />
        </form>
      </CardWrapper>
    </>
  );
}
