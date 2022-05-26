import React from 'react';

const Portfolio = () => {
    return (
        <div  className="p-10 h-[120vh] md:h-[50vh]">
            <div>

                <div>
                    <h4 className='text-2xl'>My Self</h4>
                    <p>I'm Joynul Abedin Pavel, a CSE student from NSU. I want to start a tech based start-up soon which will work to solve some burning problems of our country.
                        It's now at a brainstorming stage. One of BUET students,  my co-partner and I are planning to work with supply chain related problems to solve and make smooth using technology.
                        I supposed to work for skeleton part especially website development and my partner will work to integrate the system with deep learning technology.
                        Now we all are building and sharpening our skills to build something interesting.


                        We're very passionate and dedicated about this project and hoping a remarkable achievement. </p>
                    <br /> 
                    <p>
                        I have some decent skills on web development and problem solvings.
                    </p>
                    <br />
                    <div>
                        <p>
                            Please click the buttons to see some of my works :

                        </p> <br />
                        <button className='btn'><p><a href="https://full-stack-11.web.app/"> link 1</a></p>
                        </button>      
                        <button className='btn mx-5'>
                            <p><a href="https://fir-red-onion.web.app/"> link 2</a></p>
                        </button> 
                        <button className='btn'>
                            <p><a href="https://assignment-9-routes.netlify.app/"> link 3</a></p>

                        </button>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Portfolio;