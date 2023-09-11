import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import InformationContainer from '../components/InformationContainer';
function ProductDetailPage() {
  const params = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <section>
      <div className=" flex flex-row ">
        <div className="w-[1015px] h-[565px] md:flex md:justify-between sm:flex-col sm:gap-0 gap-44 md:flex-row sm:pt-[16rem]">
          <Gallery id={params.productId} />
          <div className="sm:pl-0 pl-9 ">
            <InformationContainer id={params.productId} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
