import { Link, useLocation } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../trk/slises/cartSlice";
import Logo from "../logo/Logo";
import { IoPersonCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { setActiveUser, setRemoveUser } from "../../trk/slises/auth";
import ShowLogin, { ShowLogout } from "../show/ShowState";
import Swal from "sweetalert2";

const Header = () => {
  const [displayName, setdisplayName] = useState("");
  let ref = useRef(null);
  const location = useLocation();
  const productLove = useSelector((state) => state.love.data);
  const cart = useSelector((state) => state.cartSlice.cartData);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        console.log(user);
        setdisplayName(user.displayName);
        ref.current = user.photoURL;
        // console.log(ref);
        dispatch(setActiveUser({
          email : user.email,
          useName : user.displayName,
          userID : user.uid,
        }))
      } else {
        setdisplayName("");
        dispatch(setRemoveUser())
      }
    });
  }, []);

  const logoutUser =() => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
      ref.current  = null ;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged out has been logged out",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch((error) => {
      console.log(error.message);
    });
  }
  return (
    <Navbar bg="white" expand="md" className="sticky-top shadow">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="navbarScroll" className="shadow-none" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="users ms-auto my-2 my-lg-0 align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <ShowLogin>
              <Nav.Link
              as={Link}
              to="/products"
              className={location.pathname === "/products" ? "active" : ""}
            >
              shop
            </Nav.Link>
            </ShowLogin>
            
            <Nav.Link
              as={Link}
              to="/loveProduct"
              className={`position-relative ${
                location.pathname === "/loveProduct" ? "active" : ""
              }`}
            >
              <FaHeart />
              <span className="position-absolute counter-shopping">
                {productLove.length}
              </span>
            </Nav.Link>
            <ShowLogin>
              <Nav.Link
              as={Link}
              className={`position-relative ${
                location.pathname === "/cart" ? "active" : ""
              }`}
              onClick={() => dispatch(openCart())}
            >
              <RiShoppingCartLine />
              <span className="position-absolute counter-shopping text-white">
                {cart.length}
              </span>
            </Nav.Link>
            </ShowLogin>
            
            <ShowLogout>
            <Nav.Link as={Link} to={"/login"}>
              <span className="">login</span>
            </Nav.Link>
            </ShowLogout>
            <ShowLogin>
              <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex justify-content-center align-items-center"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {ref.current === null ? (
                <IoPersonCircle />
              ) : (
                <div className="w-25 h-25 rounded-circle overflow-hidden me-2">
                  <img src={ref.current} alt="user image" />
                </div>
              )}
              {displayName}
              </a>
              <ul className="dropdown-menu mt-1 " aria-labelledby="navbarDropdown">
                <li>
                  <a onClick={logoutUser} className="dropdown-item" href="#">
                    logout
                  </a>
                </li>

              </ul>
            </li>
            </ShowLogin>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
