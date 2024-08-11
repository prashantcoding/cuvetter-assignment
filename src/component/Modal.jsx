import  { useState, useRef, useEffect } from 'react';
import { colors } from '../utils/colors';
import { createGroup } from '../utils/api';
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Modal = ({ isOpen, onClose,setgroups}) => {
  const [groupName, setGroupName] = useState('');
  const [color, setColor] = useState('blue');
  const modalRef = useRef(null);

  
  
  useEffect(() => {
    // Function to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!groupName||!color) return;
     try {
      console.log("groupName",groupName)
      console.log("color",color)
      const res= await createGroup(groupName,color);
      setgroups((group)=>[...group,res.data]);
      
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
     
    onClose();
  };

  return (
    <>
    
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="w-80 p-6 rounded-md bg-white"
      >
        <h2 className="text-xl font-semibold mb-4">Create Group</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
            <input
              id="groupName"
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Choose Color</label>
            <div className="flex space-x-2 mt-2">
              {Object.entries(colors).map(([colorName, colorCode]) => (
                <div key={colorName} className="relative">
                  <button
                    type="button"
                    className={`w-12 h-12 rounded-full border-2 ${color === colorCode ? 'border-white border-5' : 'border-transparent'} bg-[${colorCode}] opacity-75 hover:opacity-100`}
                    onClick={() => setColor(colorCode)}
                    style={{ backgroundColor: colorCode }}
                  >
                    {color === colorCode && (
                      <span className="absolute mb-2 inset-0 flex items-center justify-center text-white text-2xl font-bold">+</span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Modal;
