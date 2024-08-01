import React, { useEffect } from "react";

const useFetchGroup = () => {
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState([]);
    const [error, seterror] = useState();
    
    
    useEffect(() => {
      const getNotes=()=>{
        return <></>
      }
      getNotes();
    }, []);
    
    
  return {loading,data,error};
};

export default useFetchGroup;
