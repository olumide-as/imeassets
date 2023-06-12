import React from "react";
import { Sidebar } from "../../../Components";

const Post1 = () => {
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
              Obaseki signs Edo Public Building Maintenance Agency bill, three
              others into law
            </h2>
          </div>
          <div className="mx-auto lg:max-w-2xl">
            <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686595643/imeassets/news/Obaseki_nhbrko.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-6">
            <p className="text-base text-gray-700 md:text-lg text-left">
              Governor Godwin Obaseki of Edo State has signed into law four
              bills including the bill for the establishment of the Edo State
              Public Building Maintenance Agency and the Flood Erosion and
              Watershed Management Agency. Obaseki, who received the four bills
              for his assent at the Government House in Benin City, thanked the
              legislature for their commitment and dedication, and for making
              history with the passage of the four important bills.
              <br></br>
              <br></br>
              Other bills assented to by the governor are the bill for the
              establishment of Flood, Erosion and Watershed Management Agency;
              amendment bill for the harmonized provision of the retirement age
              of staff of Polytechnics and Colleges of Education 2021, and the
              bill to repeal the Edo State Private Property Protection Law 2017
              and re-enact the Edo State Private Property Protection Law 2021.
              The governor said the passage of the four bills demonstrates that
              the Edo State House of Assembly is living up to expectations and
              diligent in performing its constitutional responsibilities.
              <br></br>
              <br></br>
              According to him, “the four bills signed into law are significant
              because they deal with important issues affecting us in terms of
              governance. “We are concerned about environmental issues; working
              with the World Bank in terms of erosion control, we have spent so
              much ameliorating devastations caused by erosion menace and other
              environmental hazards. This law helps us institutionalize that
              process as we move forward. “This law helps us have an institution
              that will help ameliorate the conditions that create these
              disasters. The law regulates communities on how to use land and
              have an agency that will ensure that preventive measures are taken
              to avert this whole-scale environmental destruction as a result of
              erosion and flood control.”
              <br></br>
              <br></br>
              The governor also hailed the legislature for facilitating the
              harmonization of the retirement age for staff of polytechnics and
              other colleges of education in the state, adding, “I thank you
              from heeding to the call of citizens.” The governor said in a bid
              to restructure the government, his administration has moved the
              issues of the public building into one agency to help government
              plan its own Infrastructural needs and maintain government assets.
              He said: “The government is quick in building assets with no
              institutionalized means of maintaining them. It’s important to
              have the agency to carry out the responsibility of maintenance as
              government spreads infrastructural needs of the people across the
              state.” Speaking on the amended private property protection law
              2017, Obaseki noted that “this law affects law and order in the
              State.
              <br></br>
              <br></br>
              With this law, we are not only banning the Community Development
              Associations (CDAs) but also all sorts of splinter groups like
              Okaigele or people who have come up to forcefully take other
              people’s landed properties in their communities. The governor
              further stated: “We have been waiting for this law to reconstitute
              the committee on protection of private property. Now that we have
              the law, we will be reconstituting this Committee within a
              fortnight using this law and utilizing more stringent measures to
              deal with erring individuals or communities trying to dispose of
              innocent individuals of their landed properties. “We are setting
              up a special court to swiftly try offenders and if guilty, they
              will certainly face the consequences.” Earlier in his remarks,
              Marcus Onobun, speaker of Edo State House of Assembly, thanked the
              governor for working closely with the legislature.
              <br></br>
              <br></br>
              Source : Business Day
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

export default Post1;
