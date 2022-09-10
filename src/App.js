import React, { useState } from 'react'

// component form
import RegistForm from './components/RegistForm';

// admin login function in test
function App() {

  const [user, setUser] = useState({name:"", email:"", password:"",confirmPassword:""});
  const [error, setError] = useState("");

  // Check for valid admin credentials
  const Registration = details => {
    console.log(details);

    if(details.password === details.confirmPassword)
    {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  // Logout button with default credential
  const Logout = () =>{
    setUser({name:"", email:""});
  }


  return (
    <div className="App">
     {(user.email !== "") ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span><span>{user.email}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
     ): (
      <RegistForm  Registration={Registration} error={error}/>
     )}
    </div>
  );
}

export default App;
