import React from 'react'

const Testimonial = () => {
  return (
     <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Students Say</h2>
        <div className="carousel w-full max-w-3xl mx-auto rounded-box shadow">
          <div className="carousel-item w-full">
            <div className="p-10 text-center">
              <p className="italic mb-4">“Amazing training. Cleared my exam on first attempt!”</p>
              <h3 className="font-bold">Rahul Singh</h3>
            </div>
          </div>
          <div className="carousel-item w-full">
            <div className="p-10 text-center">
              <p className="italic mb-4">“Very simple and project-based explanation.”</p>
              <h3 className="font-bold">Anita Verma</h3>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial