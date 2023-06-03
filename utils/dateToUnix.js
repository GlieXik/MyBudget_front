export const dateToUnix = (dateTimeString) => {
  const unixTimestamp = new Date(dateTimeString).getTime() / 1000; // Divide by 1000 to convert to seconds
  return unixTimestamp;
};
