import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/product/ProductContext";
import Hero from "../Hero";
import ProductCard from "../ProductCard";
import { Product } from "../../shared/types";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { categoryId } = useParams<{ categoryId: string }>();
  const { getProduct, getProductByCategory } = useProductContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = categoryId
          ? await getProductByCategory(categoryId)
          : await getProduct();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [categoryId, getProduct, getProductByCategory]);

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 md:px-0 my-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
