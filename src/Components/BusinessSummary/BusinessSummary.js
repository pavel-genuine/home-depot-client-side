import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center'>
            <h1 className='text-6xl  font-semibold mt-7 text-blue-800'>We Grow With Your Trust... </h1>

            <div className="stats shadow-lg mt-10 " style={{width:'90%'}}>
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Reviews</div>
    <div className="stat-value text-primary">2.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value text-secondary">100M+</div>
    <div className="stat-desc">15% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        
      </div>
    </div>
    <div className="stat-value">91%</div>
    <div className="stat-title">Shipment done</div>
    <div className="stat-desc text-secondary">Thousands in pipeline</div>
  </div>
  
</div>


<div className="stats border-2 text mt-10 " style={{width:'90%'}}>
  
  <div className="stat">
    <div className="stat-title">Have any query ?</div>
    <div className="stat-value">Egerly awiating...</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Contact Us</button>
    </div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Avail Exciting Offer Now !</div>
    <div className="stat-value">30% 0ff On First order</div>
    <div className="stat-actions">
      <button className="btn btn-sm">Avail Now</button>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default BusinessSummary;