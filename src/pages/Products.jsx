import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/firebase";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

function Products() {
  const {
    state: { categoryId },
  } = useLocation();

  const { isLoading, data: ProductsByCate } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => getProductsByCategory(categoryId),
  });

  return (
    <div className="h-screen pt-20">
      <Banner title={`shop`} isProduct={true} />
      {isLoading && <p>Good things are coming...</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-14">
        {ProductsByCate &&
          ProductsByCate.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default Products;
