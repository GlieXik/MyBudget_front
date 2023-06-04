export const UnixToHours = (unix) => {
  const date = new Date(unix * 1000);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
};
