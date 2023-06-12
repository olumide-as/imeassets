import React from 'react'

const Post = ({imgUrl, postUrl, category, date, title, desc}) => {
  return (
    <div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={imgUrl}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              
                {category}
              <span className="text-gray-600">— {date}</span>
            </p>
            <a
              href={postUrl}
              className="inline-block mb-3 text-2xl font-bold text-ellipsis line-clamp-3"
            >
              {title}
            </a>
            <p className="mb-2 text-gray-700 text-ellipsis line-clamp-3">
              {desc}
            </p>
            <a
              href={postUrl}
              className=" items-center font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>
    </div>
  )
}

export default Post