import { useParams, Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import InformationContainer from '../components/InformationContainer';
function ProductDetailPage() {
  const params = useParams();

  return (
    <section className="">
      <Link to=".." relative="path">
        Back
      </Link>

      <div className="w-[1015px] h-[565px] md:flex md:justify-between sm:flex-col sm:gap-0 gap-44 md:flex-row sm:pt-[16rem]">
        <Gallery id={params.productId} />
        <div className="sm:pl-0 pl-9 ">
          <InformationContainer />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
