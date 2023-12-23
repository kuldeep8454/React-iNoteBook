import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import signupLogo from './signup.png';
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [ data, setData ] = useState([]);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('https://inotebook-backend-z8cz.onrender.com/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/');
      props.showAlert("Account created successfully","success")
      const newData = {name, email, password}
      console.log(name, email, password);
      setData([...data, newData])
    } else {
      props.showAlert("Sorry, the email already exists!","danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };
  const signupStyle = {
    height: "120px",
    backgroundColor: 'white',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: 'cyan',
  };

  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    
    <div style={containerStyle} className="container container border border-info rounded">
      <img className="item-center rounded-circle img-fluid" src={signupLogo}   alt="Signup Logo" style={signupStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = signupStyle.backgroundColor;
          }} />

      <form onSubmit={handleSubmit} className="signup-form">
      <h2 className="text fw-bold text-dark " style={{fontFamily:"sans-serif"}}>Signup</h2>
      <h5 className="text fw-bold text-center " style={{fontFamily:"sans-serif",color:"magenta"}}>Creat a new Account</h5>
        <div className="mb-3">
        <div id="name" className="form-text mt-2 text-center fw-bold">
            Use your email to create new account
          </div>
          
          <input
          className=" mt-3"
            type="text"
            style={inputStyle}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="name"
            placeholder='Username*'
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            style={inputStyle}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder='Email address*'
          />
        </div>
        <div className="mb-3">
          
          <input
            type="password"
            style={inputStyle}
            onChange={onChange}
            name="password"
            id="password"
            placeholder='Password*'
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            style={inputStyle}
            onChange={onChange}
            name="cpassword"
            id="cpassword"
            placeholder='Confirm Password*'
            minLength={5}
            required
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
          }}
        >
          Submit
        </button>
      </form>
      <p className="text-center">Have an Account?<Link className="text text-primary mx-1" to="/login" >Login</Link></p>
    </div>
    </div>
   
  );
};

export default Signup;

// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//     const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword: ""}) 
//     let navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const {name, email, password} = credentials;
//         const response = await fetch("http://localhost:5000/api/auth/createuser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name, email, password})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken); 
//             navigate("/");

//         }
//         else{
//             alert("Sorry Email already exist!");
//         }
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }
//     return (
//         <div className="container">
//             <form  onSubmit={handleSubmit}>
//             <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Full Name</label>
//                     <input type="text" className="form-control"  onChange={onChange} id="name" name="name" aria-describedby="name" />
//                     <div id="name" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control"  onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control"  onChange={onChange} name="password" id="password" minLength={5} required/>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//                     <input type="password" className="form-control"  onChange={onChange} name="cpassword" id="cpassword" minLength={5} required/>
//                 </div>

//                 <button type="submit" className=" minLength={5}brequiredtn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Signup
