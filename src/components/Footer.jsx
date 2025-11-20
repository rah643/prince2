import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 p-10">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Contact</a>
        </div>

        <div className="grid grid-flow-col gap-6 text-2xl">
          <a><i className="fa-brands fa-facebook"></i></a>
          <a><i className="fa-brands fa-twitter"></i></a>
          <a><i className="fa-brands fa-instagram"></i></a>
          <a><i className="fa-brands fa-youtube"></i></a>
        </div>

        <p>© 2025 PRINCE2 Learning. All Rights Reserved.</p>
      </footer>
  )
}

export default Footer