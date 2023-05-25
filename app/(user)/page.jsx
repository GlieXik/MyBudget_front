"use client";
// import { store } from "@/redux/store";
// import { setStartupPayments } from "@/redux/slices/paymentsSlice";

import BankCards from "@/components/BankCards";

import CardWrapper from "@/components/CardWrapper";
import FilterAll from "@/components/FilterAll";
import { useDispatch } from "react-redux";
import { useGetPaymentsQuery } from "../api/apiSlice";
import { useEffect } from "react";
import { setStartupPayments } from "@/redux/slices/paymentsSlice";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";

// import Preloader from "@/components/Preloader";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    data: payments,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPaymentsQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setStartupPayments(payments));
    }
    if (isError) {
      router.push("/login");
    }
  }, [dispatch, payments, isSuccess, isError, router]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BankCards />
          <CardWrapper>
            <FilterAll />
          </CardWrapper>
        </>
      )}
    </>
  );
}
