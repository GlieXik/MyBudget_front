export const UnixToHours = (unix) => {
  const date = new Date(unix * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = hours + ":" + minutes;

  return formattedTime;
};
