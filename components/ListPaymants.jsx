import { formattedToday } from "@/utils/formattedToday";
import ItemPaymants from "./ItemPaymants";
export default function ListPaymants({ paymants }) {
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

  return (
    <>
      {formattedGroups.map((group) => (
        <ul key={group.time}>
          <p className="text-slate-500 mt-3  ml-1">
            {formattedToday === group.time ? "Today" : group.time}
          </p>
          {group.items.map((item, index) => (
            <ItemPaymants key={index} paymant={item} />
          ))}
        </ul>
      ))}
    </>
  );
}
