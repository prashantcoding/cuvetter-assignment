import { useEffect, useState,useRef } from "react";
import Note from "../component/Note";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router";
import useFetchGroup from "../hooks/useFetchGroup";
import { createNote } from "../utils/api";

const Notes = () => {
  const [content, setcontent] = useState('');
  const { groupId } = useParams();
  const { data: notes } = useFetchGroup(`https://pocket-ntoes-backend.onrender.com/api/groups/${groupId}/notes`, groupId)
  const [notesdata, setnotes] = useState(notes);
  

  useEffect(() => {
    setnotes(notes)
  }, [notes])
  const handleCreate = async () => {
    if (!groupId, !content) return;
    try {
      const res = await createNote(groupId, content);
      setnotes((notes) => ([...notes, res.data]))
      setcontent('')
      console.log("Note created sucessfully")
    } catch (error) {
      
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }
  const [isDisabled, setIsdisabled] = useState(true);


  const messageBodyRef = useRef(null);
  useEffect(() => {
    const container = messageBodyRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [notesdata]);
  
  
  return (
    <div className="flex flex-col min-h-screen">

      <div ref={messageBodyRef} className="flex-1 overflow-y-scroll p-2 snap-end mt-14">
        <div style={{ height: '450px' }} >
          {notesdata && notesdata.map((note) => {
            return <div key={note._id}>
              <Note note={note.content} timestamp={note.createdAt} /></div>
          })}
        </div>

      </div>


      {/* Textarea */}
      <div className="-z-5 w-full bg-[#001F8B]">
        <div className="p-4">
          <textarea
            className="w-full h-24 border rounded-lg p-2 resize-none outline-none"
            placeholder="Type your note here..."
            value={content}
            onChange={(e) => {
              if (e.target.value !== "") {
                setIsdisabled(false)
                setcontent(e.target.value)
              } else {
                setcontent()
                setIsdisabled(true)
              }
            }}
          />
          <button disabled={isDisabled} className="absolute bottom-8 right-8" onClick={handleCreate}>
            <IoMdSend className={`h-6 w-6 ${isDisabled ? "fill-gray-500" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
