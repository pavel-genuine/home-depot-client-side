import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MakeAdmin = () => {

    const [user]=useAuthState(auth)
    const [profile,setProfile]=useState()

    const [users, setUsers]=useState([]);
     const email=user?.email

     useEffect(() => {
        const email =user?.email
        fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data => {setProfile(data)
            })
    }, [])

     const data={
         email:profile?.email,
         name:profile?.name,
         phone:profile?.phone,
         
     }

     const makeAdmin = (data) => {
    const url = `http://localhost:5000/user/admin/${email}`
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
           // authorization: `Bearer ${localStorage.getItem('accessToken')}`

        },
        body: JSON.stringify(data)

    })
        .then(res => res.json())
        .then(result => console.log( result))   
    
     }
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)})
    },[users])

    if(users.length===0){
        return <Loading></Loading>
    }

    return (
        <div>
        <h2 className="text-2xl">All Users: {users?.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=>
                        <tr>
                        <th>1</th>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>{user?.phone}</td>
                        <td>{user?.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                      </tr>
                       )
                   }
                </tbody>
            </table>
        </div>
    </div>
);
    
};

export default MakeAdmin;