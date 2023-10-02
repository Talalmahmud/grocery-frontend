import React, { useEffect, useState } from "react";

type Props = {
  setShowCart?: any;
};

const Cart = ({ setShowCart }: Props) => {
  const [cartItem, setCartItem] = useState<any>([]);

  useEffect(() => {
    let storageData = localStorage.getItem("groceryItem");
    if (storageData) {
      setCartItem(JSON.parse(storageData));
    }
  }, []);
  console.log(cartItem);
  return (
    <div className=" relative md:fixed top-0 md:top-[70px] right-0 md:right-[65px]  w-full h-full md:h-[500px] overflow-auto md:w-[400px] bg-white rounded-lg shadow-lg py-[60px] xl:py-[30px]  z-20">
      <button
        className=" absolute block md:hidden bg-slate-500 px-2 py-1 top-1 right-2 rounded-md"
        onClick={() => setShowCart(false)}
      >
        close
      </button>
      <div className="flex flex-col gap-2">
        {cartItem.map((item: any, key: number) => (
          <div
            key={key}
            className="text-black font-bold justify-between bg-orange-500 flex items-center hover:shadow-2xl h-[40px] px-[16px] w-full"
          >
            <p>
              {key + 1}.{item.title.slice(0, 10)}
            </p>
            <p>Total:{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
