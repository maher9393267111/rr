import React from 'react'
import Button from './button.js'
export default function login({title,handleAction,setPassword,setEmail,email ,password}) {
    return (
        <div style={{width:'400px',border:'2px solid black',margin:'55px auto' ,borderRadius:'10px'}}>
<form className="form-inline" action="/action_page.php">
    <label htmlFor="email2" className="mb-2 mr-sm-2">Email:</label>
    <input value={email}   onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mb-2 mr-sm-2" id="email2" placeholder="Enter email" name="email"/>
    <label htmlFor="pwd2" className="mb-2 mr-sm-2">Password:</label>
    <input  value={password}  onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mb-2 mr-sm-2" id="pwd2" placeholder="Enter password" name="pswd"/>
    <div className="form-check mb-2 mr-sm-2">

    </div>
    <Button title={title} handleAction={handleAction} />
    {/* <button type="submit" className="btn btn-primary mb-2">Submit</button> */}
  </form>


        </div>
    )
}
