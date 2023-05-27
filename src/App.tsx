import { useContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/HomePage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CartContext from "./context/cart/CartContext";

const LazyProductDetail = lazy(() => import("./components/ProductDetail"));
const LazyCart = lazy(() => import("./components/Cart"));

const App = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Home />} />
          {/* ToDo Route Product Detail */}
          <Route
            path="/product/:id" 
            element={<LazyProductDetail/>}
          />
          <Route path="/cart" element={<LazyCart cartItems={cartItems} />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
