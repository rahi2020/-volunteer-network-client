import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

// const handleRegister = document.getElementById('registerNow');
// handleRegister.addEventListener('click', () => {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const date = document.getElementById('date');
//     const description = document.getElementById('Description');
//     const library = document.getElementById('library');
//     console.log(name, email, date, description, library);
// })



const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [data, setData] = useState({})
    const handleRegister = () => {
         setData(data)
         console.log(data);
         fetch('http://localhost:5000/addRegister', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(res => {
             if (res) {
                 alert('Volunteers added')
             }
         })
    }
    return (
        <div className="App">
           <form action="/addRegistration">
                <h1>Register as a Volunteer</h1>
                <input type="text" id="name" placeholder="Full Name" value={loggedInUser.name} required/>
                <br/><br/>
                <input type="email" id="email" placeholder="Username or Email" value={loggedInUser.email}  required/>
                <br/><br/>
                <input type="date" id="date" placeholder="Date"  required/>
                <br/><br/>
                <input type="text" id="description" placeholder="Description" required/>
                <br/><br/>
                <input type="text" id="library" placeholder="Organize books at the library." required/>
                <br/><br/>
                
            </form>
            <button onClick={handleRegister} id="registerNow" className="btn btn-primary">Registration</button>
        </div>
    );
};

export default Register;