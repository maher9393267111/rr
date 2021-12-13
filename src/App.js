
import { app } from './components/context/firebase.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, {useState} from 'react'
import Login from './components/pages/login'

function App() {

  const [email, setEmail] = useState('');
const [password, setPassword] = useState('')

const handleAction = (id) => {



    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response)
      })
   }
}




  return (

 <Router>
      <div className="App">
        <>
        AUTHENICATION
          <Routes>
            <Route path='/login' element={<Login  setEmail={setEmail} email={email} password={password}
                  setPassword={setPassword}   title="Login" handleAction={()=> handleAction(1)} />} />
            <Route path='/register' element={<Login  setEmail={setEmail} email={email} password={password}
                  setPassword={setPassword} title="Register" handleAction={()=> handleAction(2)} />} />
          </Routes>
        </>
      </div>
    </Router>



  )
}

export default App











































// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   withRouter,
//   Link,
//   useLocation,
// } from "react-router-dom";

// import { createContext, useContext } from "react";
// import { useState } from "react";
// import Login from './components/mainComponent/login.js'
// function App() {

//   return(
//  <Router>

//    <div className="App">

// <div className="app">

//     <Routes>
//         <Route path="/" element={<Login />} />
//     </Routes>

// </div>





//   </div>;
//   </Router>
//       )
// }

// export default App;











{
  /* <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Contact />} />
        <Route path="/examp" element={<Examp />} />
        <Route path="/products/:productsid" element={<Product />} />



</Routes> */
}
