import React from "react";
import { Hero } from "../../Components";

const Team = () => {
  return (
    <div>
      <Hero
        heroheading="OUR MANAGEMENT TEAM"
        herosubheading=" Meet Our Visionary Leaders."
        text="Empowering Facility Management with Our Dynamic and Experienced Leaders."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688422349/imeassets/pexels-nappy-936137_bilmth.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"  style={{ backgroundImage: `url(${'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688418302/imeassets/bg-fade_m8abj0.svg'})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
            Discover Our Team
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            At the heart of our organization, our distinguished management team
            stands as a collective force of visionary leaders, guiding our
            journey to excellence in the field of facility management. With a
            wealth of experience, a passion for innovation, and a commitment to
            fostering a collaborative and inclusive work environment, our
            management team exemplifies the values and principles that drive our
            success.
          </p>
        </div>

        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1685024478/imeassets/team/oladeji_williams_itpvl4.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Oladeji Williams</p>
              <p className="mb-5 text-xs text-gray-800">
                Lead Consultant & CEO
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/oladeji-williams-a777952b/"
                  className="text-orange-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="-143 145 512 512"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691437166/imeassets/team/WhatsApp_Image_2023-07-19_at_09.11.31_ogavwi.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Osarume Odighibor</p>
              <p className="mb-5 text-xs text-gray-800">Digital Lead & COO</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/osarumeodighibor/"
                  className="text-orange-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="-143 145 512 512"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1685025771/imeassets/team/bobby_takhng.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Bobby Enouch Edegbo</p>
              <p className="mb-5 text-xs text-gray-800">Snr. Project Manager</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/bobby-edegbo-a0884631/"
                  className="text-orange-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="-143 145 512 512"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1685024688/imeassets/team/muizz_mfg3sd.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Muizz Salaam</p>
              <p className="mb-5 text-xs text-gray-800">Project Manager</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/muizz-salaam-75264240/"
                  className="text-orange-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="-143 145 512 512"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1685024852/imeassets/team/munachi_njeeg7.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Stephanie Munachi</p>
              <p className="mb-5 text-xs text-gray-800">Legal Administrator</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/mwlite/in/stephanie-munachi-ejinkeonye-43488bb8"
                  className="text-orange-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="-143 145 512 512"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1685024859/imeassets/team/margaretta_lwiuve.jpg"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Margaretta Ayodele-Ejenobom</p>
              <p className="mb-5 text-xs text-gray-800">Financial Manager</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/margaretta-ayodele-6bb2ab91/"
                  className="text-orange-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    height="40px"
                    width="40px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="-143 145 512 512"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path>{" "}
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
