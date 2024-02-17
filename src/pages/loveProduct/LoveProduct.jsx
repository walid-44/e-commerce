import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../trk/slises/loveProduct";
import { useNavigate } from "react-router-dom";
import "./loveProduct.css";
import ProductCart from "../../components/productcart/ProductCart";

const LoveProduct = () => {
  const productLove = useSelector((state) => state.love.data);
  console.log(productLove);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Row>
      {productLove.length === 0 ? (
        <div>
          <p className="impty-list">
            NO Products Is List{" "}
            <Button variant="success" size="sm" onClick={() => navigate("/products")}>
              You Can Shoping Now{" "}
            </Button>{" "}
          </p>
        </div>
      ) : (
        <>
          <div>
            <Button
              className="my-4"
              variant="danger"
              size="sm"
              onClick={() => dispatch(clear())}
            >
              Clear All Products
            </Button>
          </div>
          {productLove.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </>
      )}
    </Row>
  );
};

export default LoveProduct;
