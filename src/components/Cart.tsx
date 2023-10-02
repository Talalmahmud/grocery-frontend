import React, { useEffect, useState } from "react";

type Props = {};

const Cart = (props: Props) => {
  const [cartItem, setCartItem] = useState<any>([]);

  useEffect(() => {
    let storageData = localStorage.getItem("groceryItem");
    if (storageData) {
      setCartItem(JSON.parse(storageData));
    }
  }, []);
  console.log(cartItem);
  return (
    <div className=" absolute top-[48px] bg-slate-900 p-[16px] z-20">
      {Array.isArray(cartItem) &&
        cartItem.length > 0 &&
        cartItem.map((item: string, key: number) => (
          <div key={key}>
            <p className=" text-red-500">{item}</p>
          </div>
        ))}
    </div>
  );
};

export default Cart;
