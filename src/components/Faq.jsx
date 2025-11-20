import React from 'react'

const Faq = () => {
  return (
   <section className="py-20 px-6 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">What is PRINCE2?</div>
            <div className="collapse-content">
              <p>PRINCE2 is a globally recognized project management framework.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 shadow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Do I receive certification?</div>
            <div className="collapse-content">
              <p>Yes, certification is included with the full course.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faq