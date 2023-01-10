import React from "react";

function PriceCard({ text, price }) {
  return (
    <>
      <span className="my-8">
        {text} : {price} 원
      </span>
    </>
  );
}

export default PriceCard;
