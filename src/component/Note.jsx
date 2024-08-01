import React from "react";

const Note = ({note,timestamp}) => {
  const formatDate = () => {
    const date = new Date(timestamp);
  
    // Format date as dd-mm-yyyy
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
  
    // Format time as hh:mm AM/PM
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const formattedTime = `${hours}:${minutes} ${ampm}`;
  
    return { date: formattedDate, time: formattedTime };
  };
  const {date,time}=formatDate(timestamp);
  return  <div className="p-6 bg-white rounded-lg shadow-md">
  {/* Note Content */}
  <p className="text-base text-[#2F2F2F] mb-4 leading-relaxed">
    {note}
  </p>

  {/* Footer with Date and Time */}
  <div className="flex items-center justify-end space-x-4 text-sm text-gray-500">
    <p className="font-medium">{date}</p>
    <div className="flex items-center">
      <span className="text-gray-500 text-lg mr-1">•</span>
      <p className="font-medium">{time}</p>
    </div>
  </div>
</div>;
};

export default Note;
