import Header from './components/Header';
const Equalizer = () => {
  return (
    <div className="w-full h-full">
      <div className="lg:bg-[url('/src/feature-equalizer/assets/bg-main-desktop.png')] md:bg-[url('/src/feature-equalizer/assets/bg-main-tablet.png')] bg-[url('/src/feature-equalizer/assets/bg-main-mobile.png')] w-full h-[100rem] bg-no-repeat bg cover pl-6 lg:pl-20 md:pl-10 sm:pl-2 pr-3 ">
        <Header />
      </div>
    </div>
  );
};
export default Equalizer;
