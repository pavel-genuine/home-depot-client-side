import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Reviews = () => {
    const [reviews, setReviews]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[reviews]
        
    )



    return (
        <div className='m-10'>
           review length :{reviews?.length}
         <div className='grid grid-cols-3 gap-2 m-5'>
         {
               reviews.map(review=>
               
                <div>
                    <p>Review: {review?.review}</p>
                    <p>Rating : {review?.rating >=5 &&<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star"  />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star"checked />
</div>}</p>
                </div>)
           }
         </div>
        </div>
    );
};

export default Reviews;