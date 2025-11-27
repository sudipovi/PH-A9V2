import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerWithEmailPassword, handleGoogleSignIn, setUser } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const photourl = e.target.photourl.value;
    const name = e.target.username.value;
    registerWithEmailPassword(email, pass).then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photourl,
      })
        .then(() => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          console.log(error);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const googleSignup = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">User Name</label>
                <input
                  name="username"
                  type="username"
                  className="input"
                  placeholder="User Name"
                />
                <label className="label">PhotoURL</label>
                <input
                  name="photourl"
                  type="photourl"
                  className="input"
                  placeholder="Enter Your Photo URL"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button onClick={googleSignup} className="btn">
                  <FcGoogle />
                </button>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                  <span>Already have an account? </span>
                  <Link to={"/login"}>
                    <span className="text-blue-300">Log In</span>
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
