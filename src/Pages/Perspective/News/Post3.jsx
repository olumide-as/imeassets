import React from "react";
import { Sidebar } from "../../../Components";

const Post3 = () => {
  return (
    <div className="lg:flex pt-20">
      <div className="lg:basis-9/12 lg:border-r">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
                News and Events
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-950 sm:text-4xl md:mx-auto">
              Managing public facilities: The Edo approach
            </h2>
          </div>
          <div className="mx-auto lg:max-w-2xl">
            <div className="relative w-full hover:shadow-xl">
              <video controls>
                <source
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96 "
                  src="https://res.cloudinary.com/dz2fc3ioz/video/upload/v1686603360/imeassets/news/116177444_1730998867051495_2032480457263639850_n_tsgdmk.mp4"
                  alt=""
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-6">
            <p className="text-base text-gray-700 md:text-lg text-left">
              The Hon. Commissioner of Physical Planning & Urban Development,
              Dr. Erimona Edorodion at a virtual forum last week spoke on the
              topic; Managing Public Facilities: The Edo Approach.
              <br></br>
              <br></br>
              In this video, he highlights the strategic move by His Excellency,
              Governor Godwin Obaseki to ensure sustainability of the State
              Government’s investment in Infrastructure through the Executive
              Order creating and charging EDSIAMO with the responsibility of
              ensuring the optimal management and maintenance of the vast
              portfolio of Edo State Government of Nigeria physical assets.
              International Facility Management Association (IFMA)
            </p>
          </div>
        </div>
      </div>
      <div className="px-2  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
        <Sidebar />
      </div>
    </div>
  );
};

export default Post3;
