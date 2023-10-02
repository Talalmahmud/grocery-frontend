"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductModal from "./ProductModal";

type Props = {
  item?: any;
  addCart?: any;
};

const ProductCard = ({ item, addCart }: Props) => {
  const [modalShow, setModalshow] = useState(false);
  return (
    <div className=" flex flex-col w-full md:w-[350px] shadow-xl h-[380px] rounded-md bg-slate-100 ">
      <div className=" flex items-center justify-center ">
        <Image
          className=" w-full md:w-[350px] h-[200px] rounded-tl-md rounded-tr-md"
          height={200}
          width={340}
          src={item.image}
          alt=""
        />
      </div>
      <div className=" flex flex-col gap-2 py-[12px] px-4">
        <div>
          <h2>Name: {item.title.slice(0, 25)}...</h2>
          <p></p>
        </div>
        <div>
          <h2>Description: {item.description.slice(0, 25)}</h2>
          <p></p>
        </div>
        <div>
          <h2>Price: ${item.price}</h2>
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
          onClick={() => addCart(item)}
        >
          Add to cart
        </button>
      </div>
      {modalShow && <ProductModal setModalShow={setModalshow} item={item} />}
    </div>
  );
};

export default ProductCard;
