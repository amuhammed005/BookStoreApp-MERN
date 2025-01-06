import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/toastAlert";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { registerUser, signInWithGoogle } = useAuth();
  //
  const navigate = useNavigate();
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // On submit Register User
  const onSubmit = async (data) => {
    console.log("Data:", data);
    try {
      await registerUser(data.email, data.password);
      showToast("success", "Sign up successful!");
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Invalid credentials");

      // Handle specific Firebase error codes
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage(
          "This email is already in use. Please use a different email or login."
        );
      } else if (error.code === "auth/weak-password") {
        setErrorMessage(
          "The password is too weak. Please choose a stronger password."
        );
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email address. Please check and try again.");
      } else {
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      showToast("success", "Sign up successful!");
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      showToast("error", "Login  with google failed");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="mb-3">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Full name:{" "}
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Full name"
              name="name"
              id="name"
              className="w-full py-2 px-3 focus:outline-none focus:shadow-md leading-tight shadow appearance-none border rounded  "
            />
          </div> */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Email:{" "}
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              className="w-full py-2 px-3 focus:outline-none focus:shadow-md leading-tight shadow appearance-none border rounded  "
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Password:
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="mb-4 w-full py-2 px-3 focus:outline-none focus:shadow-md leading-tight shadow appearance-none border rounded  "
            />
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="password2"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Confirm password:
            </label>
            <input
              {...register("password2", { required: true })}
              type="password"
              placeholder="Confirm password"
              name="password2"
              id="password2"
              className="w-full py-2 px-3 focus:outline-none focus:shadow-md leading-tight shadow appearance-none border rounded  "
            />
          </div> */}
          {errorMessage && (
            <p className="mb-3 text-red-500 text-sm italic">{errorMessage}</p>
          )}
          <div className="mb-3">
            <button className="bg-blue-500 flex-1 hover:bg-blue-600 focus:outline-none text-white font-bold rounded py-2 px-8">
              Sign Up
            </button>
          </div>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            login
          </Link>
        </p>
        {/* Sign in with google */}
        <div className="mt-3">
          <button
            onClick={handleGoogleSignUp}
            className="w-full flex flex-wrap gap-1 items-center font-bold justify-center py-2 px-4 rounded bg-secondary hover:bg-blue-800 text-white focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign up with google
          </button>
        </div>
        <p className="mt-3 text-center text-gray-500 text-xsm">
          Adam&apos;s Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
