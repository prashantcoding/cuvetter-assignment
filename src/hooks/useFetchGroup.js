import axios, { Axios } from "axios";
import  { useEffect, useState } from "react";

const useFetchGroup = (url,dependency) => {
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState([]);
    const [error, seterror] = useState();
    
    
    useEffect(() => {
      const getNotes=async()=>{
        setloading(true)
         axios({
          url:url,
          method:"get"
    
         
        }).then((res)=>{
          console.log("res",res)
          setdata(res.data);
        }).catch((err)=>{
          console.log(err);
        }).finally(()=>{
          setloading(false)
        })
        
      }
      try {
        getNotes();
        
      } catch (error) {
        seterror(error)
        setloading(false)
      }
      
    }, [dependency]);
    
    
  return {loading,data,error};
};

export default useFetchGroup;
