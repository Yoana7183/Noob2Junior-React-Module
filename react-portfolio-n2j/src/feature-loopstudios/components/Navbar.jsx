const Navbar = () => {
  return (
    <div
      className=" text-white
      2xl:flex-row
      xl:Flex-row
      lg:flex-row
     lg:flex leading-7
      flex justify-end 
      pr-32
      md:flex-col"
    >
      <a
        className="mr-5
         font-alata
          text-base 
          hover:border-b-[1px]
           border-white"
        href="http://"
      >
        About
      </a>
      <a
        className="mr-5
         font-alata
          text-base hover:border-b-[1px] border-white "
        href="http://"
      >
        Careers
      </a>
      <a
        className="mr-5 font-alata text-base hover:border-b-[1px] border-white"
        href="http://"
      >
        LinkedIn
      </a>
      <a
        className="mr-5 font-alata text-base hover:border-b-[1px] border-white"
        href="http://"
      >
        Events
      </a>
      <a
        className="mr-5 font-alata text-base hover:border-b-[1px] border-white"
        href="http://"
      >
        Products
      </a>
      <a
        className="mr-5 font-alata text-base hover:border-b-[1px] border-white "
        href="http://"
      >
        Support
      </a>
    </div>
  );
};

export default Navbar;
