import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { getProductsByBrand } from "../api/firebase";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

function Brand() {
  const {
    state: { brandCode },
  } = useLocation();

  const { isLoading, data: productsByBrand } = useQuery({
    queryKey: ["products", brandCode],
    queryFn: () => getProductsByBrand(brandCode),
  });

  return (
    <div className="h-screen pt-20">
      <Banner title={`Brand`} isProduct={false} />
      {isLoading && <p>Good things are coming...</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-14">
        {productsByBrand &&
          productsByBrand.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default Brand;
