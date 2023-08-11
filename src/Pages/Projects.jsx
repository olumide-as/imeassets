import React from "react";
import { Hero } from "../Components";

const Projects = () => {
  return (
    <div>
      <Hero
        heroheading="PROJECTS"
        herosubheading="Showcasing Our Expertise and Succes"
        text="Explore our portfolio of remarkable Integrated Infrastructure Asset Management projects."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684930730/imeassets/pexels-startup-stock-photos-7376_d59hdx.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "  style={{ backgroundImage: `url(${'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688418302/imeassets/bg-fade_m8abj0.svg'})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              Driving Excellence.
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
              <span className="relative">Transforming</span>
            </span>{" "}
            Visions into Reality through Innovative Facility Management
            Projects.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            IME takes pride in the tremendous experience and expertise that our
            consultants bring to project management at board and employee levels
            in Nigeria. The sheer scale of projects that our specialists have
            managed for government agencies is second to none. We are leaders in
            subterranean and above-ground infrastructure project and contract
            management. Below are some of the vast portfolios of high-profile
            projects our consultants have managed
          </p>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          <a
            href="../projects"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684768516/imeassets/independeng_power_project_i7jn0o.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h4 className="mb-2 font-semibold leading-5">
                    Independent Power Project
                  </h4>
                  <p className="text-sm text-gray-900">
                    Powering Nigeria's Future: The Independent Power Project
                    Revolution.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="../projects/light-up-lagos"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684768421/imeassets/lightup_lagos_project_ouopm2.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h4 className="mb-2 font-semibold leading-5">
                    Light Up Lagos
                  </h4>
                  <p className="text-sm text-gray-900">
                    Illuminating Lagos: Empowering Communities through the
                    "Light Up Lagos" Initiative.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            href="../projects/light-up-edo"
            aria-label="View Item"
            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684828097/imeassets/DSC_5612-scaled_dzh5gi.jpg"
                className="object-cover w-full h-48"
                alt=""
              />
              <div className="flex-grow border border-t-0 rounded-b">
                <div className="p-5">
                  <h4 className="mb-2 font-semibold leading-5">
                    Light Up Edo
                  </h4>
                  <p className="text-sm text-gray-900">
                  Radiating Progress: Empowering Communities through the "Light Up Edo" Initiative.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
