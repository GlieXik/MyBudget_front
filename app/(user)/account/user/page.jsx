"use client";
import CardWrapper from "@/components/CardWrapper";

import { logOut, removeAccessTokenCookie } from "@/redux/slices/authSlice";
import { resetPayments } from "@/redux/slices/paymentsSlice";
import { resetStore } from "@/redux/store";
import { useRouter } from "next/navigation";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
export default function User() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    dispatch(logOut());
    removeAccessTokenCookie();
    router.push("/login");
  };
  return (
    <>
      <CardWrapper>
        <div className="flex flex-col">
          <button
            type="button"
            className="text-center inline-flex items-center rounded px-6 pb-2 pt-2.5 text-md font-medium   text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
            onClick={() => handleLogout()}
          >
            <IoExitOutline size={24} className="mr-4" />
            Exit
          </button>
        </div>
      </CardWrapper>
    </>
  );
}
