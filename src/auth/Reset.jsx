import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [email, setEmail] = useState("");

  const resetEmail = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("sends");
      })
      .catch((error) => {
        console.log(error.message);

        // ..
      });
  };
  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div className="col-10 col-lg-6 shadow-lg bg-white text-center p-4  mt-5 mt-lg-0">
        <span>
          <RiLockPasswordLine size={44} color="green" />
        </span>
        <h2 className="my-3">Reset Password</h2>
        <form
          onSubmit={resetEmail}
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

          <p className="mt-3 ms-auto">
            <Link to={"/sing-up"}>sign in</Link>
          </p>
          <button type="submit" className="btn btn-primary mt-3 fw-semibold">
            Reset pass
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
