import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/toastAlert";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(false);

  const { loginUser, signInWithGoogle } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = async (data) => {
    console.log(data);

    try {
      await loginUser(data.email, data.password);
      showToast("success", "Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Invalid credentials");
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      showToast("success", "Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error.message);
      showToast("error", "Login  with google failed");
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
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
          <div className="mb-6">
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
              className="w-full py-2 px-3 focus:outline-none focus:shadow-md leading-tight shadow appearance-none border rounded  "
            />
          </div>
          {errorMessage && (
            <p className="mb-4 text-red-500 text-sm italic">{errorMessage}</p>
          )}
          <div className="mb-4">
            <button className="bg-blue-500 flex-1 hover:bg-blue-600 focus:outline-none text-white font-bold rounded py-2 px-8">
              Login
            </button>
          </div>
        </form>
        <p>
          Don&apos;t have an account? Please{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            register
          </Link>
        </p>
        {/* Sign in with google */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center font-bold justify-center py-2 px-4 rounded bg-secondary hover:bg-blue-800 text-white focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xsm">
          Adam&apos;s Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
