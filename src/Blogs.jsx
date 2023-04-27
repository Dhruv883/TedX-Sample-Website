import React from "react";

const Blogs = () => {
  const blog = [
    { src: "business.jpg", topic: "Finance" },
    { src: "science.jpg", topic: "Science" },
    { src: "art.jpg", topic: "Arts + Design" },
    { src: "technology.jpg", topic: "Technology" },
    { src: "building.jpg", topic: "Cities" },
  ];

  return (
    <div className="flex flex-wrap p-8 justify-evenly gap-y-6">
      {blog.map((blog, index) => (
        <div className="flex flex-col gap-6 border-b-4 border-b-red py-2">
          <img
            src={`../public/images/${blog.src}`}
            alt=""
            srcset=""
            className="w-[280px] mobile:w-[350px] h-52"
          />
          <div className="text-center opacity-60 text-xl">{blog.topic}</div>
          <div className="w-[280px] mobile:w-[350px] flex gap-3 items-center justify-center flex-col text-center">
            <div className="text-red font-semibold text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, aut.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis ducimus voluptatem, quidem eaque exercitationem eum
              consectetur, id placeat rem doloribus delectus nam quae soluta
              omnis?
            </div>
            <div className="flex items-center cursor-pointer gap-3">
              <span className="text-red text-2xl ">More</span>
              <span>
                <img src="../public/images/right-arrow.svg" alt="" srcset="" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
