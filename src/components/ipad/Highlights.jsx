import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ImageCarousel from "./ImageCarousel";

const Highlights = () => {
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

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%", // Animation starts when top of #highlights enters the viewport
      },
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-white"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading-ipad">
            Get to know Ipad.
          </h1>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
};

export default Highlights;
