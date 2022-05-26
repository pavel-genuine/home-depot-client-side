import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        // console.log(user, data);
        e.target.reset();

        const url = `http://localhost:5000/review`
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
             <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give A Review</span>
                            </label>
                            {/* <textarea name="" id="" cols="30" rows="5"></textarea> */}
                            <textarea
                                type="text" cols="30" rows="10"
                               placeholder='Give A Review'
                                className="border-2 p-2 w-full max-w-xs mb-2"
                                {...register("review", {
                                    required: {
                                        value: true,
                                    }
                                })}
                            />
                </div>
             <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give Rating</span>
                            </label>
                            <input
                                type="number"
                               placeholder='Give Rating'
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("rating")}
                                
                            />
                </div>
                <input className='btn mt-10 text-white font-bold py-2 px-4 rounded' type="submit" value='Submit Review ' />
                </form>
        </div>
    );
};

export default AddReview;