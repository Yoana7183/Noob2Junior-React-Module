import React, { useContext } from 'react';
import { CartContext, QuantityContext } from '../EcommerceShop';

const Header = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { quantity } = useContext(QuantityContext);
  const LinksStyle = `px-3.5 border-b-4 border-transparent  rounded-sm pb-10 hover:border-ecommerceOrangeColor ">`;

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex justify-between border-b-[1px] border-[#E4E9F2]  ">
      <div className="flex">
        <div className="w-[200px] pr-20">
          <img src="src\feature-eCommerce\images\logo.svg" alt="" srcSet="" />
        </div>

        <div className={LinksStyle}>Collections</div>
        <div className={LinksStyle}>Men</div>
        <div className={LinksStyle}>Woman</div>
        <div className={LinksStyle}>About</div>
        <div className={LinksStyle}>Contact</div>
      </div>
      <div className="flex justify-center">
        <div
          className=" cursor-pointer w-[22px] pt-5"
          id="cart"
          onClick={handleClick}
        >
          <div className="w-[20px] h-[15px] bg-ecommerceOrangeColor text-white text-xs flex justify-center font-black rounded-xl">
            {quantity}
          </div>
          <img
            className="mt-[-0.2rem] ml-[-0.5rem]"
            src="src\feature-eCommerce\images\icon-cart.svg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="pl-5 w-[70px] ">
          <img
            src="src\feature-eCommerce\images\image-avatar.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
