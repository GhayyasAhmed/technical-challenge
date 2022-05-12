import React, {useState} from 'react'
import './Login.css'

import PropTypes from 'prop-types';

export default function Login({setToken}) {
  //  default user credentials
  let allUsers = [
    {Email: "ghayyas@gmail.com", Password: "abc123"},
    {Email: "farooq@gmail.com", password: "xyz98765"},
    {Email: "ali@gmail.com", Password: "123abc123"},
  ]
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(email, password);
    if (email === undefined || password === undefined){
      alert("Input fields cannot be empty");
    }
    for (let i = 0; i < allUsers.length; i++) {
      const user = allUsers[i];
      if(user.Email === email && user.Password === password){
           alert("Success! Credentials stored in session storage");
           const token = {
            email,
            password
          }
         setToken(token);
         break;

      }
      else{
        alert("Wrong email or passsword")
        break;
      }
    }
    
  }  
  return (
    <div className='login-wrapper'>
        <h1>Log In</h1>
        <br />
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" />
  </div>
  <div className="d-grid gap-2 col-10 mx-auto">
  <button type="submit" className="btn btn-primary mx-2">Login</button>
  </div>
  </form>
</div>
)
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}