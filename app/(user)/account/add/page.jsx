"use client";
import CardWrapper from "@/components/CardWrapper";
import { useState } from "react";
import { useFormik } from "formik";
import { dateToUnix } from "@/utils/dateToUnix";
import { useAddPaymentMutation } from "@/app/api/apiSlice";
import { useRouter } from "next/navigation";
export default function Add() {
  const [filterGroup, setFilterGroup] = useState(0);
  const [addPayment, { isError, isLoading }] = useAddPaymentMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      amount: "",
      time: "",
      description: "",
    },
    onSubmit: async (values) => {
      const { time, amount, ...rest } = values;
      const checkMinus = filterGroup === 0 ? `-${amount * 100}` : amount * 100;
      const unixTime = dateToUnix(time);
      const updatedObject = {
        ...rest,
        time: unixTime,
        amount: checkMinus,
      };

      console.log(
        "🚀 ~ file: page.jsx:24 ~ onSubmit: ~ updatedObject:",
        updatedObject
      );
      await addPayment(updatedObject).unwrap();
      router.push("/account");
    },
  });

  const handleChangeGroup = (filter) => {
    setFilterGroup(filter);
  };
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localDateTime = new Date(now - offset).toISOString().slice(0, 16);

  return (
    <>
      <CardWrapper>
        <form onSubmit={formik.handleSubmit}>
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
            type="number"
            inputMode="numeric"
            id="amount"
            onChange={formik.handleChange}
            value={formik.values.amount}
            className={`text-6xl w-full ${
              filterGroup === 1 ? " bg-green-400" : "bg-red-400"
            } `}
          />
          <div>
            <div className="mt-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Сільпо"
                value={formik.values.description}
                onChange={formik.handleChange}
                required
              />
            </div>

            <div className="mt-2 relative">
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select a time
              </label>
              <input
                type="datetime-local"
                max={localDateTime}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                data-te-timepicker-format24="true"
                id="time"
                value={formik.values.time}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className={
              isLoading
                ? "w-full mt-5 cursor-not-allowed text-white bg-primary-400  font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                : "text-white mt-5  bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            }
            role="status"
            disabled={isLoading}
          >
            {isLoading && (
              <div
                className="inline-block mr-2 h-3 w-3 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            )}
            Submit
          </button>
        </form>
      </CardWrapper>
    </>
  );
}
