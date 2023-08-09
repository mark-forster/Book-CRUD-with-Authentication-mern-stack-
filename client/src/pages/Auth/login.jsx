import React, { useState,} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { useCookies } from 'react-cookie'
import axios from 'axios';

function login() {
        const navigate= useNavigate();
        const [email, setemail] = useState("")
        const [password, setpassword] = useState("")
        const [_, setCookies] = useCookies(["access_token"])


    const loginHandle= async (e) => {
        e.preventDefault();
        const response= await axios.post("http://localhost:4000/api/auth/login",{ email, password});
        const data= response.data;
        if( data.error){
            toast.error(data.error);
        }
        else{
            setCookies("access_token", data.token)
            toast.success(data.success);
            window.localStorage.setItem("UserId", data.userId); 
            navigate("/")
        }
    }

  return (
    <>
     <div className='container' style={{width: "30rem", marginTop: "10rem"}}>
        <div className="card">
            <div className="card-header">
               <div className="d-flex">
               <h3>Login </h3>
               </div>
            </div>
            <form action="" onSubmit={loginHandle}>
                <div className="card-body">
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter your email</label>
                    <input type="email" className='form-control' placeholder='Enter your email' onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter password</label>
                    <input type="password" className='form-control' placeholder='Enter password'  onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <input type="submit" className='btn btn-primary' value="Login" />
                </div>
            </div>
        </form>
            <p className='mx-3'>Create New Account? <Link to="/register">register</Link> </p>
            
        </div>
    </div>
    </>
  )
}

export default login