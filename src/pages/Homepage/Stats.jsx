import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white p-10'>
            <div className='container mx-auto px-2'>
                 {/* Heading */}
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-4xl font-bold">
      Trusted By Millions, Built For You
    </h1>
  </div>

  {/* Stats Section */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    
    {/* Item 1 */}
    <div>
      <p className="text-sm opacity-80">Total Downloads</p>
      <h2 className="text-4xl font-bold mt-2">29.6M</h2>
      <p className="text-xs mt-2 opacity-70">21% More Than Last Month</p>
    </div>

    {/* Item 2 */}
    <div>
      <p className="text-sm opacity-80">Total Reviews</p>
      <h2 className="text-4xl font-bold mt-2">906K</h2>
      <p className="text-xs mt-2 opacity-70">46% More Than Last Month</p>
    </div>

    {/* Item 3 */}
    <div>
      <p className="text-sm opacity-80">Active Apps</p>
      <h2 className="text-4xl font-bold mt-2">132+</h2>
      <p className="text-xs mt-2 opacity-70">31 More Will Launch</p>
    </div>

  </div>
            </div>
        </div>
    );
};

export default Stats;