import React from "react";
import { Hero, Post } from "../../Components";

const Articles = () => {
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
            imgUrl="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1686606904/imeassets/articles/LEKKI-3_fq6u2c.jpg"
            postUrl="../articles/the-dichotomy-between-physical-and-human-infrastructure"
            category="Articles"
            date="2023"
            title="The dichotomy between physical and human infrastructure"
            desc="There are glaring weaknesses in Nigeria’s governance and social structure. With the testimonies and evidence making the rounds in the past couple of year, it is clear that the Nigerian youth had a legitimate cause protesting against police brutality. "
          />
        </div>
      </div>
    </div>
  );
};

export default Articles;
