import React from "react";
import { Hero } from "../Components";

const Sustainability = () => {
  return (
    <div>
      <Hero
        heroheading="SUSTAINABILITY"
        herosubheading="Save For the Future"
        text="For a Better Tomorrow, Today."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684765311/imeassets/pexels-narcisa-aciko-1292464_qneb58.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              Empowering Change through Green Practices.
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-950 sm:text-4xl md:mx-auto text-focus-in">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Building</span>
            </span>{" "}
            a Greener Future in Facility Management
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            At IME , we are committed to leading the way in sustainable facility
            management practices. With a firm belief in the importance of
            environmental responsibility, we integrate sustainability into every
            aspect of our operations. Through innovative strategies and
            cutting-edge technologies, we strive to minimize our ecological
            footprint while optimizing the performance of your facilities. From
            energy-efficient solutions and waste management initiatives to green
            building practices and renewable energy integration, we provide
            comprehensive sustainability solutions tailored to your specific
            needs. <br></br>
            <br></br>Our team of experts is dedicated to developing and
            implementing sustainable practices that not only reduce costs but
            also create healthier and more environmentally friendly spaces. We
            take a holistic approach, considering factors such as water
            conservation, indoor air quality, and responsible material sourcing,
            to ensure that your facilities align with the highest standards of
            sustainability.<br></br> <br></br>By partnering with IME , you can
            be confident that your facility management practices contribute to a
            greener future. Together, let us pave the way towards a sustainable
            tomorrow, where efficiency, environmental stewardship, and
            responsible resource management go hand in hand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
