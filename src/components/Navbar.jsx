import React from 'react'

const Navbar = () => {
  return (
   <div className="navbar bg-base-100 shadow-md px-6 sticky top-0 z-50">
        <div className="flex-1">
          <a className="text-2xl font-bold text-primary">PRINCE2 Learning</a>
        </div>
        <div className="flex-none hidden md:flex gap-6">
          <a className="hover:text-primary">Home</a>
          <a className="hover:text-primary">Courses</a>
          <a className="hover:text-primary">Pricing</a>
          <a className="hover:text-primary">Contact</a>
        </div>
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">☰</label>
          <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box shadow w-40 mt-3 p-2">
            <li><a>Home</a></li>
            <li><a>Courses</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar