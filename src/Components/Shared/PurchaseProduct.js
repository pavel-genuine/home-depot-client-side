import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const PurchaseProduct = () => {

    const { id } = useParams()



    const [product, setProduct] = useState()

    const [addedQuantity, setAddedQuantity] = useState()
    const [decreasedQuantity, setDecreasedQuantity] = useState()

    let [quantity, setQuantity] = useState();


    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
              
           
    }, [])



     
    

    const decreaseQuantity = (e) => {
        setDecreasedQuantity(e.target.value)
        console.log(e.target.value)

    }

    const handleDecreaseQuantity = () => {
       

        if ( product?.minQuantity <=  parseInt(product?.quantity) - parseInt(decreasedQuantity) ) {
            product.quantity = parseInt(product?.quantity) - parseInt(decreasedQuantity)
            setQuantity(product?.quantity)
        }
        else if  ( product?.minQuantity > parseInt(product?.quantity) - parseInt(decreasedQuantity) ) {
            product.quantity = product?.minQuantity
            setQuantity(product?.quantity)

        }


        const url = `http://localhost:5000/purchase/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

            })

    }

    const addQuantity = (e) => {
        setAddedQuantity(e.target.value)
        console.log(e.target.value)

    }

    const handleAddQuantity = () => {

        if (product?.availableQuantity >= parseInt(product?.quantity) + parseInt(addedQuantity)) {
            product.quantity = parseInt(product?.quantity) + parseInt(addedQuantity)
            setQuantity(product?.quantity)
        }
        else if (product?.availableQuantity < parseInt(product?.quantity) + parseInt(addedQuantity)){
            product.quantity = product?.availableQuantity
            setQuantity(product?.quantity)
        }

        const url = `http://localhost:5000/purchase/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

            })

    }

    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)



    const onSubmit = (data, e) => {
        // console.log(user, data);
        e.target.reset();
        navigate(`/payment/${id}`)
 
        const email =user.email

        const url = `http://localhost:5000/user/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log( result))
        

            const url2 =`http://localhost:5000/order`
            //  const email=user.email

             const information ={
                 id:product._id,
                 name:product.name,
                 img:product.img,
                 description:product.description,
                 price:product.price,
                 minQuantity:product.minQuantity,
                 availableQuantity:product.availableQuantity,
                 quantity:product.quantity,
                 email:email,
                 paid:false,
                 transactionId:"0"
                 
             }
             
            fetch(url2,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(information)
            // body:JSON.stringify({product,email})
        })
        .then(res1=>res1.json())
        .then(result1=>console.log(result1,product))

    }



    return (
        <div>
            <div className='grid grid-cols-2 gap-0  '  >


                <div className="ml-40 mt-10 card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={product?.img} alt="tools" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product?.name}</h2>
                        <p className="font-semibold">Unit Price : tk. {product?.price} </p>
                        <p className="font-semibold">Quantity : {product?.quantity}</p>

                        <div className='grid grid-cols-2 gap-4 '>
                            <div>
                                <input onBlur={decreaseQuantity} type="number" name="Quantity" id="" className='border-2 mb-2 p-2' />
                                {product?.minQuantity >= parseInt(product?.quantity) ? <p className='text-red-400'>min.quantity : {product?.minQuantity}</p> : ''}

                                <div className="card-actions">
                                    <button onClick={() => handleDecreaseQuantity()} className='btn btn-success btn-sm'>Decrease Quantity</button>
                                </div>
                            </div>
                            <div>
                                <input onBlur={addQuantity} type="number" name="Quantity" id="" className='border-2 mb-2 p-2' />
                                {product?.availableQuantity <= parseInt(product?.quantity) ? <p className='text-red-400'>max.quantity : {product?.availableQuantity}</p> : ''}
                                <div className="card-actions">

                                    <button className='btn btn-primary btn-sm ' onClick={() => handleAddQuantity()} >Increase Quantity</button> <br /> <br />
                                </div>
                            </div>
                        </div>
                        <p className="font-semibold">Total Price : {product?.quantity * product?.price}</p>



                    </div>
                </div>

                <div className=' mt-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='font-semibold'>Billing Info</h5>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text" 
                                placeholder={`${user.displayName}  (You can update it..)`}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email" readOnly
                                value={user.email}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type=""
                                placeholder={`${user?.phoneNumber} (You can update it..)`}
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is Required'
                                    },
                                    pattern: {
                                        value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
                                        message: 'Provide a valid Phone Number'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Delivery Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Delivery Address"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Delivery Address is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <input
                                type="text"
                                placeholder="Delivery Address"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("address2")}
                            />

                        </div>
                        <input
                    disabled={product?.minQuantity > product?.quantity +parseInt(decreasedQuantity) -parseInt(decreasedQuantity) ||product?.availableQuantity < product?.quantity +  parseInt(addedQuantity) - parseInt(addedQuantity) ? true : false}

                        className='btn mt-10 text-white font-bold py-2 px-4 rounded' type="submit" value='Save Info & Place Order' />

                    </form>
                </div>


            </div>
            
         
        </div>
    );
};

export default PurchaseProduct;