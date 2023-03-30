import Header from './components/Header';
import CartSection from './components/CartsSection';
const Equalizer = () => {
  return (
    <div className="w-full h-full">
      <div className="lg:bg-[url('/src/feature-equalizer/assets/bg-main-desktop.png')] md:bg-[url('/src/feature-equalizer/assets/bg-main-tablet.png')] sm:bg-[url('/src/feature-equalizer/assets/bg-main-tablet.png')] bg-[url('/src/feature-equalizer/assets/bg-main-mobile.png')] sm:bg-cover w-full h-[100rem] bg-no-repeat bg cover pl-5 lg:pl-20 md:pl-10 sm:pl-10 sm:pr-3 pr-5 ">
        <Header />
        <CartSection />
      </div>
    </div>
  );
};
export default Equalizer;
