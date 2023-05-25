export default function Chip({ label, isActive, onClick }) {
  const classes = `inline-flex items-center rounded-full  px-5 py-2 font-medium  ${
    isActive
      ? "text-slate-50 bg-primary-500"
      : "bg-primary-50 text-slate-800 hover:bg-gray-300"
  }`;
  return (
    <div className={classes} onClick={onClick}>
      {label}
    </div>
  );
}
