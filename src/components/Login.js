import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Logged in successfully","success")
            
        }
        else{
            props.showAlert("Invalid email or password","danger");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const buttonHoverStyle = {
        backgroundColor: 'magenta',
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

    return (
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className='container border border-info rounded ' style={{padding:"50px",  width:"50%"}}>
            <form  onSubmit={handleSubmit}>
                <h2 className="text fw-bold " style={{fontFamily:"sans-serif",color:"violet"}}>Login</h2>
                <div id="emailHelp" className="form-text text-center mt-2 fw-bold">Login with email and password </div>
                <div className="mb-3 mt-3">
                    {/* <label htmlFor="email" className="form-label">Email address</label> */}
                    <input type="email" className="form-control" value={credentials.email} placeholder='Email Address*' onChange={onChange} id="email" name="email" aria-describedby="emailHelp" autoComplete="off" />
                    
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="password" className="form-label">Password</label> */}
                    <input type="password" className="form-control" value={credentials.password} placeholder='Password*' onChange={onChange} name="password" id="password" autoComplete="off" />
                </div>

                <button type="submit" className="btn btn-primary text-center" 
                onMouseEnter={(e) => {e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;}}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                  }}>Login</button>
            </form>
            <p className="text-center">Don't have an Account?<Link className="text text-primary mx-1" to="/signup" >register</Link></p>
            
        </div>
        </div>
    )
}

export default Login
