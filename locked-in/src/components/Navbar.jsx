import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png'

const Navbar = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,     
          once: true,       
          offset: 100,      
        });
    }, []);
    return (
        <div data-aos="fade" className="navbar bg-black shadow-sm h-[80px] md:px-8 text-white sticky top-0 z-50">
            <div className="flex-1">
                <a className="font-bold text-xl" href='/'>
                    <img src={logo} alt="logo" className='w-[150px]' />
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-1 items-center">
                    <li className='hidden md:text-md md:block'>
                        <a href='/' className='hover:bg-black'>Home</a>
                    </li>
                    <li className='hidden md:text-md md:block'>
                        <a href='#services' className='hover:bg-black'>Services</a>
                    </li>
                    <li className='hidden md:text-md md:block'>
                        <a href='#prices' className='hover:bg-black'>Prices</a>
                    </li>
                    <li className='hidden md:text-md md:block'>
                        <a href='#faqs' className='hover:bg-black'>FAQs</a>
                    </li>
                    <li className='text-md md:text-md bg-green-700  rounded-md '>
                        <button className="px-4 py-2 text-white no-underline outline-none focus:outline-none active:bg-green-900 flex items-center justify-center h-[45px]">
                            Start Free Trial!
                        </button>
                    </li>
                    <li className="flex items-center justify-center md:hidden">
                        <details className="relative text-white">
                            <summary className="text-md cursor-pointer list-none bg-black text-white">
                            </summary>
                            <ul className="absolute right-0 mt-4 w-40 bg-zinc-950 rounded-md shadow-lg p-2 space-y-1 z-50">
                                <li>
                                    <a href='/' className="block px-3 py-2 hover:bg-zinc-800 rounded-md">Home</a>
                                </li>
                                <li>
                                    <a href='#services' className="block px-3 py-2 hover:bg-zinc-800 rounded-md">Services</a>
                                </li>
                                <li>
                                    <a href='#prices' className="block px-3 py-2 hover:bg-zinc-800 rounded-md">Prices</a>
                                </li>
                                <li>
                                    <a href='#faqs' className="block px-3 py-2 hover:bg-zinc-800 rounded-md">Faqs</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar