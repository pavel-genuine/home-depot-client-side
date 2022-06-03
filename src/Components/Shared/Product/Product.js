import Carousel from 'nuka-carousel';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, name, img, img2, img3, description, price, minQuantity, availableQuantity } = props?.item

    const navigate = useNavigate()

    const purchaseProduct = (_id) => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div >

            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <Carousel
                    wrapAround={true}
                    // autoplay={true}
                    slidesToShow={1}
                >
                    <img className='img' src={img} />
                    <img className='img' src={img2} />
                    <img className='img' src={img3} />

                </Carousel>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p title={description}>{description?.slice(0, 200)}...</p>
                    <p className="font-semibold">
                        Price : Tk. {price}
                    </p>
                    <p className="font-semibold">
                        Min.Order-Quantity: {minQuantity} pcs
                    </p>
                    <p className="font-semibold">
                        Available-Quantity: {availableQuantity} pcs
                    </p>
                    <div className="card-actions justify-end">
                        <button onClick={() => purchaseProduct(_id)} className="btn ">Purchase Now</button>
                    
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Product;