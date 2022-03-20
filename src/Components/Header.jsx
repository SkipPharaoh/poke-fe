// IMPORTS //
import {useState} from 'react'
import UserDarkMode from './UserDarkMode'

function Header() {
    // States //
    const [isOpen, setIsOpen] = useState(false)
    const [colorTheme, setColorTheme] = UserDarkMode()

    // Toggle Function For Collapsed Header //
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // Dark Mode Function //
    const toggleDarkMode = () => {
        setColorTheme(colorTheme)
    }

    // Variables //
    const open = isOpen ? 'block' : 'hidden'

    return (
        <div className="Header">
            
            {/* Nav Bar */}
            <nav className="flex items-center justify-between flex-wrap dark:bg-black bg-white p-3 mb-10">

                {/* LOGO */}
                <div className="flex items-center flex-shrink-0 mr-6 w-14">
                    <a className="font-semibold text-xl tracking-tight" href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/287/287226.png" alt="Header Photo" />
                    </a>
                </div>

                {/* Dark Mode Toggle Container */}
                <div className="dark">

                    {/* Light/Dark Mode Toggle Icon */}
                    <button onClick={toggleDarkMode}>
                        {colorTheme === 'light' ? 

                            
                            // Light Mode Icon //
                            <svg className="icon w-8 h-8 md:w-10 md:h-10 hover:fill-white hover:stroke-white stroke-white fill-black transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>

                            :

                            // Dark Mode Icon //
                            <svg className="icon w-8 h-8 md:w-10 md:h-10 fill-black hover:stroke-black stroke-blue-500 hover:fill-blue-500 transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        }
                    </button>
                </div>


                {/* Search Bar */}
                <div className="sm:w-7/12 md:w-5/12 px-4 flex-wrap text-right items-stretch md:m-auto">
                    <input type="text" className="px-2 py-1 h-8 border border-solid  border-blue-500 rounded-full text-sm leading-snug text-black bg-blue-100 shadow-none outline-none focus:outline-none focus:w-full font-normal flex-1 border-l-0 placeholder-gray-400" placeholder="Search" />
                </div>


                {/* Collapse Icon */}
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 mr-3 mb-3 text-sm font-medium text-center border rounded-full focus:ring-4 focus:ring-blue-700 bg-white border-black hover:border-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:text-white" 
                    type="button"
                    >
                        Poké-Menu 
                        <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>

                <div className={`block flex-grow md:flex md:w-auto sm:w-auto ${open}`}>

                    {/* Page Section Button/Links */}  
                    <div className="text-xl md:flex-grow md:text-right">

                        {/* Pokémon */}
                        <a href="#" className="block mt-4 md:inline-block md:mt-0 hover:text-blue-100 dark:text-white text-black mr-4">
                        Pokémon
                        </a>

                        {/* Version */}
                        <a href="#skills" className="block mt-4 md:inline-block md:mt-0 dark:text-white text-black mr-4">
                            Version
                        </a>

                        {/* Something Else */}
                        <a href="#projects" className="block mt-4 md:inline-block md:mt-0 dark:text-white text-black">
                            Something
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        

    )
}

export default Header