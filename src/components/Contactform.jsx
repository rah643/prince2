import React from 'react'

const Contactform = () => {
  return (
  <section id="contact" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
        <div className="max-w-3xl mx-auto card bg-base-100 shadow-xl p-6">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            <textarea placeholder="Message" className="textarea textarea-bordered w-full" rows="4"></textarea>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contactform