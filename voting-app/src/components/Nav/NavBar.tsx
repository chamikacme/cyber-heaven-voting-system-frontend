import React, { useState } from 'react'
import Logo from "../../assets/sanmark.png";

const NavBar = (handleLoginPopup:any) => {
  const [popUp, setPopUp] = useState(false)
  return (
    <>
    <main className="shadow-lg bg-white/70 backdrop-blur-sm">
        <div className="container">
          <nav className="flex items-center justify-between ">
            <a href="#" className="text-3xl font-bold text-gray-800">
              <img src={Logo} alt="Logo"  height={100} className="inline h-10 mr-1" />
              
            </a>
            <div className="hidden sm:block">
              <ul className="flex items-center justify-center gap-4 font-semibold">
                <li>
                  <a
                    href="/"
                    className="inline-block px-4 py-4 text-gray-700 select-none hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 text-gray-700 select-none hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 text-gray-700 select-none hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    // onClick={handleLoginPopup}
                    className="inline-block px-4 py-4 text-gray-700 select-none hover:text-gray-900"
                  >
                    Login
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="block sm:hidden">
              <ul className="flex items-center justify-center gap-4 text-xl font-semibold">
                <li>
                  <a
                    href="/"
                    
                    className="inline-block px-4 py-4 text-gray-700 hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </main>
    </>
  )
}

export default NavBar