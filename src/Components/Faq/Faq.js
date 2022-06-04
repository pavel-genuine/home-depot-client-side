import React from 'react';

const Faq = () => {
    return (

        <div  className='py-20'>
            <h1 className="text-5xl font-semibold text-center mb-5"> Frequently Ask Questions</h1>

            <div data-aos="fade-up" className="hero ">
                <div className="hero-content grid md:grid-cols-2 grid-cols-1 ">
                    <img src="https://pavel-genuine.github.io/party-center-bootstrap/images/FAQ.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className="collapse collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl  ">
                                What is your refund and cancellation policy?                            </div>
                            <div className="collapse-content">
                                <p>We have a flexible refund and cancellation policy for our
                                    valuable clients. Just inform us 3 weekdays prior your delivery</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl ">
                                How do you keep budgets on track?                            </div>
                            <div className="collapse-content">
                                <p>For budget flexibility e have many different customization
                                    option, please contact us directly for details</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-b-2">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl ">
                            How early do we need to start processing for orders?                           </div>
                            <div className="collapse-content">
                                <p>We recommend to take 1 week to avoid the rush issues</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-b-2 ">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl ">
                            What’s the difference between regular design and custom design?                           </div>
                            <div className="collapse-content">
                                <p>Regular designs are from our onboard catalogue and custom designs are from clients customize design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;