import React from "react";
import { Hero } from "../Components";

const Sectors = () => {
  return (
    <div>
      <Hero
        heroheading="SECTORS"
        herosubheading="Sector Solutions Unleashed."
        text="Navigating Facility Management Across Industries."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684930938/imeassets/pexels-jules-am%C3%A9-9272726_rvd04r.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"  style={{ backgroundImage: `url(${'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688418302/imeassets/bg-fade_m8abj0.svg'})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              Unveiling the Possibilities.
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
              <span className="relative">Tremendous</span>
            </span>{" "}
            experience and deep expertise in managing multiple asset classes
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Over the years, our firm has evolved from a facility
            management/support service model to a highly integrated urban
            infrastructure and environmental sustainability consultancy.
          </p>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684791671/imeassets/pexels-josh-sorenson-103596_popo73.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Government Infrastructure
                  </h6>
                  <p className="text-sm text-gray-900">
                    (Public Buildings, Road Networks & Street Furniture)
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684791744/imeassets/pexels-pok-rie-157827_jmbsmx.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">Energy</h6>
                  <p className="text-sm text-gray-900">
                    Energy (O&M of On-and-Off grid installation)
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684791808/imeassets/pexels-zukiman-mohamad-87236_o9b8hk.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">Oil & Gas</h6>
                  <p className="text-sm text-gray-900">
                    Oil & Gas (O&M pipeline infrastructure)
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325939/imeassets/services/pexels-nataliya-vaitkevich-7173040_o9le48.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Integrated Facilities Management
                  </h6>
                  <p className="text-sm text-gray-900">
                    Retail Facilities Management (Private homes & estates).
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688421684/imeassets/pexels-suntorn-somtong-1029243_dvqlok.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Technical, Vocational Education & Training (TVET)
                  </h6>
                  <p className="text-sm text-gray-900">
                    Practical skills and industry-relevant knowledge
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684827269/imeassets/pexels-ikram-shaari-250659_lrvhfb.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Social Infrastructure
                  </h6>
                  <p className="text-sm text-gray-900">
                    Healthcare, Schools, Housing, Waste, Sanitation
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684827514/imeassets/pexels-%E5%90%88%E9%90%B5-%E9%90%B5%E9%81%93%E5%BD%B1%E5%83%8F%E7%B4%80%E9%8C%84-14729803_hnobcz.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h6 className="mb-2 font-semibold leading-5">
                    Economic Infrastructure
                  </h6>
                  <p className="text-sm text-gray-900">
                    Energy, Transportation, Water, Telecommunications
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6 ">
              <h2 className="px-3 max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl sm:leading-none border-l-4 border-orange-700">
                Areas of Expertise
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Through our various business models, IME provides expert
                advisory and managed services to governments and organizations
                in Nigeria – assisting in delivering the conceptualization and
                implementation of infrastructure asset development, management
                and maintenance solutions. Utilizing proven experience,
                expertise and best practices to operate assets efficiently and
                sustainably with transformative socio- economic outcomes.
              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              Features
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Consulting & Outsourced Facility Management
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Operations & Maintenance
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Planning & Project Management
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Enterprise Asset Management Technology Implementation
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  Technical & Vocational Education & Training
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326180/imeassets/services/pexels-picha-stock-3894378_tp9afy.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;
