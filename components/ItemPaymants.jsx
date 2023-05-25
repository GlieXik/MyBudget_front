import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { formattedAmount } from "@/utils/formatAmount";
import { UnixToHours } from "@/utils/unixToHours";
export default function ItemPaymants({ paymant }) {
  const amountValidation = (value) => {
    if (value > 0) {
      return (
        <div className="text-green-400 text-lg font-medium">
          +{formattedAmount(value)}
        </div>
      );
    } else if (value < 0) {
      return (
        <div className="text-red-400 text-lg font-medium">
          {formattedAmount(value)}
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <li key={paymant._id} className="flex  justify-between mt-2">
      <div className="flex gap-3 items-center">
        {paymant.amount > 0 ? (
          <BsFillArrowUpCircleFill
            size={30}
            fill="rgb(74 222 128)"
            style={{ transform: "rotate(180deg)" }}
          ></BsFillArrowUpCircleFill>
        ) : (
          <BsFillArrowUpCircleFill
            size={30}
            fill="rgb(248, 113, 113)"
          ></BsFillArrowUpCircleFill>
        )}

        <div className=" flex-col">
          <span className="text-slate-500">
            {paymant.amount > 0 ? "Incoming" : "Spending"}
          </span>
          <div className="font-medium text-lg">{paymant.description}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-slate-500">{UnixToHours(paymant.time)}</div>
        {amountValidation(paymant.amount)}
      </div>
    </li>
  );
}
