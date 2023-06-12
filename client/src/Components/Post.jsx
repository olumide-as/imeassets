import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {post.photo && (
          <img src={PF + post.photo} className="object-cover w-full h-64" alt="" />
        )}
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            >
              {post.categories.map((c) => (
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700    uppercase rounded-full bg-teal-accent-400">
                  {c.name}
                </p>
              ))}
            </a>

            <span className="text-gray-600">
              {new Date(post.createdAt).toDateString()}
            </span>
          </p>
          <Link
            to={`/post/${post._id}`}
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {post.title}
          </Link>
          <p className="mb-2 text-gray-700 text-ellipsis	line-clamp-4">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
