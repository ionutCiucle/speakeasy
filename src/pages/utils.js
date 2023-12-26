export const timestampToDateString = (timestamp) => {
  const date = new Date(timestamp);

  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
