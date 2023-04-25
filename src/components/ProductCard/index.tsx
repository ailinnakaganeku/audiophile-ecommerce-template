import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import { Product } from "../../shared/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);
 

  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover transition duration-500 ease-in-out transform hover:scale-110"
        />
      </Link>
      <div className="p-4">
        <Link
          to={`/product/${product.id}`}
          className="text-lg font-semibold hover:text-gray-400"
        >
          {product.title}
        </Link>
        <div className="text-gray-500 mt-2">{product.category}</div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="px-4 py-2  text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
