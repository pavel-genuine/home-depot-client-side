import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Loading from '../../Shared/Loading';
import Product from '../../Shared/Product/Product';


const FeatureProducts = () => {

    // useItems custom hook 
    const [items, setItems]=useItems([])

    if(items?.length===0){
        return <Loading></Loading>
    }
  
    return (
        <div   className='p-2 md:w-[80%] mx-auto ' >
            <div   className='grid md:grid-cols-3 grid-cols-1 gap-10   '>
             
                {
                items?.map(item=><Product item={item} key={item?._id}  ></Product>)
                }
            </div>
            
        </div>
    );
};

export default FeatureProducts;