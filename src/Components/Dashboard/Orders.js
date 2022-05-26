import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders]=useState([]);


    

    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data)})
    },[orders]
        
    )

    return (
        <div className='m-10'>
           Orders length :{orders?.length}
         <div className='grid  md:grid-cols-4 grid-cols-1 gap-2'>
         {
               orders.map(order=>
                <div className='shadow-lg p-10 m-5'>
                    <p className='font-semibold'>Name: {order?.product? order?.product?.name:order?.name}</p>
                    <p>Unit Price : {order?.product? order?.product?.price:order?.price}</p>
                    
                    <p>Quantity : {order?.product?order?.product?.quantity:order?.quantity}</p>
                {
                    order?.payment? <button className='btn btn-sm btn-success mt-2'>Pending</button> :<button className='btn btn-sm btn-primary mt-2'>Unpaid</button>

                }
                </div>)
           }
         </div>
        </div>
    );
};

export default Orders;