import React from "react";
import { Link } from "react-router-dom";

function Items({ tooltipStatus, setTooltipStatus, name, image }) {

  // Function For Manipulating Name For HD Photos //
  const theItem = (name) => {
    // needs to check if the word has a dash in it (conditional)
    if (/[-]/.test(name)) {
      // it it does have a dash, then splice it from the dash
      name.split("-")
      // then join the split words without the dash
      return name.split("-").join("")
    } else {
      return name
    }
  };

  // Variables //
  const photos = (name) => `https://www.serebii.net/itemdex/sprites/pgl/${theItem(name)}.png`;

  return (
    <div className="flex flex-row">
      <div className="flex-col md:flex-row flex items-center md:justify-center">
        <div className="relative mt-20 md:mt-0 w-full">
          <div className="flex justify-center items-center m-10 p-0 cursor-pointer w-20 h-20 rounded-full border hover:bg-gray-500 hover:w-24 hover:h-24 transition duration-500">
            <Link to="/#">
              <img
                className="w-16 h-16 hover:w-20"
                // onMouseEnter={() => setTooltipStatus(1)}
                // onMouseLeave={() => setTooltipStatus(0)}
                src={photos(name)}
                alt={name}
              />
            </Link>
          </div>
          {tooltipStatus === 1 && (
            <div
              role="tooltip"
              className="z-20 -mt-10 w-232 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded-full dark:bg-gray-900"
            >
              <p className="text-sm text-center font-bold text-gray-800 pb-1 dark:text-white">
                {name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Items;
