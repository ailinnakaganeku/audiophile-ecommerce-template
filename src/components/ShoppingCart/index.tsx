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
  handleRemoveFromCart: (id: number) => void;
};

const ShoppingCart: React.FC<Props> = ({ cartItems, handleRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex items-center relative">
      <div className="text-gray-500 text-xs mr-2">
        {cartItems.length} item{cartItems.length !== 1 && "s"}
      </div>
      <Link
        to="/cart"
        className="mr-4 text-gray-500 hover:text-gray-700 relative"
      >
        <FaShoppingCart size={20} />
        <span className="ml-1 absolute -top-1 -right-1 bg-yellow-300 text-xs font-medium h-4 w-4 flex items-center justify-center rounded-full">
          {cartItems.length}
        </span>
      </Link>
      <div className="absolute top-full right-0 bg-white w-72 shadow-lg p-4 rounded-md z-50">
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="py-2 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 mr-2 rounded-lg"
                  />
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-gray-500">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
                <button
                  className="text-gray-500 hover:text-red-500 text-sm"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div className="py-2 flex justify-between">
            <div className="text-sm font-medium">Total:</div>
            <div className="text-gray-500">${totalPrice.toFixed(2)}</div>
          </div>
          <div className="flex justify-end">
            <Link
              to="/cart"
              className="bg-yellow-300 text-gray-700 py-2 px-4 rounded-full hover:bg-yellow-400"
            >
              View cart
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default ShoppingCart;
