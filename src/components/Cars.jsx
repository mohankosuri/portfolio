import React from 'react';

const Cars = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center p-6">
        <div className="text-red-600 text-xl font-bold">TOPCAR</div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">Home Page</a>
          <a href="#" className="text-gray-700 hover:text-black">Rent Car</a>
          <a href="#" className="text-gray-700 hover:text-black">Buy Car</a>
          <a href="#" className="text-gray-700 hover:text-black">News</a>
        </nav>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Sign in</button>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between p-6">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900">
            Buy, sell & rent <span className="text-red-600">reputable cars</span>
          </h1>
          <p className="text-gray-700 mt-4">
            Buy and sell reputable cars. Renting a car is easy and fast with Topcar
          </p>
          <div className="flex space-x-8 mt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-gray-700">Car brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">10k+</p>
              <p className="text-gray-700">Clients</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fhyundai%2Fcreta%2Fhyundai-creta.jpg%3Fv%3D92&w=3840&q=75"
            alt="Red sports car"
            className="w-full h-auto"
          />
        </div>
      </main>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 mx-6">
        <div className="flex space-x-4 mb-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Rent car</button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Buy car</button>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center bg-gray-100 p-2 rounded flex-1">
            <i className="fas fa-car text-gray-500 mr-2"></i>
            <input
              type="text"
              placeholder="Number of seat"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-2 rounded flex-1">
            <i className="fas fa-dollar-sign text-gray-500 mr-2"></i>
            <input
              type="text"
              placeholder="Price"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <div className="flex items-center bg-gray-100 p-2 rounded flex-1">
            <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
