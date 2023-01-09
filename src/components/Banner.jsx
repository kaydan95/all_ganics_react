import React from "react";

function Banner({ title, isProduct }) {
  return (
    <section className="h-96 mx-16">
      <div
        className={`${
          isProduct ? "bg-productBanner" : "bg-brandBanner"
        } w-full h-full bg-cover bg-center bg-productBanner`}
      >
        <h2 className="text-8xl w-full h-full text-right pr-44 pt-36 text-main">
          {title}
        </h2>
      </div>
    </section>
  );
}

export default Banner;
