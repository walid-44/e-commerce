import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/");
      console.log(user , "auth");
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Successfully logged in as ${user.displayName}`,
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.log(error , " this is error");
      console.log(error.message);
      if(error) {
          Swal.fire({
        position: "center",
        icon: "error",
        title: "Login failed",
        text: error.message,
        showConfirmButton: true,
      });
      }
    

    });
  };
  const provider = new GoogleAuthProvider();
  const loginUserWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully logged in as ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message, "error sign in with google");
      });
  };

  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div className="col-10 col-lg-6 shadow-lg bg-white text-center p-4  mt-5 mt-lg-0">
        <span>
          <MdOutlineLogin size={44} color="green" />
        </span>
        <h2 className="my-3">Log in</h2>
        <form
          onSubmit={loginUser}
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

          <div className="w-100 d-flex justify-content-between align-items-center">
            <p className="mt-3">
              <Link to={"/sing-up"}>sign in</Link>
            </p>
            <p className="mt-3 ms-auto">
              <Link to={"/reset"}>Forget password?</Link>
            </p>
          </div>

          <button
            onClick={loginUserWithGoogle}
            className="btn btn-warning mt-3 fw-semibold"
          >
            Login with google
            <span>
              <FcGoogle size={22} className="ms-2" />
            </span>
          </button>
          <button type="submit" className="btn btn-primary mt-3 fw-semibold">
            Login
            <span>
              <GoArrowRight fontWeight={700} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
