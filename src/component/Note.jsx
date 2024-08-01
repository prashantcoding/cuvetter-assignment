import React from "react";

const Note = () => {
  return  <div className="p-6 bg-white rounded-lg shadow-md">
  {/* Note Content */}
  <p className="text-base text-[#2F2F2F] mb-4 leading-relaxed">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum exercitationem ipsa debitis ex quibusdam impedit. Voluptatibus praesentium, reprehenderit reiciendis rem pariatur odio, atque magni necessitatibus id sapiente incidunt numquam facere?
  </p>

  {/* Footer with Date and Time */}
  <div className="flex items-center justify-end space-x-4 text-sm text-gray-500">
    <p className="font-medium">25-Mar-24</p>
    <div className="flex items-center">
      <span className="text-gray-500 text-lg mr-1">•</span>
      <p className="font-medium">11:04 AM</p>
    </div>
  </div>
</div>;
};

export default Note;
