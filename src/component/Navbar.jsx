

const Navbar = ({activeGroup,toggleSidebar}) => {
  return <div className="bg-[#001F8B] p-4 flex justify-between items-center text-white absolute w-full">
  <p>{activeGroup}</p>
  <button
    className="md:hidden p-2 bg-gray-200 rounded text-black"
    onClick={toggleSidebar}
  >
    Menu
  </button>
</div>;
};

export default Navbar;
