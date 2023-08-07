import React from "react";
import { Hero } from "../Components";

const Services = () => {
    return (
        <div>
            <Hero
                heroheading="SERVICES"
                herosubheading="Streamlined Infrastructure Solutions."
                text="Empowering Infrastructure Excellence: Your Path to Seamless Solutions."
                bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1691168317/imeassets/projects/light%20up%20edo/IMG-20230717-WA0030_j5sztv.jpg"
            />


            <div className="bg-gray-100">
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>

                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div id="architecture" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Architecture and Landscape</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    Our architects employ interdisciplinary methods to create designs that balance aesthetic appeal with functional performance to meet clients need. We plan, design, manage and nurture the built and natural environment including parks, streetscapes, plazas, schools, public spaces and private residences to achieve environmental sustainability and social outcomes.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="asset" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Asset and Integrity Management</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We provide holistic solutions to manage the integrity and unlock the full value of assets throughout their
                                    lifecycles. Our integrity management services:
                                    <ul className="list-decimal list-inside">
                                        <li>Asset and Integrity Framework</li>
                                        <li>Operation and Maintenance</li>
                                        <li>Inventory, Materials and Space Management</li>
                                        <li>Process Optimization and Efficiency</li>
                                        <li>Asset and Integrity Health Checks</li>
                                        <li>Benchmarking and Analysis</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="feasibility" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Concept and Feasibility Studies</p>
                                <p className="text-sm leading-5 text-gray-900">
                                Our team of engineers, economic and financial experts use the best tools and methodologies to investigate project sites and conduct studies that help you determine the technical, economic and operational feasibility of your projects.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="construction" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Construction Management</p>
                                <p className="text-sm leading-5 text-gray-900">
                                We provide project management for the construction, demolition, extension, or alteration of public and
residential infrastructure and buildings. We also manage land reclamation, channelization and desilting
of waterways
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="contract" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Contract Advisory</p>
                                <p className="text-sm leading-5 text-gray-900">
                                We leverage our extensive work with state and private clients in the area of deal structuring, contract
advisory and dispute avoidance and management services to help you handle the complexity of:
                                    <ul className="list-decimal list-inside">
                                        <li>Contract drafting and signing</li>
                                        <li>Understand and determine the soundness of contracts</li>
                                        <li>Provide insight into application of law to contracts based on industry best practices</li>
                                        <li>Facilitate contract dispute resolution mechanisms</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="development" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Development Management</p>
                                <p className="text-sm leading-5 text-gray-900">
                                Our extensive local network and global reach enables us to assist you to
                                    <ul className="list-decimal list-inside">
                                        <li>Conduct project in-depth feasibility studies</li>
                                        <li>Develop operations and maintenance strategy and framework</li>
                                        <li>Negotiate with land or building owners, and local communities</li>
                                        <li>Ensure efficiencies in development and delivery in terms of quality and timeliness</li>
                                        <li>Implement innovative technology solutions in infrastructure maintenance</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="engineering" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Engineering and Specialist Service</p>
                                <p className="text-sm leading-5 text-gray-900">
                                Our team of highly skilled and experienced civil and structural engineers bring years of experience from
a diverse range of industrial, institutional, residential, and recreational development types to deliver
buildings and infrastructure using materials and solutions that are energy efficient and environmentally
friendly.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="facilitiy" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Facilties Management</p>
                                <p className="text-sm leading-5 text-gray-900">
                                Our multidisciplinary team of facilities managers identify key governance areas and streamline processes
to ensure functionality, efficiency, comfort and safety of assets for both owners and users. We manage
industrial, commercial and residential facilities for government, corporate organizations and individuals.
Our Facilities Management services include:
                                    <ul className="list-decimal list-inside">
                                        <li>Consolidated Facilities Management</li>
                                        <li>Integrated Workplace Solution</li>
                                        <li>Engineering Support Services</li>
                                        <li>Asset Enhancement</li>
                                        <li>Sustainability and Smart Solution</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="safety" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Fire and Safety</p>
                                <p className="text-sm leading-5 text-gray-900">
                                Our fire and safety consultancy service adopt advanced modelling and computational tools for futureproofing buildings against fire.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="planning" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Master Planning</p>
                                <p className="text-sm leading-5 text-gray-900">
                                Our team of town planners collaborate with multidisciplinary teams to create high economic, social and environmental impact blueprints for communities.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="imecapital" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">IME Capital</p>
                                <p className="text-sm leading-5 text-gray-900">
                                We work with a consortium of development finance experts to help our clients source, structure and manage development project investments across the urban, industrial, commercial, residential and public infrastructure value chain.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="managedservices" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Managed Services</p>
                                <p className="text-sm leading-5 text-gray-900">
                                We provide a one-stop solution to deliver convenience, efficiency and commercial value on your asset portfolios. Our integrated operating model and service level agreement (SLA) combine the following critical services:
                                    <ul className="list-decimal list-inside">
                                        <li>Asset Management</li>
                                        <li>Facilities Management</li>
                                        <li>Security services and Solutions</li>
                                        <li>Smart City Solutions</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="projectmanagement" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Project Management</p>
                                <p className="text-sm leading-5 text-gray-900">
                                IME offers end-to-end project management solutions for a wide range of project types in various sectors including education, housing, transportation, healthcare, industrial and commercial.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="qs" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Quantity Surveying and Cost Management</p>
                                <p className="text-sm leading-5 text-gray-900">
                                We advise clients on contracts and valuations of project costing to meet the budget requirement. We also conduct feasibility studies and provide financial advisory services to help you determine the commercial viability of a project.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="security" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Security Services and Solutions</p>
                                <p className="text-sm leading-5 text-gray-900">
                                We provide an integrated safety and security solutions to our clients at reduced cost.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div id="smartcity" className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Smart City</p>
                                <p className="text-sm leading-5 text-gray-900">
                                IME helps clients to implement a robust and resilient suite of integrated smart city solutions and proprietary applications that connect various physical devices, people and infrastructure to a digitalized network for efficient operations and services.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;
