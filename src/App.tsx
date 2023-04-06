import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ProductDetail from "./components/ProductDetail";

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
            <Route path="/headphones" element={<ProductDetail productId={1}/>} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
