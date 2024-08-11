
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ setisopen, groups, setactiveGroup,activeGroup,toggle}) => {
  function getInitials(input) {
   
    let words = input.trim().split(/\s+/);

   
    if (words.length > 1) {
       
        return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
    } else if (words.length === 1) {
       
        return words[0].substring(0, 2).toUpperCase();
    } else {
       
        return '';
    }
}


  return (
    <>
      
      <div className="absolute w-16 h-16 bg-[#001F8B] rounded-full z-10 bottom-5 right-5 -translate-y-full flex justify-center align-middle text-white text-5xl" onClick={() => { setisopen(true) }}><p>+</p></div>

      <div className="">
        <h3 className="text-center mb-4 text-2xl font-bold">Pocket Notes</h3>
        <div className="overflow-y-scroll h-[80vh]">
        {
          // eslint-disable-next-line react/prop-types
          groups && groups.map((group) => {
            { console.log(group.color) }
            return <div key={group._id} >
              <Link to={`/notes/${group._id}`}><div className="flex items-center mt-2" style={{ backgroundColor: `${activeGroup==group.name?"rgba(47, 47, 47, 0.17)":""}`, padding: '0.5rem', borderRadius: '0.5rem' }}
                onClick={() => { setactiveGroup(group.name); toggle(false)}}>
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold"
                  style={{ backgroundColor: group.color }}
                >
                  {getInitials(group.name)}
                </div>
                <p className="ml-2 text-lg font-semibold">{group.name}</p>
              </div></Link>
            </div>
          })
        }
        </div>


      </div>


    </>
  );
};
