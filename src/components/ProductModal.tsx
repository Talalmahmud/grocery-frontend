import React from "react";

type Props = {
  setModalShow?: any;
};

const ProductModal = ({ setModalShow }: Props) => {
  return (
    <div className=" fixed left-0 top-0 z-20 w-full h-full bg-slate-400 flex justify-center items-center">
      <button
        className=" absolute text-white text-[25px] z-20 top-4 right-8"
        onClick={() => setModalShow(false)}
      >
        X
      </button>

      <div className=" flex flex-col gap-2 py-[4px] px-4">
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
