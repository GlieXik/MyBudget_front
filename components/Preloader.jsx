"use client";

import { useRef } from "react";
import { store } from "@/redux/store";

import { setStartupPayments } from "@/redux/slices/paymentsSlice";

function Preloader({ payments }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPayments(payments));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
