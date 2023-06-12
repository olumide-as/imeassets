import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" gap-8  sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="grid lg:grid-cols-3 overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            {posts.map((p) => (
              <Post post={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
