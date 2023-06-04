"use client";

import BankCards from "@/components/BankCards";

import CardWrapper from "@/components/CardWrapper";
import FilterAll from "@/components/FilterAll";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setStartupPayments } from "@/redux/slices/paymentsSlice";

import Loader from "@/components/Loader";
import { useGetPaymentsQuery } from "@/app/api/apiSlice";

export default function Home() {
  const dispatch = useDispatch();

  const {
    data: payments,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetPaymentsQuery();

  useEffect(() => {
    refetch();
    if (isSuccess) {
      dispatch(setStartupPayments(payments));
    }
  }, [dispatch, isSuccess, payments, refetch]);

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
