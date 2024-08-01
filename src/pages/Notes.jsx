import React, { useEffect, useState } from "react";
import Note from "../component/Note";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router";
import useFetchGroup from "../hooks/useFetchGroup";
import { createNote } from "../utils/api";

const Notes = () => {
  const [content,setcontent]=useState('');
  const {groupId}=useParams();
  const {data:notes}=useFetchGroup(`http://localhost:3000/api/groups/${groupId}/notes`,groupId)
  const [notesdata, setnotes] = useState(notes);
  useEffect(()=>{
    setnotes(notes)
  },[notes])
  const handleCreate=async()=>{
    if(!groupId,!content) return;
     try {
      const res =await createNote(groupId,content);
      setnotes([...notes,res.data])
      setcontent('')
      console.log("Note created sucessfully")
     } catch (error) {
      console.log("some error occur white creating notes")
     }
  }
  const [isDisabled,setIsdisabled]= useState(true);
  return (
    <div className="flex flex-col min-h-screen relative">
      
      <div className="flex-1 overflow-y-scroll p-2 ">
        <div className="space-y-4 " style={{height:'450px'}} >
          { notesdata && notesdata.map((note)=>{
            return <div key={note._id}>
             <Note note={note.content} timestamp={note.createdAt}/></div>
          })}
        </div>

      </div>


      {/* Sticky Textarea */}
    <div className="-z-5 w-full bg-[#001F8B] absolute -bottom-4 -translate-y-1/2">
        <div className="relative p-4">
        <textarea
          className="w-full h-24 border rounded-lg p-2 resize-none outline-none"
          placeholder="Type your note here..."
          value={content}
          onChange={(e)=>{if(e.target.value !== ""){
            setIsdisabled(false)
            setcontent(e.target.value)
          }else{
            setcontent()
            setIsdisabled(true)
          }}}
        />
        <button disabled={isDisabled} className="absolute bottom-8 right-8" onClick={handleCreate}>
          <IoMdSend className={`h-6 w-6 ${isDisabled?"fill-gray-500":""}`}/>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
