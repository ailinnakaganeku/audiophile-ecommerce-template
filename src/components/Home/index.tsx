import { products } from "../../data/home_products";
import Hero from "../Hero";
import Instagram from "../Instagram";
import ProductCard from "../ProductCard";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 md:px-0 my-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <Instagram />
    </>
  );
};

export default Home;
