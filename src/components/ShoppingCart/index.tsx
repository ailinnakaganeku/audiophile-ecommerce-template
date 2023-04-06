import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  cartItems: Product[];
};

const ShoppingCart: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="flex items-center relative">
      <Link to="/cart" className="mr-4 text-white hover:text-gray-700 relative">
        <FaShoppingCart size={20} />
        <span className="ml-1 absolute -top-1 -right-1 bg-red-500 text-xs font-medium h-4 w-4 flex items-center justify-center rounded-full">
          {cartItems.length}
        </span>
      </Link>
    </div>
  );
};

export default ShoppingCart;
