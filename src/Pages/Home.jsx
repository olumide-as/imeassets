import React from "react";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import CardCarousel from "../Components/CardCarousel";


const cards = [
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691446436/imeassets/pexels-david-iloba-15183531_nfpzm8.jpg',
    title: 'Architecture and Landscape',
    description: 'Our architects employ interdisciplinary methods to create designs that balance aesthetic appeal with functional performance to meet clients need.',
    link: "services/#architecture",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691446178/imeassets/pexels-alena-darmel-7707016_tlkeaa.jpg',
    title: 'Assest and Integrity Management',
    description: 'We provide holistic solutions to manage the integrity and unlock the full value of assets throughout their lifecycles.',
    link: "services/#asset",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325277/imeassets/services/pexels-pixabay-355948_mrk8pv.jpg',
    title: 'Concept and Feasibility Studies',
    description: 'Our team of engineers, economic and financial experts use the best tools and methodologies to investigate project sites and conduct studies.',
    link: "services/#feasibilty",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325343/imeassets/services/pexels-jiyoung-kim-4513940_skymbl.jpg',
    title: 'Construction Management',
    description: 'We provide project management for the construction, demolition, extension, or alteration of public and residential infrastructure and buildings.',
    link: "services/#construction",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325396/imeassets/services/pexels-cytonn-photography-955389_rsst3f.jpg',
    title: 'Contract Advisory',
    description: '',
    link: "services/#contract",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325734/imeassets/services/pexels-lukas-590045_ihw8ox.jpg',
    title: 'Development Management',
    description: 'Our extensive local network and global reach enables us to assist you.    ',
    link: "services/#development",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325821/imeassets/services/pexels-matej-716661_sq2zrk.jpg',
    title: 'Engineering and Specialist Service',
    description: 'Our team of highly skilled and experienced engineers bring years of experience from a diverse range of development types to deliver.    ',
    link: "services/#engineeing",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325939/imeassets/services/pexels-nataliya-vaitkevich-7173040_o9le48.jpg',
    title: 'Facilities Management',
    description: 'Our multidisciplinary team of facilities managers identify key governance areas and streamline processes to ensure functionality, efficiency, comfort and safety of assets.    ',
    link: "services/#facility",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688325988/imeassets/services/pexels-nothing-ahead-7425340_iyn8d3.jpg',
    title: 'Fire and Safety',
    description: 'Our fire and safety consultancy service adopts advanced modelling and computational tools for future-proofing buildings against fire.    ',
    link: "services/#safety",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326122/imeassets/services/pexels-cottonbro-studio-5990265_a6kmcb.jpg',
    title: 'Master Planning',
    description: 'Our team of town planners collaborate with multidisciplinary teams to create high economic, social and environmental impact blueprints for communities.    ',
    link: "services/#planning",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326180/imeassets/services/pexels-picha-stock-3894378_tp9afy.jpg',
    title: 'IME Capital',
    description: 'We work with a consortium of development finance experts to help our clients source, structure and manage development project investments.    ',
    link: "services/#imecapital",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326427/imeassets/services/pexels-ketut-subiyanto-4559592_nb8yuf.jpg',
    title: 'Managed Services',
    description: 'We provide a one-stop solution to deliver convenience, efficiency and commercial value on your asset portfolios.    ',
    link: "services/#managedservices",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326505/imeassets/services/pexels-christina-morillo-1181615_j5djz1.jpg',
    title: 'Project Management',
    description: 'IME offers end-to-end project management solutions for a wide range of project types in various sectors.    ',
    link: "services/#projectmanagement",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326684/imeassets/services/pexels-nataliya-vaitkevich-7173046_usohkf.jpg',
    title: 'Quantity Surveying and Cost Management',
    description: 'We advise clients on contracts and valuations of project costing to meet budget requirement.    ',
    link: "services/#qs",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326791/imeassets/services/pexels-scott-webb-430208_hk2vtl.jpg',
    title: 'Security Services and Solutions',
    description: 'We provide integrated safety and security solutions to our clients at a reduced cost.    ',
    link: "services/#security",
  },
  {
    image: 'https://res.cloudinary.com/dz2fc3ioz/image/upload/v1688326845/imeassets/services/pexels-kostiantyn-stupak-599982_xqyx3v.jpg',
    title: 'Smart City',
    description: 'IME helps clients to implement a suite of integrated smart city solutions  that connect various physical devices, people and infrastructure to a digitalized network   ',
    link: "services/#smartcity",
  },
  // Add more card objects as needed
];


const lagos2 =
  "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168711/imeassets/projects/light%20up%20lagos/IMG-20230717-WA0043_w3xnxo.jpg";
const edo1 =
  "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168318/imeassets/projects/light%20up%20edo/IMG-20230717-WA0027_xqdgno.jpg";
const lagos = "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168712/imeassets/projects/light%20up%20lagos/WhatsApp_Image_2023-07-15_at_13.04.12_ebcgv2.jpg";
const edo =
  "https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168317/imeassets/projects/light%20up%20edo/IMG-20230717-WA0020_oh9ifg.jpg";

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
            label="Light Up Edo"
            background={{
              backgroundImageSrc: edo1,
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
            label="Light Up Lagos"
            background={{
              backgroundImageSrc: lagos2,
            }}
          />

          <MenuNav />
        </HeroSlider>
      </section>

      <div className="p-5 md:p-10 ">
      <CardCarousel cards={cards} />
      </div>

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
                We revolutionize Integrated Infrastructure Asset Management with advanced technologies,
                sustainability, and collaborative solutions. Experience
                unparalleled efficiency, optimized resource allocation, and
                eco-friendly practices. Join us in shaping the future of
                infrastructure for a better tomorrow.
              </p>
            </div>
            <div>
              <a
                href="../sectors"
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
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168711/imeassets/projects/light%20up%20lagos/IMG-20230717-WA0050_lhzeeg.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168712/imeassets/projects/light%20up%20lagos/WhatsApp_Image_2023-07-15_at_13.04.12_ebcgv2.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168317/imeassets/projects/light%20up%20edo/IMG-20230717-WA0030_j5sztv.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              FOR A BETTER TOMORROW, TODAY
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-blue-950">
          Sustainable Solutions for Greener Facility Management
          </h5>
          <p className="mb-5 text-gray-800">
             At IME, <span className="font-bold">Sustainability</span> is paramount. We integrate eco-friendly practices into every operation, from innovative strategies to cutting-edge tech. Our solutions, like energy efficiency and waste management, are tailored to your needs. Partner with us for a greener future in Integrated Infrastructure Asset Management.
          </p>
          <div className="flex items-center">
            <a
              href="../sustainability"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200  text-orange-700 hover:text-orange-800"
            >
              Learn More
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
