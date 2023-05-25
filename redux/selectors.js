import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
// ? payments
export const selectStatusFilter = (state) => state.filter.status;
export const selectAllPayments = (state) => state.payments.startupPayments;

export const selectVisiblePayments = createSelector(
  [selectAllPayments, selectStatusFilter],
  (payments, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.income:
        return payments.filter((payment) => payment.amount > 0);
      case statusFilters.spending:
        return payments.filter((payment) => payment.amount < 0);
      default:
        return payments;
    }
  }
);
export const selectPaymentsCount = createSelector(
  [selectAllPayments],
  (payments) => {
    console.log("Calculating task count");

    return payments.reduce((acc, payment) => {
      acc += payment.amount;
      return acc;
    }, 0);
  }
);
// ? auth
export const selecCurrentUser = (state) => state.auth.user;
export const selecCurrentToken = (state) => state.auth.token;
