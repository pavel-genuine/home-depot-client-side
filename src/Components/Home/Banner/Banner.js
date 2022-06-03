import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div class="carousel w-full mb-20">
      <div id="slide1" class="carousel-item relative h-[80vh] flex justify-center text-center w-full">

        <div>
          <h1 className='text-6xl font-bold mt-20'>
            Welcome to Home Depot
          </h1>
          <Link to=''><button class="btn btn-outline mt-5 ">Explore</button></Link>
        </div>


        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative h-[80vh] flex justify-center text-center w-full">
        <div>
          <h1 className='text-6xl font-bold mt-20'>
            Welcome to Home Depot
          </h1>
          <Link to=''><button class="btn btn-outline mt-5 ">Explore</button></Link>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative h-[80vh] flex justify-center text-center w-full">
        <div>
          <h1 className='text-6xl text-white font-bold mt-20'>
            Welcome to Home Depot
          </h1>
          <Link to=''><button class="btn bg-white btn-outline mt-5 ">Explore</button></Link>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative h-[80vh] flex justify-center text-center w-full">

        <div>
          <h1 className='text-6xl font-bold mt-20'>
            Welcome to Home Depot
          </h1>
          <Link to=''><button class="btn btn-outline mt-5 ">Explore</button></Link>
        </div>

        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>

  );
};

export default Banner;