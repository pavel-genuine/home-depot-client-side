import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = (data, e) => {
        // console.log(user, data);
        e.target.reset();

        const url = `http://localhost:5000/tool`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log( result))    

    }


    return (
        <div className='w-80 mx-auto mt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='font-semibold'>Add A Tool</h5>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Tool Name</span>
                            </label>
                            <input
                                type="text" 

                                placeholder='Tool Name'
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
                                <span className="label-text">Image Link</span>
                            </label>
                            <input
                                type="text" 

                                placeholder='Image Link'
                                className="input input-bordered w-full max-w-xs"
                                {...register("img")}
                            />
                            
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Min. Quantity</span>
                            </label>
                            <input
                                type="text" 
                                placeholder='Min. Quantity'
                                className="input input-bordered w-full max-w-xs"
                                {...register("minQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Min. Quantity is Required'
                                    }
                                    
                                })}
                            />
                            <label className="label">
                                {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type=""
                                placeholder='Available Quantity'
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Min Order Quantity</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Min Order Quantity"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Min order quantity is Required'
                                    }
                                })}
                            />
                           

                        </div>
                        <input className='btn mt-10 text-white font-bold py-2 px-4 rounded' type="submit" value='Add Tool' />

                    </form>
        </div>
    );
};

export default AddProduct;