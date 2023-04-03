import Header from './components/Header';
import CartSection from './components/CartsSection';
import Footer from './components/Footer';
const Equalizer = () => {
  return (
    <div className="w-full h-full">
      <div className="lg:bg-[url('/src/feature-equalizer/assets/bg-main-desktop.png')] md:bg-[url('/src/feature-equalizer/assets/bg-main-tablet.png')] sm:bg-[url('/src/feature-equalizer/assets/bg-main-tablet.png')] bg-[url('/src/feature-equalizer/assets/bg-main-mobile.png')] sm:bg-cover w-full xl:h-[120rem] bg-no-repeat bg cover pl-5 lg:pl-40 md:pl-30 sm:pl-20 sm:pr-3 pr-5 ">
        <Header />
        <CartSection />
        <Footer />
      </div>
    </div>
  );
};
export default Equalizer;
