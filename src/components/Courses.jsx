import React from 'react'

export const Courses = () => {
  return (
  <section id="courses" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our PRINCE2 Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Foundation",
            "Practitioner",
            "Foundation + Practitioner",
          ].map((course, i) => (
            <div key={i} className="card bg-base-100 shadow-xl p-6 border">
              <h3 className="text-2xl font-bold mb-2">{course}</h3>
              <p className="mb-4">Complete training with exam preparation.</p>
              <button className="btn btn-primary w-full">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>
  )
}
