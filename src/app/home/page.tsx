import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

{/* Card Grid Section */}
<div className="mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-6 justify-center">
          {/* Looping 7 Cards */}
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="card bg-slate-300 shadow-xl w-full mx-auto">
              <div className="card-body">
                <h2 className="card-title">Card {index + 1}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;