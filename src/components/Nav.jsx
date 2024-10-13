import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Pack & Go</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>How We Works</a></li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className='p-2 bg-gray-200'>
            <li className='text-gray-900'><a>Local Shifting</a></li>
            <li className='text-gray-900'><a>Packing Service</a></li>
          </ul>
        </details>
      </li>
      <li><a>Contact With Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-500 ">Location <i class="fa-solid fa-location-crosshairs"></i></a>
    <a className="btn mx-7 bg-blue-500">Loging</a>
  </div>
</div>     
    </div>
  )
}
