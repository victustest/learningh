import React from 'react'
import Navbar from '../headers/Navbar'
import features from '../data/Features'
function Robotix() {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-100 to-yellow-100 min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-6xl font-extrabold text-purple-700 mb-6">
          Welcome to Robotix
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          A bold and colorful educational platform where kids explore coding,
          robotics, STEM, and creativity through fun interactive experiences.
        </p>

        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl transition duration-300">
          Start Learning
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-8 pb-20">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-14">
          Features & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-700 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>

                <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA COLORFUL SECTION */}
      <section className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 py-20 px-8 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Learning Made Fun 🚀
        </h2>

        <p className="text-white text-xl max-w-3xl mx-auto">
          Robotix combines creativity, technology, and play to help children
          build confidence and future-ready skills in an exciting environment.
        </p>
      </section>
    </div>
  )
}

export default Robotix