import React from 'react';
import { Link } from 'react-router-dom';
import ProductCollectionContainer from '../components/ProductCollectionContainer';
import Store from '../store';

function WomanCollection() {
  const manProducts = Store.filter((prod) => prod.category === 'woman');

  return (
    <section className="py-6 px-4 lg:px-0  mt-[-15rem]">
      <h1 className="text-2xl font-bold mb-4">Menчs Products</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {manProducts.map((prod) => (
          <li key={prod.id} className="border rounded overflow-hidden">
            <Link to={`/e-commerce/Collections/${prod.id}`}>
              <ProductCollectionContainer product={prod} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WomanCollection;
