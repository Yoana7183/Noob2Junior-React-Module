import OnSubmitInput from './OnSubmitInput';
const Header = () => {
  return (
    <div className="bg-[url('/assetsDictionary/header.jpg')] bg-cover  h-[450px] sm:h-[600px] relative flex justify-center items-center shadow-xl overflow-hidden flex-col">
      <div className="flex justify-center mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-teal-600 text-center mb-5">
          Welcome to
        </h1>
      </div>
      <div className="flex justify-center mb-5">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-teal-600 text-center">
          Simple English Dictionary
        </h1>
      </div>
      <div className="flex justify-center flex-col items-center mt-10">
        <OnSubmitInput />
      </div>
    </div>
  );
};

export default Header;
