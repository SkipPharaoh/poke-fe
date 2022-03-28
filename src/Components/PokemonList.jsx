import React from "react";
import { Link } from "react-router-dom";
import { firstCharUpperCase } from "../utils/Functions";

function PokemonList({
  name,
  image,
  id,
  loading,
  search,
  tooltipStatus,
  setTooltipStatus,
}) {
  //   console.log(search)

  const loadtime = () => {
    return loading ? "data that will show" : "loading info soon";
  };

  return (
    <div className="flex flex-row">
      <div className="flex-col md:flex-row flex items-center md:justify-center">
        {/*Code Block for white tooltip starts*/}
        <div className="relative mt-20 md:mt-0 w-full">
          <div className="flex justify-center items-center m-10 p-0 cursor-pointer w-20 h-20 rounded-full border hover:bg-gray-500 hover:w-24 hover:h-24 transition duration-500">
            <Link to={`/pokemon/${id}`}>
              <img
                className="w-16 h-16 hover:w-20"
                src={image}
                alt={name}
                // onMouseEnter={() => setTooltipStatus(1)}
                // onMouseLeave={() => setTooltipStatus(0)}
              />
            </Link>
          </div>
          {tooltipStatus === 1 && (
            <div
              role="tooltip"
              className="z-20 -mt-10 w-232 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded-full dark:bg-gray-900 "
            >
              <p className="text-sm text-center font-bold text-gray-800 pb-1 dark:text-white">
                {firstCharUpperCase(name)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonList;
