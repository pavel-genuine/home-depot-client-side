import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user]=useAuthState(auth)
    const [profile,setProfile]=useState()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const email =user?.email
    useEffect(() => {
        
        fetch(`http://localhost:5000/users?email=${email}`)
            .then(res => res.json())
            .then(data => {setProfile(data)
            console.log(data);
        })
    }, [])


    const onSubmit = (data, e) => {
        // console.log(user, data);
        e.target.reset();

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
            
            // fetch(`http://localhost:5000/user`, {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })
            //     .then(res => res.json())
            //     .then(result => console.log( result)) 

    }


    return (
       <div>
            <div className="card lg:card-side bg-base-100  mx-auto mt-10 " style={{width:'80%'}}>
            <div className="card-body">
            <p className="font-bold">My Profile:</p>
               
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text" 
                                placeholder={` (You can update it...)`}
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
                                value={user?.email}
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
                                placeholder="Phone number"
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
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Address'
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("address2")}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Education'
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("education")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Social Profile Links</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Social Profile Link'
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("social1")}
                            />
                            <input
                                type="text"
                                placeholder='Social Profile Link'
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("social2")}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Others Info</span>
                            </label>
                            <input
                                type="text"
                                placeholder='Others Info'
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("others")}
                            />
                        </div>
                        <input className='btn mt-10 text-white font-bold py-2 px-4 rounded' type="submit" value='Update Profile ' />

                    </form>
        </div>
        </div>
       </div>
        
        )

}
export default MyProfile;