import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Signup.scss";
import { auth } from "../../library/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Curousel/Footer";
// import { async } from "@firebase/util";

function Signup() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  //handlesubmission
  const handelSubmission = (e) => {
    e.preventDefault();
        if (!value.name || !value.email || !value.pass) {
          setErrorMsg("Fill all fields");
          return;
        }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: value.name,
        });
        navigate("/login");
        console.log(res.user);
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <Box>
      {/* <div className="Login_top">
        <Link to="/">
        <div className="first_child">
          <img src={Logo} alt="" />
          <h3>Megadeals</h3>
        </div>
        </Link>

        <div className="second_child">
          <div>
            <h3>Login/Signup</h3>
            <p>Manage Orders I Access Wishlist I Unlock Offers</p>
          </div>
          <div>
            <img
              src="https://n1.sdlcdn.com/imgs/h/0/k/coupon_icon-3ce40.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <Navbar/>

      <form className="container">
        <h1>Create a account</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) =>
              setValue((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) =>
              setValue((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) =>
              setValue((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
        </div>
        <b>{errorMsg}</b>
        <button
          onClick={handelSubmission}
          className="btn"
          disabled={submitButtonDisabled}
        >
          SignUp
        </button>
        <Link className="register_now" to={"/login"}>
          Already have an account ?
        </Link>
      </form>
      <Footer/>
    </Box>
  );
}

export default Signup;