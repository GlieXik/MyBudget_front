"use client";
import { selectPaymentsCount } from "@/redux/selectors";
import { formattedAmount } from "@/utils/formatAmount";
import { useState } from "react";
import { AiFillPlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function BankCards() {
  const [isOpen, setIsOpen] = useState(false);
  const totalMoney = formattedAmount(useSelector(selectPaymentsCount));

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex p-5 justify-between gap-5 ">
        {/* <span>Hello {userInfo.name}</span> */}
        <div className="bg-white dark:bg-gray-800 dark:border-gray-700 w-40 h-32 border border-gray-300 rounded-xl p-3 shadow">
          <span className="block text-center">Wallet</span>
          <span className="block text-2xl mt-6"> {totalMoney} </span>
          <span className="block  mt-0"> Gruvnya </span>
        </div>

        <div
          className="bg-white dark:bg-gray-800 dark:border-gray-700 w-40 h-32 border border-gray-300 rounded-xl p-3 shadow "
          onClick={toggleDrawer}
        >
          <span className="block text-center">Monobank</span>
          <div className="flex mt-6 justify-center">
            <AiFillPlusCircle size={"40"} />
          </div>
        </div>
      </div>
      {/* ??2 */}
      <div
        className={`fixed h-1/2 rounded-t-lg inset-x-0 bottom-0 z-40 bg-white overflow-hidden shadow-xl transform transition-all w-full ${
          isOpen ? "" : "translate-y-full"
        }`}
      >
        <div className=" p-4">
          <p>This is the content of the drawer.</p>
        </div>
        <div className="absolute top-2 right-2" onClick={closeModal}>
          <AiOutlineCloseCircle size={"40"} />
        </div>
      </div>
    </>
  );
}
