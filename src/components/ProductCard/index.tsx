import { Link } from "react-router-dom";

type ProductCardProps = {
  image: string;
  name: string;
  category: string;
  price: number;
  slug: string;
};

const ProductCard = ({
  image,
  name,
  category,
  price,
  slug,
}: ProductCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={`/product/${slug}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover transition duration-500 ease-in-out transform hover:scale-110"
        />
      </Link>
      <div className="p-4">
        <Link
          to={`/product/${slug}`}
          className="text-lg font-semibold hover:text-gray-400"
        >
          {name}
        </Link>
        <div className="text-gray-500 mt-2">{category}</div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
