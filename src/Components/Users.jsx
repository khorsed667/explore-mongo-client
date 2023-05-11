import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] =useState(loadedUsers)

    const handelDelete = id =>{
        console.log('userID', id);
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted Acoount successfully')
                const remaining = users.filter(usr => usr._id !== id);
                setUsers(remaining)
            }
        })
    }

    return (
        <div>
            <h2>total users: {users.length}</h2>
            {
                users.map(usr => <p
                key={usr._id}
                >{usr.name}: {usr.email} <Link to={`/update/${usr._id}`}><button>Update</button></Link> <button
                onClick={()=> handelDelete(usr._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Users;