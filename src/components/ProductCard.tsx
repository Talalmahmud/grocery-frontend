"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductModal from "./ProductModal";

type Props = {
  addCart: any;
};

const ProductCard = ({ addCart }: Props) => {
  const [modalShow, setModalshow] = useState(false);
  return (
    <div className=" flex flex-col w-full md:w-[350px] shadow-xl h-[380px] rounded-md bg-slate-100 ">
      <div className=" flex items-center justify-center">
        <Image
          className=" w-full md:w-[350px] h-[200px]"
          height={200}
          width={340}
          src="https://t4.ftcdn.net/jpg/00/75/70/43/240_F_75704331_30OkkirTPtS6wbYcBJffho1mF1xrtcCn.jpg"
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-2 py-[12px] px-4">
        <div>
          <h2>Name:</h2>
          <p></p>
        </div>
        <div>
          <h2>Description:</h2>
          <p></p>
        </div>
        <div>
          <h2>Price:</h2>
          <p></p>
        </div>
      </div>
      <div className=" flex flex-row justify-between items-center px-4 pt-2">
        <button
          className=" px-2 py-1 rounded-md bg-blue-500 text-white text-[16px]"
          onClick={() => setModalshow(true)}
        >
          Details
        </button>
        <button
          className=" px-2 py-1 rounded-md bg-blue-500 text-white text-[16px]"
          onClick={() => addCart("a")}
        >
          Add to cart
        </button>
      </div>
      {modalShow && <ProductModal setModalShow={setModalshow} />}
    </div>
  );
};

export default ProductCard;
