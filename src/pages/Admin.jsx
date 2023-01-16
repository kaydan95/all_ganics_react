import React, { useState } from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";

function Admin() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url).then(() => alert("제품 등록 성공"));
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="pt-20 h-screen flex px-10">
      <div className="flex-1 items-center justify-center flex-col flex">
        <span className="m-4 text-lg font-semibold">상품 대표 이미지</span>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="local file"
            className="w-96 h-auto"
          />
        )}
      </div>
      <form className="flex-1 flex flex-col p-5" onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="categoryName"
          value={product.categoryName ?? ""}
          placeholder="카테고리명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="categoryCode"
          value={product.categoryCode ?? ""}
          placeholder="카테고리코드"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="brandName"
          value={product.brandName ?? ""}
          placeholder="브랜드명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="brandCode"
          value={product.brandCode ?? ""}
          placeholder="브랜드코드"
          required
          onChange={handleChange}
        />
        <button
          disabled={isUploading}
          className="font-bold border border-gray-500 w-fit mx-auto rounded p-3 mt-2 hover:bg-main hover:text-white duration-200"
        >
          {isUploading ? "업로드 중..." : "제품등록하기"}
        </button>
      </form>
    </section>
  );
}

export default Admin;
