import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

const cartItems = [
  {
    product: {
      id: 1,
      title: "Product 1",
      description: "Product 1 description",
      price: 10,
      image: "https://source.unsplash.com/random/400x400",
      category: "Category 1",
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      title: "Product 2",
      description: "Product 2 description",
      price: 15,
      image: "https://source.unsplash.com/random/400x400",
      category: "Category 2",
    },
    quantity: 1,
  },
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route
              path="/headphones"
              element={<ProductDetail productId={1} />}
            />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
