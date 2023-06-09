const Cards = () => {
  const cardStyle = `bg-cover hover:bg-white hover:opacity-50 cursor-pointer fonr-thin lg:h-[450px] bg-no-repeat lg:text-2xl text-white lg:relative md:w-[100%] md:h-[250px] h-[7.5rem] m:h-[11rem]
      `;
  const paragraphCardsStyle = `  hover:text-black  text-white font-light font-sans lg:absolute  text-xl w-[20%] font-light sm:text-3xl lg:inset-x-0 lg:bottom-0  p-5 md:text-4xl md:font-thin md:w-[30%]`;
  return (
    <section
      className=" 
      mr-10 ml-10 2xl:pl-[calc(10%-1.7rem)] 2xl:pr-[calc(10%-1.7rem)] xl:pl-0 xl:pr-0 mt-36 lg:ml-32 lg:mr-32 md:ml-20 md:mr-20 sm:ml-10 sm:mr-10"
    >
      <div className="">
        <div className="flex mb-10 justify-between">
          <header className="font-sans text-xl lg:text-4xl font-thin md:text-3xl sm:text-2xl">
            OUR CREATIONS
          </header>
          <button
            className="
            font-sans font-thin bg-white text-black border border-black hover:bg-black hover:text-white hidden 2xl:inline 
            xl:inline lg:inline lg:w-[160px] lg:h-[50px] md:hidden sm:hidden"
          >
            SEE ALL
          </button>
        </div>
        <div className=" 2xl:gap-20 grid gap-5 lg:grid-cols-4 lg:gap-10 lg:w-[100%] md:grid-cols-1 md:gap-7 sm:gap-6">
          <figure
            className={` ${cardStyle}
            bg-[url('/src/feature-loopstudios/images/mobile/image-deep-earth.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-deep-earth.jpg')]`}
          >
            <figcaption className={paragraphCardsStyle}>DEEP EARTH</figcaption>
          </figure>

          <figure
            className={`${cardStyle}
            bg-[url('/src/feature-loopstudios/images/mobile/image-night-arcade.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-night-arcade.jpg')]
            `}
          >
            <figcaption className={paragraphCardsStyle}>
              NIGHT ARCADE
            </figcaption>
          </figure>
          <figure
            className={`${cardStyle}  bg-[url('/src/feature-loopstudios/images/mobile/image-soccer-team.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-soccer-team.jpg')]`}
          >
            <figcaption className={paragraphCardsStyle}>
              SOCCER TEAM VR
            </figcaption>
          </figure>
          <figure
            className={`${cardStyle}     
            bg-[url('/src/feature-loopstudios/images/mobile/image-grid.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-grid.jpg')]`}
          >
            <figcaption className={paragraphCardsStyle}>THE GRID</figcaption>
          </figure>
          <figure
            className={`${cardStyle} 
            bg-[url('/src/feature-loopstudios/images/mobile/image-from-above.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-from-above.jpg')]`}
          >
            <figcaption className={` mt-[-1rem]${paragraphCardsStyle}`}>
              FROM UP ABOVE VR
            </figcaption>
          </figure>
          <figure
            className={`${cardStyle}     
            bg-[url('/src/feature-loopstudios/images/mobile/image-pocket-borealis.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-pocket-borealis.jpg')]`}
          >
            <figcaption className={paragraphCardsStyle}>
              POCKET BOREALIS
            </figcaption>
          </figure>
          <figure
            className={`${cardStyle} 
            bg-[url('/src/feature-loopstudios/images/mobile/image-curiosity.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-curiosity.jpg')]`}
          >
            <figcaption className={paragraphCardsStyle}>
              THE CURIOSITY
            </figcaption>
          </figure>
          <figure
            className={`${cardStyle} 
            bg-[url('/src/feature-loopstudios/images/mobile/image-fisheye.jpg')]
            lg:bg-[url('/src/feature-loopstudios/images/desktop/image-fisheye.jpg')]`}
          >
            <figcaption className={paragraphCardsStyle}>
              MAKE IT FISHEYE
            </figcaption>
          </figure>
        </div>
      </div>
      <button
        className="font-sans font-light ml-[25%] mr-[25%] mt-12 w-[10rem] h-[3rem] 2xl:hidden xl:hidden hover:bg-black
       hover:text-white lg:hidden md:inline md:w-[200px] md:h-[50px] border border-black sm:inline sm:w-[12rem] sm:h-[3.5rem] sm:ml-[35%] "
      >
        SEE ALL
      </button>
    </section>
  );
};
export default Cards;
