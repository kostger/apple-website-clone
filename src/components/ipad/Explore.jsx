import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ImageCarousel from "./ImageCarousel";
import { ipadLineup } from "../../constants";

const Explore = () => {
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
