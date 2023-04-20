const Article = () => {
  return (
    <div
      className="2xl:pl-[calc(10%-1.7rem)]
     2xl:pr-[calc(10%-1.7rem)]
      xl:pl-0
       xl:pr-0 
       lg:flex-row
        lg:ml-32 flex
         lg:mr-32
          md:ml-24 
          md:mr-24 
          md:mb-96 
          first-letter
           md:flex-col"
    >
      <div
        className="lg:w-[730px] 
      lg:h-[500px] 
      z-10 "
      >
        <img
          src="/src/feature-loopstudios/images/desktop/image-interactive.jpg"
          alt=""
          srcSet=""
        />
      </div>

      <div
        className="font-alata
       z-20
        lg:ml-[-250px]
         lg:mt-[11.2rem]
          pt-20
           pl-12 
            pr-12 
            lg:text-base
              bg-white
               lg:w-[550px]
                lg:h-[320px] "
      >
        <h1
          className="font-sans 
        uppercase 
        2xl:text-5xl
         lg:text-5xl
          leading-10
           mb-9
            font-thin
             md:text-5xl"
        >
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
