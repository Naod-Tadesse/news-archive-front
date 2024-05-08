import React from "react";

import { Link } from "react-router-dom";

export default function BasicDemo() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-1 h-4rem bg-white flex justify-content-between align-items-center px-4">
        <Link to={`/`} className="no-underline text-xl font-bold text-primary">
          News Archive
        </Link>
        <div className=" flex justify-content-between align-items-center gap-5">
          <Link
            to={`/`}
            className="no-underline text-color font-semibold  hover:underline"
          >
            Home
          </Link>
          <Link to={`/news`}>
            <p className="no-underline text-color font-semibold hover:underline">
              News
            </p>
          </Link>
          <Link
            to={`/archive`}
            className="no-underline text-color font-semibold hover:underline"
          >
            Archive
          </Link>
        </div>
        <div>Sign In</div>
      </div>
    </>
  );
}
