import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        fetch('https://frozen-beyond-80162.herokuapp.com/tools')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[items]
        
    )


    return [items, setItems]

};

export default useItems;

