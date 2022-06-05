import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [users , setUsers] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data.users))
},[])


const handleUserDelete = (id)=>{
    const procced = window.confirm('are you sure delete this data');
    if(procced){
        console.log('deleting user with id',id);
            const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: "DELETE"
            })
          .then(res => res.json())
          .then(data=>{
              console.log(data);
              if(data.deletedCount > 0){
                  console.log('deleted');
                  const remaining = users.filter(user=>user._id !== id)
                  setUsers(remaining);
              }

          })
    }
    


}

    return (
        <div>
            <h2>home:{users.length}</h2>
            <ul>
                {
         users.map(user=><li key={user._id}>name:{user.name}   email:{user.email} <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={()=>handleUserDelete(user._id)}>x</button></li>)
                    
                }
            </ul>
        </div>
    );
};

export default Home;