// IMPORTS //
import {useState} from 'react'
import UserDarkMode from './UserDarkMode'

function Header() {
    // States //
    const [isOpen, setIsOpen] = useState(false)
    const [colorTheme, setColorTheme] = UserDarkMode()

    // Toggle Function For Collappsed Header //
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
            <nav className="flex items-center justify-between flex-wrap dark:bg-black bg-white p-6">

                {/* LOGO */}
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a className="font-semibold text-xl tracking-tight" href="/">
                        <></>
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

                {/* Collapse Icon */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded bg-white border-black hover:border-white hover:bg-blue-500">
                        <svg 
                            className="fill-current h-6 w-6" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open}`}>

                    {/* Page Section Button/Links */}  
                    <div className="text-xl lg:flex-grow">

                        {/* Pokémon */}
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-100 dark:text-white text-black mr-4">
                        Pokémon
                        </a>

                        {/* Version */}
                        <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 dark:text-white text-black mr-4">
                            Version
                        </a>

                        {/* Something Else */}
                        <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 dark:text-white text-black">
                            Something
                        </a>
                    </div>

                    {/* Search */}
                    <div>
                        <></>
                    </div>
                </div>
            </nav>
        </div>
        

    )
}

export default Header