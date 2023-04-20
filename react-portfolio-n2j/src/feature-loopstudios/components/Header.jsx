import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="2xl:pl-[calc(10%-1.7rem)] 2xl:pr-[calc(10%-1.7rem)] xl:pl-0 xl:pr-0  lg:bg-[url('/src/feature-loopstudios/images/desktop/image-hero.jpg')] lg:w-[100%] lg:bg-cover lg:h-[650px] mb-[10rem] ">
      <div className="flex justify-between pt-10">
        <div className="pl-32 font-alata text-white w-[190px] text-4xl ">
          loopstudios
        </div>
        <Navbar />
      </div>
      <div className="border border-white  text-white lg:w-[600px] lg:h-[300px] lg:ml-32 lg:text-7xl lg:mt-32 lg:p-10">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </div>
    </div>
  );
};

export default Header;
