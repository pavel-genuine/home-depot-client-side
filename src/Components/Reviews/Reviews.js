import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
         <div className='grid grid-cols-1 md:grid-cols-3 gap-2 m-5'>
         {
               reviews.map(review=>
               
                <div className='shadow-md m-4 p-4'>
                    <p>Review: {review?.review}</p>
                  
                    {review?.rating >=5?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></React.Fragment> :''}
            
            {review?.rating==4?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></React.Fragment> :''} 
            
            {review?.rating==3?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></React.Fragment> :''} 
           
            {review?.rating==2?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
           <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></React.Fragment> :''} 
            {review?.rating==1?<React.Fragment><h5 style={{margin:'10px 2px'}}>Rating :</h5><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
           </React.Fragment> :''} 
           
          
                </div>)
           }
         </div>
        </div>
    );
};

export default Reviews;