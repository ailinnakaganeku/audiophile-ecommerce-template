import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../context/cart/CartContext";

const ShoppingCart = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center relative">
      <Link to="/cart" className="mr-4 text-white relative">
        <FaShoppingCart size={20} />
        <span className="ml-1 absolute -top-1 -right-1 bg-red-500 text-xs font-medium h-4 w-4 flex items-center justify-center rounded-full">
          {getQuantity()}
        </span>
      </Link>
    </div>
  );
};

export default ShoppingCart;
