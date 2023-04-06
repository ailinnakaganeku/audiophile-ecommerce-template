import { useEffect, useState } from "react";
import { getProduct } from "../api/products";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const ProductDetail = ({ productId }: { productId: number }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getProduct(productId);
        setProduct(result);
      } catch (error) {
        console.log("Failed to fetch product details:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="bg-white rounded-lg mb-4 w-full"
          aria-label="breadcrumb"
        >
          <ol className="list-none p-2 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-gray-400 hover:text-gray-600">
                Home
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-2 text-gray-300 transform rotate-[270deg]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 7.707a1 1 0 00-1.414 0L10 11.586 6.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="/" className="text-gray-400 hover:text-gray-600">
                {product.category}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-2 text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 7.707a1 1 0 00-1.414 0L10 11.586 6.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <p className="text-gray-500">{product.title}</p>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-shrink-0 animate-fadeIn mb-4 lg:mb-0 lg:w-1/2">
            <img
              className="w-full h-96 object-contain rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="mt-2 text-gray-900 text-lg font-bold">
              ${product.price.toFixed(2)}
            </div>
            <div className="flex flex-row items-center mt-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                max="10"
                className="w-16 px-2 py-1 border rounded"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>

            <button className="mt-4 py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Add {quantity} to cart
            </button>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="text-gray-500">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
