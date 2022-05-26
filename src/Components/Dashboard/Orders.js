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
            // console.log(data);
            setOrders(data)})
    },[orders]
    
    )

    
    const handleDeleteOne = id => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',

            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = orders?.filter(item => item?._id !== id);
                    setOrders(remainingItems);
                })
        }
    }


    const doShipped =(id)=>{
        
        // const data = {
        //     status:'shipped'
        // }
        const url = `http://localhost:5000/shipped/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log( result))    

        
    }

    return (
        <div className='m-10'>
           Orders length :{orders?.length}
         <div className='grid  md:grid-cols-4 grid-cols-1 gap-2'>
         {
               orders.map((order,index)=>
                <div key={index} className='shadow-lg p-10 m-5'>
                    <p className='font-semibold'>Name: {order?.name}</p>
                    <p>Unit Price : {order?.price}</p>
                    
                    <p>Quantity : {order?.quantity}</p>
                {
                     !order?.paid && <button className='btn btn-sm btn-primary mt-2'>Unpaid</button>

                }
                {
                    order?.paid && !order?.status && <button onClick={()=>doShipped(order?._id)} className='btn btn-sm btn-error mt-2'>Pending</button> 
                }
                {
                    order?.status && <button className='btn btn-sm btn-success mt-2'>Shipped</button>
                }

                {
                     !order?.paid &&  <button className='btn btn-sm btn-error mr-5 mt-3 ' onClick={() => handleDeleteOne(order?._id)}>Delete</button>

                }


                </div>)
           }
         </div>
        </div>
    );
};

export default Orders;