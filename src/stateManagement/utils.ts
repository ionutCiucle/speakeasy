export const timestampToDateString = (timestamp: number) => {
  const date = new Date(timestamp);

  return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

export const getItemById = <T extends { id: string }>(
  list: T[],
  id: T['id'],
) => {
  return list.find((item) => item.id === id);
};
