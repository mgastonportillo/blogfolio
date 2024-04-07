export const formatDateForZod = (dateString: string): string => {
  const formattedDate = `${dateString}T03:00:00Z`;
  return formattedDate;
};
