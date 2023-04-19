const Article = () => {
  return (
    <div className=" lg:ml-32 flex lg:mr-32">
      <div className="lg:w-[730px] lg:h-[500px] z-10">
        <img
          src="/src/feature-loopstudios/images/desktop/image-interactive.jpg"
          alt=""
          srcSet=""
        />
      </div>

      <div className="font-alata z-20 lg:ml-[-250px] lg:mt-[11.2rem] pt-20 pl-12  pr-12 lg:text-base  bg-white lg:w-[550px] lg:h-[320px]">
        <h1 className="font-sans uppercase text-5xl leading-10 mb-9 font-thin ">
          The leader in interactive VR
        </h1>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </div>
    </div>
  );
};

export default Article;
