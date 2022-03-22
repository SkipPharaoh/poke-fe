import React, {useState} from 'react'

function PokemonList({name, image, loading}) {
    // States //
    const [tooltipStatus, setTooltipStatus] = useState(0)


    // if (loading){return "Loading..."}

  return (
    <div className='flex flex-row'>
        <div className="flex-col md:flex-row flex items-center md:justify-center">
            
            {/*Code Block for white tooltip starts*/}
            <div className="relative mt-20 md:mt-0 w-full" onMouseEnter={() => setTooltipStatus(1)} onMouseLeave={() => setTooltipStatus(0)}>
                <div className="flex justify-center items-center m-10 p-18 cursor-pointer w-20 h-20 rounded-full border">
                    <img className='w-16 h-16' src={image} alt={name} />
                </div>
                {tooltipStatus === 1 && (
                    <div role="tooltip" className="z-20 -mt-10 w-232 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded-full dark:bg-gray-900 ">
                        <p className="text-sm text-center font-bold text-gray-800 pb-1 dark:text-white">{name}</p>
                    </div>
                )}{" "}
            </div>
        </div>

    </div>
  )
}

export default PokemonList