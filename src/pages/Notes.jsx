import React from "react";
import Note from "../component/Note";

const Notes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Notes List */}
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
      <div className="bg-white border-t border-[rgb(224,224,224)] p-4 w-full fixed bottom-0">
        <textarea
          className="w-full h-24 border rounded-lg p-2 resize-none"
          placeholder="Type your note here..."
        />
      </div>
    </div>
  );
};

export default Notes;
