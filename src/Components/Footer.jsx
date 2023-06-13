import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "../perspective",
          name: "Perspective",
        },
        {
          href: "../sustainability",
          name: "Sustainabilty",
        },

        {
          href: "../careers",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "../projects",
          name: "Projects",
        },
        {
          href: "../services",
          name: "Services",
        },
        {
          href: "../sectors",
          name: "Sectors",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "../information",
          name: "Corporate Information",
        },
        {
          href: "../governance",
          name: "Corporate Governance",
        },
        {
          href: "../csr",
          name: "Corporate Social Responsibility",
        },
      ],
    },
  ];

  const current = new Date();
  const date = current.getFullYear();

  return (
    <div>
      <footer className="text-white bg-blue-950 px-4 py-24 max-w-screen-2xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <img
                src="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684312939/imeassets/ime_2_4x_is6q0g.png"
                className="w-32"
                alt="ime"
              />
              <p className="leading-relaxed mt-2 text-[15px]">
                We're an Africa-focused integrated infrastructure and asset
                management consultancy
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10 space-y-6 items-center justify-around sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-gray-400 font-bold text-sm tracking-widest uppercase">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="hover:underline hover:text-orange-700"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; {date} Infrastructure Management Express All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0 px-10">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="https://www.linkedin.com/company/facility-management-express/" target="_blank"
              rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-orange-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="https://twitter.com/imeassets" target="_blank"
              rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7 text-orange-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
