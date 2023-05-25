"use client";
import { useDispatch, useSelector } from "react-redux";
import Chip from "./Chip";
import { selectStatusFilter, selectVisiblePayments } from "@/redux/selectors";
import { setStatusFilter } from "@/redux/slices/filterSlice";
import { statusFilters } from "@/redux/constants";
import ListPaymants from "./ListPaymants";

export default function FilterAll({ payments }) {
  const dispatch = useDispatch();

  const activeFilter = useSelector(selectStatusFilter);
  const paymentsVisible = useSelector(selectVisiblePayments);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <>
      <div className="flex gap-2 flex-nowrap ">
        {Object.entries(statusFilters).map(([key, label]) => {
          return (
            <Chip
              key={key}
              onClick={() => handleFilterChange(label)}
              label={label}
              isActive={activeFilter === label}
            />
          );
        })}
      </div>
      <ListPaymants paymants={paymentsVisible} />
    </>
  );
}
