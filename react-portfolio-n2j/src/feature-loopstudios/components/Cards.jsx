const Cards = () => {
  return (
    <div className=" 2xl:pl-[calc(10%-1.7rem)] 2xl:pr-[calc(10%-1.7rem)] xl:pl-0 xl:pr-0 mt-36 ml-32 mr-32 ">
      <div>
        <div className="flex justify-between mb-10">
          <div className="font-sans lg:text-5xl lg:font-thin">
            OUR CREATIONS
          </div>
          <button className="lg:mr-2 lg:w-[160px] lg:h-[50px] bg-black text-white">
            SEE ALL
          </button>
        </div>
        <div className="grid lg:grid-cols-4 gap-10 lg:w-[100%]">
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-deep-earth.jpg')] lg:w-[256px]  lg:h-[450px] bg-no-repeat lg:text-3xl text-white lg:relative ">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              DEEP EARTH
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-night-arcade.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              NIGHT ARCAD
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-soccer-team.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              SOCCER TEAM VR
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-grid.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              THE GRID
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-from-above.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              FROM UP ABOVE VR
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-pocket-borealis.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              POCKET BOREALIS
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-curiosity.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              POCKET BOREALIS
            </p>
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-fisheye.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat  lg:text-3xl text-white lg:relative">
            <p className="lg:absolute lg:inset-x-0 lg:bottom-0 p-5 ">
              MAKE IT FISHEYE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
