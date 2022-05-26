import React, { useEffect, useState } from 'react';
import useItems from '../Hooks/useItems';

const ManageProduct = () => {

  const [products, setProducts]=useItems()

  


  const handleDeleteOne = id => {
    const confirmation = window.confirm('Are you sure to delete?');
    if (confirmation) {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url, {
            method: 'DELETE',

        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItems = products?.filter(item => item?._id !== id);
                setProducts(remainingItems);
            })
    }
}


    return (
      <div className='row w-75 mx-auto ' style={{ height: '100vh' }} >
      <p className='m-5'>Products length : {products.length}</p>

      <div className='grid grid-cols-3 gap-2'>
          {
              products?.map(item =>

                  <div  key={item._id} style={{ width: '90%' }} className='my-2 p-3  shadow-lg' >
                      {/* <img style={{ width: '30%' }} src={item?.product?.img} alt="" /> */}
                      <p className='font-semibold'>Name : {item?.name}</p>
                      <p>Unit Price : tk. {item?.price}</p>
                      <p>Quantity : {item?.quantity} pcs</p>

                      <button className='btn btn-sm btn-error mt-3' onClick={() => handleDeleteOne(item?._id)}>Delete</button>

                  </div>
              )
          }
      </div>
  </div>
    );
};

export default ManageProduct;