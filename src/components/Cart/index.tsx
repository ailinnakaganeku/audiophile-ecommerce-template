import { useEffect, useState } from "react";
import { CartItem } from "../../shared/types";

const Cart = ({ cartItems }: { cartItems: CartItem[] }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, item) => {
      return accumulator + item.product.price * item.qty;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
              <div className="px-4 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Shopping Cart
                </h2>
              </div>

              <div className="mt-6 flex-1 px-4 sm:px-6">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between items-center border-b border-gray-200 py-4"
                  >
                    <div className="flex items-center">
                      <img
                        className="h-10 w-10 object-contain mr-4"
                        src={item.product.image}
                        alt={item.product.title}
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {item.product.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.qty} x ${item.product.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm text-gray-500">
                        ${(item.product.price * item.qty).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="text-sm font-medium text-gray-900 py-4">
                    Your cart is empty
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <div>Subtotal</div>
                  <div>${totalPrice.toFixed(2)}</div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout
                </div>
                <div className="mt-6">
                  <a
                    href="/"
                    className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
