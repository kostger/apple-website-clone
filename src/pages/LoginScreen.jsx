import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL;

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/api/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className=" p-8 pb-16 mb-10 mt-10 rounded-lg shadow-md flex flex-col h-full relative w-full max-w-3xl mx-auto">
      <form
        onSubmit={handleLoginSubmit}
        className="grid grid-cols-1 gap-4 overflow-y-auto mt-12 px-4"
      >
        <h3 className="text-2xl font-semibold mb-6 sticky left-0">Login</h3>

        <label
          htmlFor="email"
          className="text-left ml-1 -mb-2 text-l font-bold"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          className="border rounded p-2 w-full mb-6 input-black"
          autoComplete="off"
        />

        <label
          htmlFor="password"
          className=" text-left ml-1 -mb-2 text-l font-bold"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          className="border rounded p-2 w-full mb-6 input-black"
          autoComplete="off"
        />

        <button
          type="submit"
          className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
        >
          Log In
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="flex flex-col justify-center items-center">
        <p className="mt-10 mb-2">Don&apos;t have an account yet?</p>
        <Link to={"/signup"}>
          <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
            Sign Up
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LoginScreen;
