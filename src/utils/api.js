import axios from "axios";

export const createGroup = async ( name, color ) => {
  try {
    console.log("name inside",name)
    if(!name||!color) return;
    const response = await axios({
        url:"https://pocket-ntoes-backend.onrender.com/api/groups",
        method:"post",
        data:{
            name:name,
            color:color
        }

    })
    console.log(response);
    return response;
  } catch (error) {
    console.log("error",error)
    throw new Error("Some error occurred while creating the group");
  }
};



export const createNote = async ( id, content ) => {
  try {
    console.log("name inside",name)
    if(!id||!content) return;
    const response = await axios({
        url:`https://pocket-ntoes-backend.onrender.com/api/groups/${id}/notes`,
        method:"post",
        data:{
            content:content,
            
        }

    })
    console.log(response);
    return response;
  } catch (error) {
    console.log("error",error)
    throw new Error("Some error occurred while creating the group");
  }
};


