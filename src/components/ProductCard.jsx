import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  product: { id, title, image, price, brandName, categoryCode, brandCode },
}) {
  const navigate = useNavigate();

  const goBrandPage = (brandCode) => {
    navigate(`/brands/${brandCode}`, { state: { brandCode } });
  };

  const goProductDetail = (productId) => {
    navigate(`/product/${productId}`, { state: { product } });
  };

  return (
    <li
      onClick={() => goProductDetail(id)}
      className="rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col justify-between"
    >
      <img className="w-full h-80" src={image} alt={title} />
      <div className="p-4 flex-col justify-evenly flex flex-1">
        <h3 className="text-xl">{title}</h3>
        <p className=" my-3 text-xl text-right mx-3">{`${price}원`}</p>
        <p
          className="text-lg hover:cursor-pointer"
          onClick={() => goBrandPage(brandCode)}
        >
          {brandName}
        </p>
      </div>
    </li>
  );
}

export default ProductCard;
