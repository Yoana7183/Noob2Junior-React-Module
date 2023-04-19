const Cards = () => {
  return (
    <div className="mt-36 ml-32 mr-32">
      <div>
        <div className="flex justify-between mb-10">
          <div className=" justify-start">OUR CREATIONS</div>
          <div className=" justify-end">
            <button>SEE ALL</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-10 lg:w-[1200px]">
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-deep-earth.jpg')] lg:w-[256px]  lg:h-[450px] bg-no-repeat ">
            DEEP EARTH
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-night-arcade.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            NIGHT ARCAD
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-soccer-team.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            SOCCER TEAM VR
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-grid.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            THE GRID
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-from-above.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            FROM UP ABOVE VR
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-pocket-borealis.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            POCKET BOREALIS
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-curiosity.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            THE CURIOSITY
          </div>
          <div className="lg:bg-[url('/src/feature-loopstudios/images/desktop/image-fisheye.jpg')] lg:w-[256px] lg:h-[450px] bg-no-repeat">
            MAKE IT FISHEYE
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
