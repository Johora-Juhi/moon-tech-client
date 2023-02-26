import React from "react";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../context/ProductProvider";

const Home = () => {
  const {
    state: { loading, products, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p className="text-center">Loading</p>;
  }

  if (error) {
    content = <p className="text-center">Something went wrong</p>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product}></ProductCard>
    ));
  }

  if (!loading && !error && products.length === 0) {
    content = <p className="text-center">There is no product to display</p>;
  }

  // console.log(state);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
