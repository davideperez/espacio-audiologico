import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
 <header className="fixed z-50 bg-white text-gray-600 body-font drop-shadow-md top-0 w-full">
  <div className="container mx-auto flex flex-wrap p-5  md:flex-row items-center">
    <Link href="/">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/logo.svg" width={90}/>
      </a>
    </Link>
    <div className="hidden md:ml-auto md:flex items-center text-base justify-center">
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/">
      <a className="font-sans font-bold mr-5 hover:text-gray-900 font-medium">Home</a>
      </Link>
      <Link href="/about">
      <a className="font-sans font-bold mr-5 hover:text-gray-900 font-medium">Quienes somos</a>
      </Link>
      <a className="font-sans font-bold mr-5 hover:text-gray-900 font-medium">Asesorias</a>
      <Link href="/blog">
      <a className="font-sans font-bold mr-5 hover:text-gray-900 font-medium">Blog</a>
      </Link>
      <Link href="/contact">
      <a className="font-sans font-bold mr-5 hover:text-gray-900 font-medium">Contacto</a>
      </Link>
    </nav>
    <button className="font-sans font-medium font-bold inline-flex items-center bg-sky-500 border-0 py-2 px-4 focus:outline-none hover:bg-sky-200 rounded text-base text-white mt-4 md:mt-0" >Iniciar Sesión </button>
    </div>
    <div className="flex ml-auto md:hidden hover:opacity-75 hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    </div>
    {showMenu && <>
    <nav className="block md:hidden flex flex-col w-full items-center text-base justify-center">
      <Link href="/" >
      <a onClick={() => setShowMenu(!showMenu)} className={"flex justify-center w-full p-2 rounded font-sans font-bold hover:text-gray-900 font-medium hover:bg-blue-800 hover:text-white"}>Home</a>
      </Link>
      <Link href="/about">
      <a onClick={() => setShowMenu(!showMenu)} className="flex justify-center w-full p-2 rounded font-sans font-bold  hover:text-gray-900 font-medium hover:bg-blue-800 hover:text-white">Quienes somos</a>
      </Link>
      <a onClick={() => setShowMenu(!showMenu)} className="flex justify-center w-full p-2 rounded font-sans font-bold  hover:text-gray-900 font-medium hover:bg-blue-800 hover:text-white">Asesorias</a>
      <Link href="/blog">
      <a onClick={() => setShowMenu(!showMenu)} className="flex justify-center w-full p-2 rounded font-sans font-bold  hover:text-gray-900 font-medium hover:bg-blue-800 hover:text-white">Blog</a>
      </Link>
      <Link href="/contact">
      <a onClick={() => setShowMenu(!showMenu)} className="flex justify-center w-full p-2 rounded font-sans font-bold hover:text-gray-900 font-medium hover:bg-blue-800 hover:text-white">Contacto</a>
      </Link>
    </nav>
    <button className="flex justify-center text-center w-full mt-5 md:hidden font-sans font-medium font-bold inline-flex items-center bg-sky-500 border-0 py-2 px-4 focus:outline-none hover:bg-sky-200 rounded text-base text-white mt-4 md:mt-0" >Iniciar Sesión </button>
    </>
  }
  </div>
</header>
  )
}

export default Header