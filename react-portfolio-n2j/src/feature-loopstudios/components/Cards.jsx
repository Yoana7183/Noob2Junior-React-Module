const Cards = () => {
  const paragraphCardsStyle = `lg:absolute text-base  sm:text-3xl lg:inset-x-0 lg:bottom-0  p-5 md:text-4xl md:font-thin md:w-[30%]`;
  return (
    <div
      className=" 
      mr-10
      ml-10
      2xl:pl-[calc(10%-1.7rem)]
     2xl:pr-[calc(10%-1.7rem)]
      xl:pl-0
       xl:pr-0
        mt-36
         lg:ml-32
          lg:mr-32 
          md:ml-20
          md:mr-20
          sm:ml-10
          sm:mr-10"
    >
      <div>
        <div className="flex justify-between mb-10">
          <div
            className="font-sans text-xl 
            lg:text-4xl
           lg:font-thin
           md:text-3xl
           sm:text-2xl"
          >
            OUR CREATIONS
          </div>
          <button
            className="
            bg-black text-white
            hidden
            2xl:inline
            2xl:mr-12 
            xl:inline
            lg:inline
            lg:mr-2
            lg:w-[160px]
            lg:h-[50px]
           md:hidden
           sm:hidden"
          >
            SEE ALL
          </button>
        </div>
        <div
          className="grid gap-5
         
           lg:grid-cols-4 
           lg:gap-10
          lg:w-[100%] 
          md:grid-cols-1
          md:gap-7
          sm:gap-6
          "
        >
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-deep-earth.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-deep-earth.jpg')]
            
            bg-cover
           lg:w-[256px] 
            lg:h-[450px]
             bg-no-repeat
              lg:text-3xl
               text-white 
               lg:relative 
               md:w-[100%]
               md:h-[250px]
               "
          >
            <p className={paragraphCardsStyle}>DEEP EARTH</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-night-arcade.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-night-arcade.jpg')]
            bg-cover
           lg:w-[256px]
            lg:h-[450px]
             bg-no-repeat 
              lg:text-3xl text-white
               lg:relative
               md:w-[100%]
               md:h-[250px]"
          >
            <p className={paragraphCardsStyle}>NIGHT ARCADE</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-soccer-team.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-soccer-team.jpg')]
        bg-cover
           lg:w-[256px]
            lg:h-[450px]
             bg-no-repeat
               lg:text-3xl
                text-white
                 lg:relative
                 md:w-[100%]
               md:h-[250px]
               "
          >
            <p className={paragraphCardsStyle}>SOCCER TEAM VR</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-grid.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-grid.jpg')]
            bg-cover
            lg:h-[450px]
            bg-no-repeat
              lg:text-3xl
               text-white
                lg:relative
                md:w-[100%]
               md:h-[250px]"
          >
            <p className={paragraphCardsStyle}>THE GRID</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-from-above.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-from-above.jpg')]
            bg-cover
           lg:w-[256px]
            lg:h-[450px]
             bg-no-repeat 
              lg:text-3xl
               text-white
                lg:relative
                md:w-[100%]
               md:h-[250px]"
          >
            <p className={paragraphCardsStyle}>FROM UP ABOVE VR</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-pocket-borealis.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-pocket-borealis.jpg')]
            bg-cover
           lg:w-[256px]
            lg:h-[450px]
             bg-no-repeat 
              lg:text-3xl
               text-white
                lg:relative
                md:w-[100%]
               md:h-[250px]"
          >
            <p className={paragraphCardsStyle}>POCKET BOREALIS</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-curiosity.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-curiosity.jpg')]
            bg-cover
          lg:w-[256px]
           lg:h-[450px]
            bg-no-repeat 
             lg:text-3xl
              text-white 
              lg:relative
              md:w-[100%]
               md:h-[250px]"
          >
            <p className={paragraphCardsStyle}>THE CURIOSITY</p>
          </div>
          <div
            className="
            h-[7.5rem]
            sm:h-[11rem]
            bg-[url('/src/feature-loopstudios/images/mobile/image-fisheye.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-fisheye.jpg')]
            
            lg:h-[450px]
             bg-no-repeat
               lg:text-3xl
                text-white
                 lg:relative
                 md:w-[100%]
               md:h-[250px]"
          >
            <p className={paragraphCardsStyle}>MAKE IT FISHEYE</p>
          </div>
        </div>
      </div>
      <button
        className="
        ml-[25%]
        mr-[25%]
        mt-12
        w-[10rem]
        h-[3rem]
      2xl:hidden
       xl:hidden
       hover:bg-black
       hover:text-white
        lg:hidden
         md:inline
         md:w-[200px]
         md:h-[50px]
    
         border border-black
          sm:inline
          sm:w-[12rem]
          sm:h-[3.5rem]
          sm:ml-[35%]
         
           
           "
      >
        SEE ALL
      </button>
    </div>
  );
};
export default Cards;
