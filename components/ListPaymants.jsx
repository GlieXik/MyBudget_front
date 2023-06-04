import { formattedToday } from "@/utils/formattedToday";
import ItemPaymants from "./ItemPaymants";
import SwipeToDelete from "react-swipe-to-delete-ios";
import { useDeletePaymentMutation } from "@/app/api/apiSlice";
export default function ListPaymants({ paymants }) {
  const [deletePayment] = useDeletePaymentMutation();

  const groups = paymants.reduce((acc, cur) => {
    const date = new Date(cur.time * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }
    acc[formattedDate].push(cur);
    return acc;
  }, {});

  const formattedGroups = Object.keys(groups).map((time) => ({
    time,
    items: groups[time],
  }));

  formattedGroups.sort((a, b) => new Date(b.time) - new Date(a.time));

  formattedGroups.forEach((obj) => {
    obj.items.sort((a, b) => b.time - a.time);
  });

  return (
    <>
      {formattedGroups.map((group) => (
        <ul key={group.time}>
          <p className="text-slate-500 mt-3  ml-1">
            {formattedToday === group.time ? "Today" : group.time}
          </p>
          {group.items.map((item, index) => (
            <SwipeToDelete
              key={index}
              height={52}
              onDeleteConfirm={async (onSuccess, onCancel) => {
                if (
                  window.confirm("Do you really want to delete this item ?")
                ) {
                  onSuccess();
                  await deletePayment(item._id).unwrap();
                } else {
                  onCancel();
                }
              }}
            >
              <ItemPaymants paymant={item} />
            </SwipeToDelete>
          ))}
        </ul>
      ))}
    </>
  );
}
