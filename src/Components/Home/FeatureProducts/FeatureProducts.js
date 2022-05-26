import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Loading from '../../Shared/Loading';
import Product from '../../Shared/Product/Product';


const FeatureProducts = () => {

   
  
    return (
        <div className=''>
            <div  className='grid grid-cols-3 gap-10 m-10'>
             
                {
                items?.map(item=><Product item={item} key={item._id}  ></Product>).slice(items?.length-6,items?.length)
                }
            </div>
            
        </div>
    );
};

export default FeatureProducts;