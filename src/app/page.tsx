"use client";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<{}[]>([]);
  const [itemList, setItemList] = useState([]);
  const [filterList, setFilterList] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const addCart = (item: any) => {
    setCart((current) => {
      const existingItem = current.find(
        (cartItem: any) => cartItem.id === item.id
      );

      if (existingItem) {
        // If item already exists in the cart, increase the count
        return cart.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist in the cart, add it with count 1
        return [...current, { ...item, count: 1 }];
      }
    });
  };
  useEffect(() => {
    let c = JSON.stringify(cart);
    localStorage.setItem("groceryItem", c);
  }, [cart]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(function (response) {
      setItemList(response.data);
      setFilterList(response.data);
    });
  }, []);

  useEffect(() => {
    let filterItems = itemList.filter((item: any) => {
      const countryName = item.title.toLowerCase();
      return countryName.startsWith(searchInput);
    });
    setFilterList(filterItems);
  }, [searchInput]);
  return (
    <main className=" h-full bg-slate-300">
      <Navbar
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
        toggleMenu={toggleMenu}
        isOpen={isOpen}
      />
      <div className="flex px-2 py-[8px] md:px-20 items-center gap-x-2">
        <label className=" text-[24px]">Search:</label>
        <input
          placeholder="Search your item"
          type="text"
          value={searchInput || ""}
          onChange={(e) => setSearchInput(e.target.value)}
          autoFocus
          className=" text-[18px] py-[2px] px-[4px] w-full md:w-[400px] rounded-md outline-none border-none"
        />
      </div>

      <div className=" py-4 flex flex-wrap md:gap-2 justify-center items-center lg:gap-2 xl:gap-8 w-full">
        {" "}
        {filterList ? (
          filterList.map((item: any, index: number) => (
            <ProductCard item={item} addCart={addCart} />
          ))
        ) : (
          <p className=" text-red-500">Loading...</p>
        )}
      </div>
      {showCart && (
        <div className=" block h-full w-full md:hidden absolute z-50 left-0 top-0">
          <Cart setShowCart={setShowCart} />
        </div>
      )}
    </main>
  );
}
