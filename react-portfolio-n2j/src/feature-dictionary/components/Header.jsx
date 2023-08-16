import OnSubmitInput from './OnSubmitInput';
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-teal-700 to-teal-200 w-full h-[400px] relative flex justify-center items-center shadow-xl overflow-hidden flex-col">
      <div className="flex justify-center mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center">
          Welcome to
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center">
          Simple English Dictionary
        </h1>
      </div>
      <div className="flex justify-center flex-col items-center mt-10">
        <h2 className="text-base md:text-lg lg:text-xl text-white text-center mb-2 lg:mb-5">
          Quick search for a word...
        </h2>
        <OnSubmitInput />
      </div>
    </div>
  );
};

export default Header;
