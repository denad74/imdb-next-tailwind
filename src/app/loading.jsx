import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center">
      <img className="h-96" src="spinner.svg" alt="Loading..." />
    </div>
  );
}

export default loading;
