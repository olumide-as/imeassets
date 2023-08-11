import React, { useRef } from "react";
import { Hero } from "../Components";
import emailjs from '@emailjs/browser';

const Career = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dniddch', 'career_form', form.current, 'XBXII6uwFiuw6DuX7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div>
      <Hero
        heroheading="CAREER"
        herosubheading="Join Us"
        text="Unlock Your Potential: Join Our Team and Shape the Future of Facility Management."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688419860/imeassets/pexels-pixabay-45842_v55dnz.jpg"
      />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"  style={{ backgroundImage: `url(${'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688418302/imeassets/bg-fade_m8abj0.svg'})`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" >
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              Shape your future
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
              <span className="relative">Discover</span>
            </span>{" "}
             exciting career opportunities that empower you to make a difference in the world of Integrated Infrastructure Asset Management. 
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Our company keeps achieving new milestones in Africa’s
            infrastructure management and maintenance industry. As the need to
            drive the revolution that is taking place in this space is growing
            rapidly, we are always looking to hire smart and passionate team
            members. IME is a multidisciplinary and diverse organization where
            we nurture a team of professionals who are passionate about the
            built environment in which we live, work and play. If you value
            working in virtual teams, solving complex problems and the challenge
            of operating in different regions, we are interested in you. Our
            extensive work with the private and public sector organizations
            offers you the opportunity to build a vast experience and expertise
            working on various projects. We will consider your application for
            graduate roles including internships, or full-time employment as an
            experienced hire. Please send us your CV today!
          </p>
        </div>

        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
        <form ref={form} onSubmit={sendEmail} className="space-y-5 slide-in-right">
                <div>
                  <label className="font-medium">Full name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Area of Interest</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Your CV</label>
                  <input
                    type="file"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                  />
                </div>
                <div class="g-recaptcha" data-sitekey="6Ldai7wUAAAAAEOonqpjKm8AaN9GBIL8DC5nmG9e"></div>
                <button className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150">
                  Submit
                </button>
              </form>
              </div>
      </div>
    </div>
  );
};

export default Career;
