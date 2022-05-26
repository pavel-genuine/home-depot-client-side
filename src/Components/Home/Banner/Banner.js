import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full" >
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" />
        </div>
      </div>
      
     <div style={{width:'100%'}} className='flex justify-center items-center '>
     <div style={{width:'100%'}} class=" flex justify-center items-center  card card-compact w-96 bg-base-100 shadow-xl ">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            {/* <button class="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div> 
       </div>     
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Banner;