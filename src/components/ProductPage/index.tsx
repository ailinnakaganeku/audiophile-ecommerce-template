import { useParams } from "react-router-dom";
import { products } from "../../data/product_page_products";
import NotFound from "../NotFound";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="text-gray-500 mt-2">{product.category}</div>
          <div className="text-lg font-semibold mt-4">
            ${product.price.toFixed(2)}
          </div>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg mt-8 hover:bg-gray-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
