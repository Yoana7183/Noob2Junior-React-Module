import Header from './components/Header';
import CartSection from './components/CartsSection';
import Footer from './components/Footer';
const Equalizer = () => {
  return (
    <main className="w-full h-full">
      <div
        className="lg:bg-[url('\assetsEqualizer\bg-main-desktop.png')] md:bg-[url('\assetsEqualizer\bg-main-tablet.png')] 
       sm:bg-[url('\assetsEqualizer\bg-main-tablet.png')] bg-[url('\assetsEqualizer\bg-main-mobile.png')] 
        w-full xl:h-[120rem] lg:h-[115rem]  md:h-[110rem] bg-no-repeat bg cover pl-5  lg:pl-40 md:pl-10 md:pr-30 sm:pl-20 sm:bg-cover sm:h-[100rem] sm:pr-3  pr-5 "
      >
        <Header />
        <CartSection />
        <Footer />
      </div>
    </main>
  );
};
export default Equalizer;
