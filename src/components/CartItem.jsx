import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";

function CartItem({
  product,
  product: { id, image, title, brandName, quantity, price },
}) {
  return (
    <div className="flex flex-row items-center justify-between p-4 border-b-gray-300 border-b">
      <img src={image} alt="상품 이미지" className=" w-40 h-40" />
      <div className="p-4 flex-1">
        <p>[ {brandName} ]</p>
        <p>{title}</p>
      </div>
      <div className="flex flex-row   items-center justify-center text-2xl p-10">
        <AiOutlineMinusSquare />
        <span className="mx-4">{quantity}</span>
        <AiOutlinePlusSquare />
      </div>
      <div className="text-center p-10">{price}</div>
      <RiDeleteBin5Fill className="text-2xl" />
    </div>
  );
}

export default CartItem;
