export const convertTime = (time: Date): number => {
  const h = new Date(time);

  return h.getFullYear();
};
