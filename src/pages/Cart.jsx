import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";

const SHIPPING = 2500;

function Cart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>your Cart is loading...</p>;

  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="h-screen py-24 px-14">
      <p className="text-3xl font-bold text-main">My Cart</p>
      {hasProducts ? (
        <div className="flex">
          <ul className=" border-t-main border-t-2 mt-2 grid grid-rows-1 md:grid-rows-3 lg:grid-rows-4 gap-2 pt-6 w-2/3">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex flex-1 flex-col items-center text-2xl w-2/4 ml-10 border-main border-2 h-fit pb-4 sticky top-2">
            <PriceCard text="총 주문 금액" price={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text="총 배송 금액" price={SHIPPING} />
            <FaEquals />
            <PriceCard text="최종 주문 금액" price={totalPrice + SHIPPING} />
            <Button text="order" />
          </div>
        </div>
      ) : (
        <p>cart is empty</p>
      )}
    </section>
  );
}

export default Cart;
