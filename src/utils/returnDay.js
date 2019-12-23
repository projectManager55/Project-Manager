const returnFormatedDate = (day) => {
  const date = new Date(day);
  const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString()
    .split('T')[0];
  return dateString;
};

export default returnFormatedDate;
