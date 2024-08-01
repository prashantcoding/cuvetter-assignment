
import homeBackgorund from '../assets/home_background.png';

const Home = () => {
  return (
    <div className="flex flex-col  bg-[#DAE5F5]">
      <div className="flex flex-col items-center justify-center flex-grow text-center p-4">
        {/* Centered Image with reduced dimensions */}
        <img
          src={homeBackgorund}
          alt="Home Background"
          className="w-3/4 max-w-md h-auto mb-6"
        />

        {/* Heading */}
        <h3 className="text-3xl font-bold text-[#2F2F2F] mb-4">
          Pocket Notes
        </h3>

        {/* Paragraph */}
        <p className="text-sm text-[#2F2F2F] max-w-2xl mx-auto font-semibold">
          Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>

        <div className="text-center text-sm text-[#2F2F2F] absolute bottom-1">
        End-to-End Encrypted
      </div>
      </div>

      {/* End-to-End Encryption Note */}
     
    </div>
  );
};

export default Home;
