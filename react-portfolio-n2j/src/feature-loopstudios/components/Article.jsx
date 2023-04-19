const Article = () => {
  return (
    <div className=" ml-32 flex mr-32 border-2 border-black lg:h-[500px] mb-[300rem]">
      <div className="lg:w-[730px] h-[500px] ">
        <img
          src="/src/feature-loopstudios/images/desktop/image-interactive.jpg"
          alt=""
          srcSet=""
        />
      </div>

      <div className="font-alata pt-20 pl-12   pr-12 text-base  border-2 bg-white border-black lg:w-[550px] lg:h-[320px]">
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
