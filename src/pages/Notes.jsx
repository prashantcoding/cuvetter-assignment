import React, { useState } from "react";
import Note from "../component/Note";
import { IoMdSend } from "react-icons/io";

const Notes = () => {
  const [isDisabled,setIsdisabled]= useState(true);
  return (
    <div className="flex flex-col min-h-screen relative">
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 h-64" >
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>

      {/* Sticky Textarea */}
    <div className="-z-5 w-full bg-[#001F8B] absolute -bottom-4 -translate-y-1/2">
        <div className="relative p-4">
        <textarea
          className="w-full h-24 border rounded-lg p-2 resize-none outline-none"
          placeholder="Type your note here..."
          onChange={(e)=>{if(e.target.value !== ""){
            setIsdisabled(false)
          }else{
            setIsdisabled(true)
          }}}
        />
        <button disabled={isDisabled} className="absolute bottom-8 right-8">
          <IoMdSend className={`h-6 w-6 ${isDisabled?"fill-gray-500":""}`}/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
