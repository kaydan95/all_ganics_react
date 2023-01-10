import React from "react";
import { useLocation } from "react-router-dom";
import { addOrUpdateCart } from "../api/firebase";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";

function ProductDetail() {
  const { uid } = useAuthContext();

  const {
    state: {
      product: { id, image, title, price, brandName },
    },
  } = useLocation();

  const handleCart = (e) => {
    const product = {
      id,
      image,
      title,
      price,
      brandName,
      quantity: 1,
    };

    if (!product) {
      alert("장바구니 추가에 실패하였습니다.");
    } else {
      addOrUpdateCart(uid, product);
      alert("장바구니 추가");
    }
  };

  return (
    <>
      <section className="pt-28 h-screen flex p-20 items-center justify-center">
        <img className="mx-10 w-1/3 h-auto" src={image} alt={title} />
        <div
          className="h-full w-1/2
        [&_table]:w-full [&_table]:text-left"
        >
          <div className=" border-b-gray-700 border-b p-2">
            <p className="text-gray-400 font-bold text-lg">{brandName}</p>
            <p className="my-2 text-main font-bold text-xl">{title}</p>
          </div>
          <div
            className="p-4
          [&_span]:text-lg [&_span]:mr-10 [&_span]:font-semibold"
          >
            <table className="h-40">
              <tbody className="[&_th]:w-36">
                <tr>
                  <th>
                    <span>판매가</span>
                  </th>
                  <td className="line-through">{`${price}원`}</td>
                </tr>
                <tr>
                  <th>
                    <span>할인가</span>
                  </th>
                  <td className="text-xl text-red-800 font-bold">{`${price}원`}</td>
                </tr>
                <tr>
                  <th>
                    <span>수량</span>
                  </th>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-b border-b-gray-700 p-4">
            <span className="text-xl font-bold text-main">배송정보</span>
            <table className="h-32">
              <tbody className="[&_th]:w-32 [&_tr]:h-18">
                <tr>
                  <th>
                    <span>배송비</span>
                  </th>
                  <td className="text-base font-medium tracking-tight">
                    <span>
                      해당 브랜드 제품으로만 3만원 이상 구매시 무료배송 (미만시
                      배송비 2,500원) <br />
                    </span>
                    <p className="tracking-tight">
                      제주도를 포함한 도서/산간 지역 추가 배송비 없음
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>배송예정</span>
                  </th>
                  <td>이틀 이내 도착예정 96%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Button onClick={handleCart} text="add cart" />
            <Button text="order" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
