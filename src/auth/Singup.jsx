import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IMG from "../assets/form.png";
import { IoPersonCircle } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Singin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  const submitUser = (e) => {
    e.preventDefault();
    console.log(email, password, cpassword);

    if (password !== cpassword) {
      console.log("password is not filed");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-6 d-none d-lg-block ">
        <img src={IMG} alt="sign-in image" />
      </div>
      <div className="col-10 col-lg-6 shadow-lg bg-white text-center p-4  mt-5 mt-lg-0">
        <span>
          <IoPersonCircle size={44} color="green" />
        </span>
        <h2 className="my-3">Sign up</h2>
        <form
          onSubmit={submitUser}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <input
            className="form-control my-2"
            type="email"
            name="email"
            id="email"
            placeholder="Inter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            id="password"
            placeholder="Inter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="form-control my-2"
            type="password"
            name="cpassword"
            id="cpasswords"
            placeholder="Confirm password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary mt-3 fw-semibold">
            Send
            <span>
              <GoArrowRight fontWeight={700} />
            </span>
          </button>
          <p className="mt-3">
            Already an account ? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Singin;
