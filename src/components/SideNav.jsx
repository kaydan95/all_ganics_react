import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { getBrandList } from "../api/firebase";

function SideNav({ navState, onOpen, navKind }) {
  const onClose = () => {
    onOpen(!navState);
  };

  const navigate = useNavigate();

  const { isLoading, data: brandList } = useQuery(["products"], getBrandList);

  const goProductPage = (categoryId) => {
    navigate(`/products/${categoryId}`, { state: { categoryId } });
  };

  const goBrandPage = (brandCode) => {
    navigate(`/brands/${brandCode}`, { state: { brandCode } });
  };

  return (
    <div
      className={`${
        navState ? "w-72 p-8" : "w-0 p-0"
      } h-full duration-300 bg-main fixed z-50`}
    >
      <MdOutlineCancel
        className={`${
          !navState && "scale-0"
        } text-white text-2xl font-bold cursor-pointer absolute right-8 hover:text-highlight duration-200`}
        onClick={onClose}
      />

      <div
        className={`h-full pt-3 text-white
        [&_li]:text-base [&_li]:my-1 [&_li]:py-1 [&_li]:pl-4
        [&_div]:my-3 [&_div]:flex [&_div]:flex-col [&_div]:p-2
        [&_p]:text-2xl [&_p]:font-bold [&_p]:text-highlight [&_p]:mb-2
        [&_span]:my-1 [&_span]:text-xl [&_span]:font-bold [&_span]:pl-2 [&_span]:py-2 [&_span]:hover:cursor-pointer [&_span]:hover:duration-300
        ${!navState && "[&_li]:scale-0 [&_div]:scale-0"}`}
      >
        {navKind ? (
          <>
            <div>
              <p>Fashion</p>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(10010)}
              >
                의류
              </span>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(10011)}
              >
                잡화
              </span>
            </div>
            <div>
              <p>LifeStyle</p>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(30030)}
              >
                주방
              </span>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(30031)}
              >
                욕실
              </span>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(30032)}
              >
                기타
              </span>
            </div>
            <div>
              <p>Beauty</p>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(40040)}
              >
                헤어
              </span>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(40041)}
              >
                스킨
              </span>
              <span
                className="hover:bg-white hover:rounded hover:text-main"
                onClick={() => goProductPage(40042)}
              >
                바디
              </span>
            </div>
          </>
        ) : (
          <>
            {isLoading
              ? "Loading"
              : brandList.map((brand) => (
                  <li key={brand.id} onClick={() => goBrandPage(brand.brandId)}>
                    {brand.title}
                  </li>
                ))}
          </>
        )}
      </div>
    </div>
  );
}

export default SideNav;
