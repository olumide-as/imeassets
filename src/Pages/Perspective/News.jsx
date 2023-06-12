import React from "react";
import { Hero, Post } from "../../Components";

const News = () => {
  return (
    <div>
      <Hero
        heroheading="NEWS AND ARTICLES"
        herosubheading="Stay Informed, Stay Connected"
        text="Discover the Latest News and Exciting Events in IME."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684763064/imeassets/pexels-alena-darmel-7710082_blb0rv.jpg"
      />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <Post
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686595643/imeassets/news/Obaseki_nhbrko.jpg"
            postUrl="../news/edo-public-building-maintenance-agency-bill"
            category="News and Events"
            date="2023"
            title="Edo Public Building Maintenance Agency bill"
            desc="Governor Godwin Obaseki of Edo State has signed into law four bills including the bill for the establishment of the Edo State Public Building Maintenance Agency and the Flood Erosion and Watershed Management Agency."
          />
          <Post
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686597203/imeassets/news/Screenshot-38-300x190_c6oikj.png"
            postUrl="../news/lagos-state-maintenance-cultured-initiative"
            category="News and Events"
            date="2023"
            title="Lagos state Maintenance Cultured Initiative"
            desc="Oladeji Williams, GM of Lasiama speaking at the launch of the Lagos state Maintenance Cultured Initiative"
          />
          <Post
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686597424/imeassets/news/Screenshot-36-e1613837542803-300x171_lrcerz.png"
            postUrl="../news/managing-public-facilities-The-Edo-approach"
            category="News and Events"
            date="2023"
            title="Managing public facilities: The Edo approach"
            desc="The Hon. Commissioner of Physical Planning & Urban Development, Dr. Erimona Edorodion at a virtual forum last week spoke on the topic; Managing Public Facilities: The Edo Approach."
          />
          <Post
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686595643/imeassets/news/0ca54992-650d-438f-9c5a-f0ae71e6a44c_wrgxwb.jpg"
            postUrl="../news/2019-world-facility-management-day"
            category="News and Events"
            date="2023"
            title="2019 World Facility Management day."
            desc="Deji Williams at the 2019 world FM day and launch of Lagos state is maintenance cultured."
          />
          <Post
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686595643/imeassets/news/1d18ed63-8a03-4810-86f6-4f6537689eb0_lxt0tt.jpg"
            postUrl="../news/LASTVEB-graduation-ceremony-2019"
            category="News and Events"
            date="2023"
            title="LASTVEB graduation ceremony 2019"
            desc="Former GM at infoLASIAMA, Oladeji Williams delivering a speech (2019) at the Lagos State Technical Vocational Educational Board, LASTVEB graduation ceremony"
          />
          <Post
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686597580/imeassets/news/2f9a7994-3486-40d2-9b8c-3e8a8a44825d-300x211_w2wbdr.jpg"
            postUrl="news/value-of-facility-management"
            category="News and Events"
            date="2023"
            title="Value of Facility Management"
            desc="Deji Williams, CEO, IME speaking on the value of facility management on the popular morning talk show, Your View with Morayo"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
