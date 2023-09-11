import React from 'react';
import { Link } from 'react-router-dom';
import ProductCollectionContainer from '../components/ProductCollectionContainer';
import Store from '../Store';

function Collections() {
  return (
    <section className="py-6 mt-[-17rem] px-4 lg:px-0  h-max ">
      <h1 className="text-2xl font-bold mb-4">The Products Page</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
        {Store.map((prod) => (
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

export default Collections;
