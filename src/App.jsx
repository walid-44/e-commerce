import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import Preview from "./components/preview/Preview";
import Details from "./pages/details/Details";
import LoveProduct from "./pages/loveProduct/LoveProduct";
import Aside from "./components/backet/ProductBacket";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";
import Singin from "./auth/Singup";
import Login from "./auth/Login";
import Reset from "./auth/Reset";
import ShowState from "./components/show/ShowState";


function App() {
  return (
    <>
      <Header />
    <Aside />
      <Container className="pt-2">
      <Preview />
      <ShowState />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loveProduct" element={<LoveProduct />} />
          <Route path="/sing-up" element={<Singin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element="Erorr" />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
