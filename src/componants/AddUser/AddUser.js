import React from 'react';

const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name , email};


        // send data to the server with post request

        

fetch('http://localhost:5000/user', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  alert('users added succesfully');
  event.target.reset()
})
    }   
    
    return (
        <div>
            <h2>Add user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text"required name='name'placeholder='name' />
                <br />
                <input type="email"required name='email'placeholder='email' />
                <br />
                <input type="submit" value="Adduser" />
            </form>
        </div>
    );
};

export default AddUser;