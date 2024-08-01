

export const Sidebar = () => {
  return (
    <>
      {/* Pop-up */}
      <div className="absolute w-16 h-16 bg-[#001F8B] rounded-full z-10 bottom-5 right-5 -translate-y-full flex justify-center align-middle text-white text-5xl"><p>+</p></div>

      <div className="p-4">
        <h3 className="text-center mb-4 text-2xl font-bold">Pocket Notes</h3>
        <div className="flex items-center" style={{ backgroundColor: 'rgba(47, 47, 47, 0.17)', padding: '0.5rem', borderRadius: '0.5rem' }}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold">
            MN
          </div>
          <p className="ml-2 text-lg font-semibold text-white">My notes</p>
        </div>
      </div>
    </>
  );
};
