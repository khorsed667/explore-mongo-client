import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const updateUser = useLoaderData()

    const handelUpdate = event =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email= form.email.value;
        console.log(name, email);
        const user = {name, email}

        fetch(`http://localhost:5000/users/${updateUser._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

    }
    return (
        <div>
            <h2>update user name {updateUser.name}</h2>
            <form onSubmit={handelUpdate}>
                <input type="text" name="name" defaultValue={updateUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={updateUser?.email} id="" />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;