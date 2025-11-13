"use client";

import Link from "next/link"
import { useState } from "react";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {

  const [open, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  // note: 隨每個尺寸改變的<p>

  return (
    <div
      className="flex items-center justify-between h-full px-4 sm:px-8 md-px-12 lg:px-20 xl:px-48"
    >
      {/* RESONSIVE MENU */}
      <div className="hidden md:flex items-center justify-start flex-1 gap-2">
        { links.map((link, index) =>
          <Link 
            href={ link.url } 
            key={ index }
            className="md:relative flex items-center justify-center w-20 h-12 border-2 border-zinc-700 rounded-lg"
          >
            { link.title }
          </Link> 
        ) }
      </div>
      {/* LOGO */}
      <div className="
            flex-1 flex items-center justify-center md:static absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0

      ">
        <Link 
          href="/" 
          className="flex items-center justify-center bg-zinc-700 px-1 py-1 text-sm font-semibold rounded-md"
        >
          <span className="text-white">Mink</span>
          <span className="flex items-center justify-center w-10 ml-1 h-8 bg-white text-zinc-700 rounded">.dev</span>
        </Link>
      </div>
      {/* RESONSIVE HAMBURGER MENU */}
      <div className="md:hidden flex items-center justify-end flex-1">
        {/* MENU BUTTON */}
        <button 
          className="flex flex-col justify-between relative items-center w-10 h-8 z-50 cursor-pointer"
          onClick={ handleOpen }
        >
          <div className="w-10 h-1 bg-white"></div>
          <div className="w-10 h-1 bg-white"></div>
          <div className="w-10 h-1 bg-white"></div>
        </button>
        {/* MENU LIST */}
      </div>
      { open &&
        (<div className="flex flex-col items-center justify-center gap-8 absolute top-0 left-0 w-screen h-screen text-4xl bg-zinc-700 text-white">
          {links.map((link, index) => (
            <Link 
              href={link.url} 
              key={index}
              onClick={() => setOpen(false)}
            >{link.title}</Link>
          ))}
        </div>)
      }
    </div>
  )
}
export default Navbar