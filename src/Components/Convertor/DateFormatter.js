import React from 'react';

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const DateFormatter = ({ inputDate }) => {
  const formattedDate = formatDate(inputDate);

  return <span>{formattedDate}</span>;
};

export default DateFormatter;

