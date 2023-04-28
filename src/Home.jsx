import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="p-5 flex items-center justify-evenly">
        <div>
          <img
            src="../images/home.jpg"
            alt=""
            srcset=""
            className="w-[55vw] rounded-md"
          />
        </div>
        <div className="w-[40vw] h-[70vh] px-2 py-10 flex flex-col text-center items-center gap-10 justify-evenly">
          <div className="text-4xl text-red font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            totam.
          </div>
          <div className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi
            aliquid, quis a excepturi quisquam fugiat asperiores omnis hic
            praesentium doloremque esse. Dolore, quibusdam quam.
          </div>
          <div className="flex gap-10 text-xl">
            <Link to={"events"}>
              <button className="bg-red text-white cursor-pointer py-2 px-3 rounded-[7px]">
                Events
              </button>
            </Link>
            <Link to="blogs">
              <button className="bg-red text-white cursor-pointer py-2 px-3 rounded-[6px]">
                Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
