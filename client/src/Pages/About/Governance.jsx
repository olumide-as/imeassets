import React from "react";
import { Hero } from "../../Components";

const Governance = () => {
  return (
    <div>
      <Hero
        heroheading="CORPORATE GOVERNANCE"
        herosubheading="Our Governance Policy"
        text="Upholding Integrity, Transparency, and Accountability"
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684763064/imeassets/pexels-alena-darmel-7710082_blb0rv.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              
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
              <span className="relative">Our</span>
            </span>{" "}
            Commitment to Strong Corporate Governance.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Infrastructure Management Express operates across multiple
            industries and disciplines including architecture, quantity
            surveying, engineering, construction, and facilities management.
            Since IME’s procurement, contracting and supply chain activities
            extend into different geographic jurisdictions, we understand the
            need for a robust governance structure to handle the highly complex
            regulatory and operational issues we are frequently required to deal
            with. We observe the highest level of integrity and standards in our
            compliance policies including professional code of conduct, project
            risk management and overall corporate culture. We take environmental
            sustainability issues seriously.
          </p>
        </div>


      </div>
    </div>
  );
};

export default Governance;
