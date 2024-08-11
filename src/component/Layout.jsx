import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import Modal from "./Modal";
import useFetchGroup from "../hooks/useFetchGroup";

export const Layout = ({children}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeGroup,setactiveGroup]=useState(null);
  const [isopen, setisopen] = useState(false);
  const {data}=useFetchGroup("https://pocket-ntoes-backend.onrender.com/api/groups");
  const [groups,setgroups]=useState()
  useEffect(() => {
    setgroups(data)
  }, [data]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return <>
  <div className="min-h-screen flex flex-col md:grid md:grid-cols-4 relative">

{/* Sidebar */}
<div
  className={`fixed inset-0 bg-white p-6 flex flex-col shadow-lg transform z-10 ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 md:relative md:translate-x-0  md:h-full`}
>
  
  <Sidebar setisopen={setisopen} groups={groups} setactiveGroup={setactiveGroup} activeGroup={activeGroup} toggle={setSidebarOpen}/>
  <button
    className="absolute top-4 right-4 p-2 bg-gray-200 rounded md:hidden"
    onClick={toggleSidebar}
  >
    Close
  </button>
</div>

{/* Main Content */}
<div className="md:col-span-3 flex-1 flex flex-col relative">
  {
    activeGroup?<div className="bg-[#001F8B] p-4 flex justify-between items-center text-white absolute w-full">
    <p>{activeGroup}</p>
    <button
      className="md:hidden p-2 bg-gray-200 rounded text-black"
      onClick={toggleSidebar}
    >
      Menu
    </button>
  </div>:<></>
  }
  <div className="bg-[#DAE5F5]  flex-1 ">
    <p>{children}</p>
  </div>
</div>
</div>

<Modal isOpen={isopen}  setgroups={setgroups}onClose={()=>{setisopen(false)}} ></Modal></>

};
