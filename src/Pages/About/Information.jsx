import React from "react";
import { Hero } from "../../Components";

const information = () => {
  return (
    <div>
      <Hero
        heroheading="CORPORATE INFORMATION"
        herosubheading=" Unveiling the Essence"
        text="Discovering Our Corporate Information and Values."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684930938/imeassets/pexels-jules-am%C3%A9-9272726_rvd04r.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
            Heart of our organization.
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
              <span className="relative">Great</span>
            </span>{" "}
            experience with tremendous track record
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Infrastructure Management Express is an Africa focused,
            multidisciplinary infrastructure management consultancy with
            corporate headquarters in Lagos, Nigeria. Our team of experts have a
            combined 40 years of track record in high profile project management
            in the public and private sectors, and at board and employee levels.
            We provide services for oil and gas, energy, healthcare, education,
            transportation, and water sectors. IME offices are spread across
            major cities in Nigeria, including Lagos, and Abuja. We keep
            attracting a team of seasoned technical experts and professional
            partners such as architects, engineers, urban planners, project
            managers, facilities managers and other specialists who are
            passionate about a sustainable built environment. Our experts have
            managed over 5,000 infrastructure assets for state governments and
            corporate organizations and our projects have brought
            infrastructural development to scores of communities, generating
            employment for over 3,000 skilled and unskilled labourers in
            Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default information;
