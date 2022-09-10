import React, { useState } from 'react'

export default function RegisterForm( Registration, error ) {

    const [reg, setReg] = useState({name: "", email:"", password:"", confirmPassword: ""});


    const regnHandler = e =>{
        e.preventDefault();
    
        Registration(reg);
      }

  return (
    <form onSubmit={regnHandler}>
        <div className="form-inner">
            <h2>Registration</h2>
            {(error != "") ? (<div className="error">{error}</div>): ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setReg({...reg, name: e.target.value})} value={reg.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setReg({...reg, email: e.target.value})} value={reg.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setReg({...reg, password: e.target.value})} value={reg.password}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Confirm Password:</label>
                <input type="password" name="password" id="password" onChange={e => setReg({...reg, confirmPassword: e.target.value})} value={reg.confirmPassword}/>
            </div>
            <input type="submit" value="CREATE" />
        </div>
    </form>
  )
}
