import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBook, FaCode, FaRocket } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <header className="relative text-center py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("/assets/hero-bg.jpg")' }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Welcome to <span className="text-yellow-300">Tech-Gig</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Empowering you to excel in technology with comprehensive resources,
            hands-on labs, and cutting-edge content for learners at all levels.
          </p>
          <Link to="/category/theory">
            <button className="mt-10 px-8 py-3 bg-yellow-300 text-gray-900 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
              Start Learning
            </button>
          </Link>
        </div>
      </header>

      {/* Category Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Category Cards */}
          <Link
            to="/category/theory"
            className="group transform hover:scale-105 transition-transform"
          >
            <div className="bg-white p-8 shadow-xl rounded-lg relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500 opacity-0 group-hover:opacity-75 transition-all duration-500 rounded-lg"></div>
              <FaBook className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10 text-indigo-600">
                Theory
              </h3>
              <p className="relative z-10 text-gray-600">
                Master the theory behind cutting-edge technologies.
              </p>
            </div>
          </Link>

          <Link
            to="/category/practicals"
            className="group transform hover:scale-105 transition-transform"
          >
            <div className="bg-white p-8 shadow-xl rounded-lg relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500 opacity-0 group-hover:opacity-75 transition-all duration-500 rounded-lg"></div>
              <FaCode className="text-green-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10 text-green-600">
                Practicals
              </h3>
              <p className="relative z-10 text-gray-600">
                Hands-on labs and exercises for tech enthusiasts.
              </p>
            </div>
          </Link>

          <Link
            to="/category/articles"
            className="group transform hover:scale-105 transition-transform"
          >
            <div className="bg-white p-8 shadow-xl rounded-lg relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500 opacity-0 group-hover:opacity-75 transition-all duration-500 rounded-lg"></div>
              <FaRocket className="text-purple-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10 text-purple-600">
                Articles
              </h3>
              <p className="relative z-10 text-gray-600">
                Stay up-to-date with insightful tech articles and tutorials.
              </p>
            </div>
          </Link>

          <Link
            to="/category/tech-updates"
            className="group transform hover:scale-105 transition-transform"
          >
            <div className="bg-white p-8 shadow-xl rounded-lg relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500 opacity-0 group-hover:opacity-75 transition-all duration-500 rounded-lg"></div>
              <FaUsers className="text-pink-600 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10 text-pink-600">
                Tech Updates
              </h3>
              <p className="relative z-10 text-gray-600">
                Get the latest on tech innovations and trends.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <p className="text-lg text-gray-600 mb-4">
                "Tech-Gig helped me level up my skills and land my dream job!"
              </p>
              <h4 className="font-semibold text-indigo-600">
                Jane Doe, Developer
              </h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <p className="text-lg text-gray-600 mb-4">
                "The best platform for learning both theoretical and practical
                knowledge."
              </p>
              <h4 className="font-semibold text-purple-600">
                John Smith, Educator
              </h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <p className="text-lg text-gray-600 mb-4">
                "A one-stop destination for tech enthusiasts and learners!"
              </p>
              <h4 className="font-semibold text-pink-600">
                Sarah Lee, Entrepreneur
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
