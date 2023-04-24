const Article = () => {
  return (
    <div
      className="
      flex-col 
      ml-[10%]
      mr-[10%]
      2xl:pl-[calc(10%-1.7rem)]
      2xl:pr-[calc(10%-1.7rem)]
      xl:pl-0
       xl:pr-0 
       lg:flex-row
        lg:ml-32 flex
         lg:mr-32
          md:ml-[10%] 
          md:mr-[10%] 
          md:mb-36 
          first-letter
           md:flex-col
           sm:flex-col
           sm:ml-[10%]
           sm:mr-[10%]
           sm:mb-[20]"
    >
      <div
        className="lg:w-[730px] md:w-[650px] md:h-
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
        text-zinc-500
        text-sm
        text-center
       z-20
        lg:ml-[-250px]
         lg:mt-[11.2rem]
         
          pt-20
           lg:pl-12 
            lg:pr-12 
            md:mr-15
            lg:text-base
              bg-white
               lg:w-[550px]
                lg:h-[320px]
                md:justify-center
                md:text-center 
                md:text-base
                sm:text-base"
      >
        <h1
          className="font-sans 
          text-zinc-800
          p-0
          text-center
        uppercase 
        text-2xl
        2xl:text-5xl
         lg:text-5xl
          leading-10
           mb-4
            font-thin
             md:text-5xl
             sm:text-4xl"
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
