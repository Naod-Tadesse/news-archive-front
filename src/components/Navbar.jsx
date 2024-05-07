import React from "react";

import { Link } from "react-router-dom";

export default function BasicDemo() {
  return (
    <>
      <div className="h-4rem bg-gray-200 flex justify-content-between align-items-center px-4">
        <Link to={`/`} className="no-underline text-xl font-bold">
          NEWS ARCHIVE
        </Link>
        <div className=" flex justify-content-between align-items-center gap-5">
          <Link to={`/`} className=" no-underline font-bold text-xl">
            Home
          </Link>
          <p className="font-bold text-xl no-underline">News</p>
          <Link to={`/archive`} className="no-underline font-bold text-xl">
            Archive
          </Link>
        </div>
        <div>Sign In</div>
      </div>
    </>
  );
}
