import axios from 'axios';
import './App.css'
import { useState,useEffect } from 'react'
// import axios from 'axios'

function App() {

  const [users,SetUsers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3100/users')
    .then(response => SetUsers(response.data))
    .catch(error => console.error(error))
  })


  return (
    <>
       

<div className='card d-flex justify-content-center align-content-center'>
<form >
  <label>name</label>
  <input type='text' className='form-control'/>
  <label>Email</label>
  <input type='email' className='form-control'/>

  <label>Password</label>
    <input type='password' className='form-control'/>

    <button onClick={()=> console.log("data save successfully")} className='btn btn-primary'>save</button>
</form>
</div>



          


              <ul className='list-group'>
                  {users.map(user => 
                    <li key={user.id} className='list-group-item'>
                     <b> {user.id} , {user.name}</b>
                    </li>
                  )}
              </ul>
        
    </>
  )
}

export default App
