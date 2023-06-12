import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className=" mb-10 md:mx-auto text-left lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              Recent News and Events
            </p>
            <ul className="text-left">
              <li>
                <a
                  href="../news/edo-public-building-maintenance-agency-bill"
                  className="inline-block mb-3 border-b"
                >
                  Edo Public Building Maintenance Agency bill
                </a>
              </li>
              <li>
                <a
                  href="../news/lagos-state-maintenance-cultured-initiative"
                  className="inline-block mb-3 border-b"
                >
                  Lagos state Maintenance Cultured Initiative
                </a>
              </li>
              <li>
                <a
                  href="../news/managing-public-facilities-The-Edo-approach"
                  className="inline-block mb-3 border-b "
                >
                  Managing public facilities: The Edo approach
                </a>
              </li>
              <li>
                <a
                  href="../news/2019-world-facility-management-day"
                  className="inline-block mb-3 border-b "
                >
                  2019 World Facility Management day.
                </a>
              </li>
              <li>
                <a
                  href="../news/LASTVEB-graduation-ceremony-2019"
                  className="inline-block mb-3 border-b "
                >
                  LASTVEB graduation ceremony 2019
                </a>
              </li>
              <li>
                <a
                  href="../news/value-of-facility-management"
                  className="inline-block mb-3 border-b "
                >
                  Value of Facility Management
                </a>
              </li>
            </ul>
          </div>
          <div className="py-6">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              Recent Articles
            </p>
            <ul className="text-left">
              <li>
                <a
                  href="../articles/the-dichotomy-between-physical-and-human-infrastructure"
                  className="inline-block mb-3 border-b"
                >
                  The dichotomy between physical and human infrastructure
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
