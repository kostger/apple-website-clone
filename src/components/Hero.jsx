import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { Link } from "react-router-dom";
function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo
  );
  const handleVideroSrcSet = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideroSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideroSrcSet);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", {
      duration: 1,
      opacity: 1,
      y: -20,
      ease: "power4.out",
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col ">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className=""
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            loop={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link to={"/cart"} href="#highlights" className="btn">
          Buy
        </Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
