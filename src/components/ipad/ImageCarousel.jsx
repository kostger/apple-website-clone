import React, { useRef, useEffect, useState } from "react";
import { imageCarousel } from "../../constants";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

gsap.registerPlugin(ScrollTrigger);

function ImageCarousel() {
  const carouselRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(2);
  useEffect(() => {
    const updateMaxPosition = () => {
      if (window.innerWidth < 640) {
        setMaxPosition(4);
      } else {
        setMaxPosition(2);
      }
    };

    updateMaxPosition();
    window.addEventListener("resize", updateMaxPosition);

    return () => {
      window.removeEventListener("resize", updateMaxPosition);
    };
  }, []);
  useEffect(() => {
    // Initial animation on scroll
    gsap.fromTo(
      carouselRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleNext = () => {
    if (position < maxPosition) {
      gsap.to(carouselRef.current, {
        x: `-=${100}%`,
        duration: 1,
        ease: "power2.inOut",
      });
      setPosition((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      gsap.to(carouselRef.current, {
        x: `+=${100}%`,
        duration: 1,
        ease: "power2.inOut",
      });
      setPosition((prev) => prev - 1);
    }
  };

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div className="flex flex-col ">
      <div className="relative">
        <div
          id="carousel"
          ref={carouselRef}
          className="flex bg-white gap-10 translate-x-0"
        >
          {imageCarousel.map((item, index) => (
            <div
              key={index}
              className="sm:pr-20 pr-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="image-carousel_container relative">
                <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col text-white p-4">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center py-5">
        <button
          onClick={handlePrev}
          disabled={position === 0}
          className={`flex justify-center items-center w-12 h-12 rounded-full ml-2 ${
            position === 0 ? "bg-gray-300" : "bg-gray-100"
          }`}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          onClick={handleNext}
          disabled={position === maxPosition}
          className={`flex justify-center items-center w-12 h-12 rounded-full ml-2 ${
            position === maxPosition ? "bg-gray-300" : "bg-gray-100"
          }`}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
