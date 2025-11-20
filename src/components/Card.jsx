import React from 'react'

const Card = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
 <div className="card bg-base-100 shadow-xl p-6 text-center">
            <h3 className="text-2xl font-bold">Foundation</h3>
            <p className="text-4xl font-bold my-4">₹19,999</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✔ Online Training</li>
              <li>✔ Study Material</li>
              <li>✔ Certification Prep</li>
            </ul>
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>

         
 <div className="card bg-base-100 shadow-xl p-6 text-center border-2 border-primary">
            <h3 className="text-2xl font-bold">Practitioner</h3>
            <p className="text-4xl font-bold my-4">₹24,999</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✔ Advanced Curriculum</li>
              <li>✔ Mock Tests</li>
              <li>✔ Certificate Included</li>
            </ul>
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>

<div className="card bg-base-100 shadow-xl p-6 text-center">
            <h3 className="text-2xl font-bold">Combined</h3>
            <p className="text-4xl font-bold my-4">₹34,999</p>
            <ul className="text-left space-y-2 mb-6">
              <li>✔ Foundation + Practitioner</li>
              <li>✔ Hands-on Projects</li>
              <li>✔ Full Certification Track</li>
            </ul>
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </section>
  )
}

export default Card