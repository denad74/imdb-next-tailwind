"use client";

import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-20 ">
      <h1 className="text-4xl text-purple-600">Something went wrong</h1>
      <button
        className="hover:text-purple-600 px-10 py-5 bottom-1 border border-purple-600 mt-10"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
