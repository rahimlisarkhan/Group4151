function convertTime(dateFormat) {
  // Create a Date object from the input string
  const date = new Date(dateFormat);

  // Format the date and time components
  const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
  const formattedDate = `${String(date.getDate()).padStart(2, "0")}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${date.getFullYear()}`;

  // Combine the formatted time and date
  const result = `${formattedTime} ${formattedDate}`;

  return result;
}
