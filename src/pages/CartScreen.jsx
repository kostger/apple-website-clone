import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function CartScreen() {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useContext(AuthContext);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cart items!", error);
      });
  }, [token]);

  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/api/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
      })
      .catch((error) => {
        console.error("There was an error deleting the cart item!", error);
      });
  };

  const handleEdit = (id, updatedItem) => {
    axios
      .put(`${API_URL}/api/cart/${id}`, updatedItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCartItems((prevItems) =>
          prevItems.map((item) => (item._id === id ? response.data : item))
        );
      })
      .catch((error) => {
        console.error("There was an error updating the cart item!", error);
      });
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-screen overflow-hidden h-full common-padding bg-zinc flex justify-evenly">
      <div className="border border-black bg-black rounded w-1/2 flex flex-col">
        <div className="text-2xl font-semibold mb-4">Cart</div>
        <div className="flex flex-col">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="p-4 border-b border-gray-300 flex items-center justify-between"
            >
              <div>
                <div>Type: {item.type}</div>
                <div>
                  Color:{" "}
                  <span
                    style={{ backgroundColor: item.color }}
                    className="inline-block w-4 h-4 rounded-full"
                  ></span>
                </div>
                <div>Size: {item.size}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Price: ${item.price}</div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={
                    item.type.includes("iPhone")
                      ? "../../public/assets/images/iphone15.png"
                      : `../../public${item.image}`
                  }
                  alt={item.type}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <button
                    className="px-5 py-2 rounded-3xl bg-blue text-white hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue transition-all"
                    onClick={() => handleDelete(item._id)}
                  >
                    Remove
                  </button>
                  {/* <button
                    className="px-5 py-2 rounded-3xl bg-blue text-white hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue transition-all"
                    onClick={() =>
                      handleEdit(item._id, {
                        
                      })
                    }
                  >
                    Edit
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-black bg-black rounded w-1/4 flex flex-col p-4">
        <div className="text-2xl font-semibold mb-4">Checkout</div>
        <div className="text-lg mb-4">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
        <button
          className="px-5 py-2 rounded-3xl bg-blue text-white hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue transition-all"
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
