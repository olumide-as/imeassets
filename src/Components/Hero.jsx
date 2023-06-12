import React from "react";

const Hero2 = ({ bg, heroheading, herosubheading, text }) => {
  return (
    <div className="pt-20">
      <section
        className="py-28 bg-fixed "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "luminosity",
          backgroundColor: "black"
        }}
      >
        <div className="  flip-in-hor-bottom max-w-screen-xl mx-auto  text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8 z-0 ">
          <div className="  border-l-4  border-orange-600 p-8 bg-white bg-opacity-70 flex-none space-y-5   sm:max-w-lg  lg:max-w-xl">
            <h1 className="text-sm text-orange-600 font-medium">
              {heroheading}
            </h1>
            <h2 className="text-4xl text-blue-950 font-extrabold md:text-5xl">
              {herosubheading}
            </h2>
            <p className="text-blue-950">{text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
