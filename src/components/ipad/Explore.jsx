import { useEffect, useContext, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import ImageCarousel from "./ImageCarousel";
import { ipadLineup } from "../../constants";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const Explore = () => {
  const { token, isLoggedIn } = useContext(AuthContext); // Get the token from the context
  const API_URL = import.meta.env.VITE_API_URL;
  const buttonRefs = useRef([]);
  const [isAdded, setIsAdded] = useState(Array(ipadLineup.length).fill(false));

  useEffect(() => {
    isAdded.forEach((added, index) => {
      if (added) {
        gsap.to(buttonRefs.current[index], {
          backgroundColor: "#22c55e", // green
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(buttonRefs.current[index], {
          backgroundColor: "#3b82f6", // blue
          duration: 0.5,
          ease: "power2.in",
        });
      }
    });
  }, [isAdded]);

  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%", // Starts the animation when the top of #title is 80% down the viewport
        end: "top 20%", // Ends when it reaches the top 20% of the viewport
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(".item", {
      opacity: 1,
      x: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".item",
        start: "top 80%", // Starts the animation when the top of the item is 80% down the viewport
      },
    });
  }, []);

  const handleAddtoCart = (item, index) => {
    const cartItem = {
      type: item.title,
      color: item.color,
      image: item.img,
      size: item.size,
      quantity: 1, // Assuming a default quantity of 1
      price: item.price,
    };
    console.log(cartItem);
    axios
      .post(`${API_URL}/api/cart/add`, cartItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Item added to cart:", response.data);
        setIsAdded((prev) => {
          const newIsAdded = [...prev];
          newIsAdded[index] = true;
          return newIsAdded;
        });
        setTimeout(() => {
          setIsAdded((prev) => {
            const newIsAdded = [...prev];
            newIsAdded[index] = false;
            return newIsAdded;
          });
        }, 2000); // Reset after 2 seconds
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart!", error);
      });
  };

  const handleCheckLogin = (item, index) => {
    if (!isLoggedIn) {
      toast.error("Please log in to add items to your cart!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      handleAddtoCart(item, index);
    }
  };

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-[#fff0db]"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading-ipad">
            Explore the lineup.
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        {ipadLineup.map((item, index) => (
          <div
            key={index}
            className="item w-full h-full flex flex-col items-center opacity-0 -translate-x-50"
          >
            <img src={item.img} alt={item.name} />
            <h2 className="text-2xl font-bold mt-5 text-black">{item.title}</h2>
            <p className="text-center text-sm text-gray-500">{item.desc}</p>

            <button
              ref={(el) => (buttonRefs.current[index] = el)}
              className={`btn flex-center mt-5  ${
                isAdded[index] ? "bg-green-500" : "bg-blue-500"
              }`}
              onClick={() => handleCheckLogin(item, index)}
            >
              {isAdded[index] ? <CheckIcon /> : <AddIcon />}
              <span className="max-sm:hidden">
                {isAdded[index] ? "Added" : "Add to Cart"}
              </span>
            </button>
          </div>
        ))}
      </div>
      <hr className="w-full mx-auto my-12 border-[1px] border-gray-200" />
    </section>
  );
};

export default Explore;
