import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div  className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Contact us </h1>
                        <p className="py-6">We're here to hear you..</p>
                        <address className='mt-5'>
                            <h5 className='font-semibold'>Address :</h5>
                            <h6>
                                House : 19 A,
                                Road : Soanrgoan Janapad,
                                Sector : 07,
                            </h6>
                            <h6>
                                Uttara, Dhaka-1230, Banagladesh
                            </h6>
                            <h6 className='font-semibold'>
                                Cell : 017777777777777
                            </h6 >
                            <h6  className='font-semibold' >
                                Email : feedback@homedepot.com
                            </h6>
                        </address>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control" >
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                                <textarea style={{ height: '100%' }} name="" id="" cols="30" rows="10" type="text" placeholder="Your Message..." className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;