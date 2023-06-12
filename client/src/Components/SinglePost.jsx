import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../Pages/Context/Context";
import { useLocation } from "react-router";


const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {console.log(err);}
    
  };


  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-950 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative"></span>
              </span>{" "}
              {post.title}
            </h2>
          )}
        </div>
        <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
          {new Date(post.createdAt).toDateString()}
        </p>

        {user && (
          <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
            Uploaded by :{/*Change the link to hews page*/}
            <Link to={`/news/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </p>
        )}

        <div className="flex ">
          {post.username === user?.username && (
            <Link>
              <svg
                className="w-20 h-20 text-blue-950"
                stroke="currentColor"
                strokeWidth="0.5"
                viewBox="0 0 52 52"
                onClick={() => setUpdateMode(true)}
              >
                <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
              </svg>
              <svg
                className="w-20 h-20 text-red-500"
                stroke="currentColor"
                strokeWidth="0.5"
                viewBox="0 0 52 52"
                onClick={handleDelete}
              >
                <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>{" "}
              </svg>
            </Link>
          )}
        </div>

        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          {post.photo && (
            <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={PF + post.photo}
              alt=""
            />
            
            </div>

            
          )}
        </div>

        {updateMode ? (
          <textarea
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <pre className="max-w-xl mb-4 text-base text-left	 text-gray-700 sm:mx-auto font-manrope w-full"
          style={{  whiteSpace:'pre-wrap'    ,  overflowWrap:'break-word'}}>
            {post.desc}
          </pre>
        )}
        {updateMode && (
          <button
            onClick={handleUpdate}
            className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150"
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
