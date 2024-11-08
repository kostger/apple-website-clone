import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Product = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleBuy = () => {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return <button onClick={handleBuy}>Buy</button>;
};

export default Product;
