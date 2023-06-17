import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

const lagos =
  "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686982559/imeassets/slider/pexels-cameron-casey-1722183_obs4qr.jpg";
const edo =
  "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686982559/imeassets/slider/pexels-jonnathas-luis-de-silva-816461_abca9v.jpg";
const craterRock = "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686982559/imeassets/slider/pexels-sergio-souza-2309579_fpaanx.jpg";
const ipp =
  "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686982559/imeassets/slider/pexels-taryn-elliott-3889855_gkqhh5.jpg";

const Home = () => {
  return (
    <div>
      <section className=" ">
        <HeroSlider
          height={"100vh"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide),
          }}
        >
          <Overlay>
            <div className=" bg-blue-950/40 text-left text-white flex justify-center items-center flex-col w-full h-full m-0 p-0">
              <div className="w-full md:w-3/4 p-4 md:p-8 text-focus-in">
              <h1 className=" border-l-4 md:border-l-8 border-orange-700 mx-auto text-4xl md:text-7xl font-semibold px-4">
                Revolutionising Infrastructure Management
              </h1>
              <p className=" mx-auto py-4">
                Technology-driven asset management, digitalisation, capacity
                optimisation and resource forecasting.
              </p>
              </div>
            </div>
          </Overlay>

          <Slide
            shouldRenderMask
            label="Independent Power Project"
            background={{
              backgroundImageSrc: ipp,
            }}
            style={{
              backgroundBlendMode: "luminosity",
              backgroundColor: "black",
            }}
          />

          <Slide
            shouldRenderMask
            label="Light Up Lagos"
            background={{
              backgroundImageSrc: lagos,
            }}
          />

          <Slide
            shouldRenderMask
            label="Light Up Edo"
            background={{
              backgroundImageSrc: edo,
            }}
          />

          <Slide
            shouldRenderMask
            label="Crater Rock, OR - United States"
            background={{
              backgroundImageSrc: craterRock,
            }}
          />

          <MenuNav />
        </HeroSlider>
      </section>

      <div className="reveal px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="  max-w-lg px-2 mb-6 text-3xl font-bold text-blue-950 sm:text-4xl border-l-4 border-orange-700">
                Revolutionalising {""}
                <span className="text-orange-700">
                  Infrastructure Management
                </span>
              </h2>
              <p className="  md:text-lg">
                We revolutionize facility management with advanced technologies,
                sustainability, and collaborative solutions. Experience
                unparalleled efficiency, optimized resource allocation, and
                eco-friendly practices. Join us in shaping the future of
                infrastructure for a better tomorrow.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-700 hover:text-orange-800"
              >
                Sectors
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="bject-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-28 reveal">
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
          <div className="max-w-xl space-y-3 ">
            <h3 className="text-orange-700 text-sm font-semibold">CLIENTS</h3>

            <p className="text-blue-950 text-3xl font-semibold sm:text-4xl border-l-4 border-blue-950 px-3">
              Trusted by outstanding companies
            </p>
            <p className="">
              With a proven track record of excellence, innovation, and client
              satisfaction, we deliver customized solutions that exceed
              expectations. Experience the difference of working with a trusted
              partner dedicated to your success.
            </p>
          </div>
          <div className="flex-none mt-12 text-white lg:mt-0">
            <ul className="grid grid-cols-2 gap-2 items-center justify-center [&>*]:bg-gray-200 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
              {/* LOGO 1 */}
              <li className="p-1">
                <img
                  src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684746153/imeassets/clients/lagoswaterlogo_yagkpf.png"
                  alt="Logo"
                />
              </li>

              {/* LOGO 2 */}
              <li className="p-1">
                <img
                  src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684746687/imeassets/clients/edsiamo_vcmkgr.png"
                  alt="Logo"
                />
              </li>

              {/* LOGO 3 */}
              <li className="p-1">
                <img
                  src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684747026/imeassets/clients/lasiama_mbkfio.png"
                  alt="Logo"
                />
              </li>

              {/* LOGO 4 */}
              <li className="p-1">
                <img
                  src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684747277/imeassets/clients/lightup_lagos_hwx1w9.png"
                  alt="Logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
