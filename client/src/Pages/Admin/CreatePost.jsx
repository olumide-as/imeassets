import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-orange-700 uppercase rounded-full bg-teal-accent-400">
              New Post
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
              <span className="relative">Create</span>
            </span>{" "}
            A New Post
          </h2>
          <p className="text-base text-gray-700 md:text-lg"></p>
        </div>

        <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
          <form onSubmit={handleSubmit} className="space-y-5 slide-in-right">
            <div>
              <label className="font-medium">Title</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">Description</label>
              <textarea
                rows={6}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">Category</label>

              <select
                id="post"
                name="post"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
              >
                <option value="articles">Articles</option>
                <option value="news">News and Events</option>
              </select>
            </div>
            <div>
              <label className="font-medium">Image</label>

              {file && <img src={URL.createObjectURL(file)} alt="" />}
              <input
                type="file"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150">
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
