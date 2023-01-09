import React from "react";
import background1 from "../../src/data/main_img.png";
import background2 from "../../src/data/main_img2.png";
import background3 from "../../src/data/main_img3.png";

function Home({ navState }) {
  return (
    <div className="h-screen snap-mandatory overflow-auto snap-y">
      <section
        className="bg-cover flex-1 h-screen bg-center snap-center items-center justify-start flex"
        style={{ backgroundImage: `url(${background1})` }}
      >
        <div className=" text-white text-8xl pl-20 font-serif font-extrabold">
          <h1 className="my-8">Welcome,</h1>
          <span>All Here!</span>
          <span className="text-highlight ml-4">All_Gancis.</span>
        </div>
      </section>
      <section
        className="bg-cover flex-1 h-screen bg-center snap-center items-center justify-start flex"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="pl-24">
          <h2 className="text-6xl font-extrabold text-main my-4">
            처음부터 끝까지
          </h2>
          <h2 className="text-6xl font-serif text-highlight font-extrabold pl-10 mb-4">
            ALL_"ZERO"
          </h2>
          <p>
            계속되는 이상 기후와 자연재해가 피부로 느껴지는 요즘, <br /> 매년
            지구가 보내는 목소리에 귀를 기울이는 이들이 많아지고 있습니다.{" "}
            <br />
            그리고 지금 이곳, All_Ganics 는 <br /> 누구보다 한층 더 의미있는
            소비를 만들어가는 여러분과 함께 걷고자 <br /> 공정부터 판매까지 모두
            환경을 생각하는 브랜드만 고집합니다.
          </p>
        </div>
      </section>
      <section
        className="bg-cover flex-1 h-screen bg-center snap-center justify-end flex"
        style={{ backgroundImage: `url(${background3})` }}
      >
        <div className="text-5xl font-extrabold w-2/3 h-screen bg-white/60 flex flex-col justify-center pl-10">
          <h2 className="text-7xl font-serif text-yellow-500 mb-4">
            ALL_"NEW"
          </h2>
          <p className="my-4">전에 없던 형태로 더욱 새롭게!</p>
          <p>#BOXEDWATER #지구를생각한음료</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
