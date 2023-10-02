import React from "react";

type Props = {
  setModalShow?: any;
  item?: any;
};

const ProductModal = ({ setModalShow, item }: Props) => {
  return (
    <div className=" fixed left-0 top-0 z-20 w-full h-full bg-[#2a241e75] flex justify-center items-center">
      <div className=" relative w-full md:w-[400px] lg:w-[800px] bg-[#c8873e] py-[20px]">
        <button
          className=" absolute text-white text-[12px] border-none p-2 bg-slate-500 flex justify-center items-center shadow-xl h-[20px] w-[20px] rounded-full z-20 top-2 right-4"
          onClick={() => setModalShow(false)}
        >
          X
        </button>

        <div className=" flex flex-col gap-2 py-[4px] px-4">
          <div>
            <h2>Name:</h2>
            <p>{item.title}</p>
          </div>
          <div>
            <h2>Description:</h2>
            <p>{item.description}</p>
          </div>
          <div>
            <h2>Price:</h2>
            <p>{item.price}</p>
          </div>
          <div>
            <h2>Price:</h2>
            <p>{item.rating.rate}</p>
          </div>
          <div>
            <h2>In Stock:</h2>
            <p>{item.rating.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

// // ProductModal.tsx
// import React from "react";

// interface ProductModalProps {
//   product: {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     image: string;
//   };
//   onClose: () => void;
//   onAddToCart: () => void;
// }

// const ProductModal: React.FC<ProductModalProps> = ({
//   product,
//   onClose,
//   onAddToCart,
// }) => {
//   return (
//     <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
//       <div className="bg-white w-full max-w-md p-6 rounded-lg">
//         <div className="text-right">
//           <button
//             className="text-gray-700 hover:text-gray-900"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//         <img
//           className="w-full h-64 object-cover mb-4"
//           src={product.image}
//           alt={product.name}
//         />
//         <h2 className="text-xl font-bold mb-2">{product.name}</h2>
//         <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
//         <p className="text-gray-700 mb-4">{product.description}</p>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//           onClick={onAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;
