import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
 <header className="fixed z-50 bg-white text-gray-600 body-font drop-shadow-md top-0 w-full">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/logo.svg" width={90}/>
      </a>
    </Link>
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
</header>
  )
}

export default Header