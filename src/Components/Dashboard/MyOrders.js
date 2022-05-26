import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useItems from '../Hooks/useItems';

const MyOrders = () => {

    const [user] = useAuthState(auth)

    const [myOrders, setMyOrders] = useState([])



    const navigate = useNavigate()



    const handleDeleteOne = id => {
        const confirmation = window.confirm('Are you sure to delete?');
        if (confirmation) {
            const url = `https://frozen-beyond-80162.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',

            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = myOrders?.filter(item => item?._id !== id);
                    setMyOrders(remainingItems);
                })
        }
    }

 

    useEffect(() => {

        const getMyOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/user-orders?email=${email}`;
            // try{
            const { data } = await axios.get(url, {
                // headers:{
                //     authorization :`Bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            setMyOrders(data);
            // }
            // catch(error){
            //     console.log(error.message);
            //     if(error.response.status === 401 || error.response.status === 403){
            //         // signOut(auth);
            //         // navigate('/sign-in')
            //     }
            // }
        }
        getMyOrders();
        console.log(myOrders);

    }, [user])



    return (
        <div className='row w-75 mx-auto ' style={{ height: '100vh' }} >
            <p className='m-5'>My Orders length : {myOrders?.length}</p>

            <div className='grid  md:grid-cols-4 grid-cols-1 gap-2'>
                {
                    myOrders?.map(item =>

                        <div key={item._id} style={{ width: '90%' }} className='my-2 shadow-lg mb-5 p-3' >
                            {/* <img style={{ width: '30%' }} src={item?.product?.img} alt="" /> */}
                            <p className='font-semibold'>Name : {item?.product?.name?item?.product?.name:item?.name}</p>
                            <p>Unit Price : tk. {item?.product?.price?item?.product?.price:item?.price}</p>
                            <p>Quantity : {item?.product?.quantity?item?.product?.quantity:item?.quantity} pcs</p>

                            <button className='btn btn-sm btn-error mr-5 mt-3 ' onClick={() => handleDeleteOne(item?._id)}>Delete</button>
                            
                             {
                                  item?.paid?<button className='btn btn-sm btn-success'>Paid !</button> : <Link to={`/payment/${item?.id}`} ><button className='btn btn-sm btn-primary'>Pay</button></Link>
                             }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;