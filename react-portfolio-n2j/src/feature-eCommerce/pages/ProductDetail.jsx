import { useParams, Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import InformationContainer from '../components/InformationContainer';
function ProductDetailPage() {
  const params = useParams();

  return (
    <section className="">
      <Link to=".." relative="path">
        <div className="flex">
          <img
            src="\assetsECommerce\icons8-back-30.png"
            className="w-6 h-6"
            alt="back"
            srcSet=""
          />
          <p className="text-xs mt-1"> Back</p>
        </div>
      </Link>

      <div className="w-[1015px] h-[565px] md:flex md:justify-between sm:flex-col sm:gap-0 gap-44 md:flex-row sm:pt-[16rem]">
        <Gallery id={params.productId} />
        <div className="sm:pl-0 pl-9 ">
          <InformationContainer id={params.productId} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
