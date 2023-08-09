import React, { useState,} from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';

function register() {

        const navigate= useNavigate();
        const [name, setname] = useState("")
        const [email, setemail] = useState("")
        const [password, setpassword] = useState("");

    const registerHandler= async (e)=>{
        e.preventDefault();
        // console.log(name, email, password)
        const baseUrl= "http://localhost:4000/api/auth/register";
        const response= await axios.post(baseUrl,{name, email, password});
        const data= response.data;
            if(data.error){
                 toast.error(data.error);
            }
            else{
                toast.success(data.success);
            navigate('/login')
            }
            
    }



  return (
    <>
    <div className='container' style={{width: "30rem", marginTop: "10rem"}}>
        <div className="card">
            <div className="card-header">
               <div className="d-flex">
               <h3>Register </h3>
               </div>
            </div>
            <form action="" onSubmit={registerHandler}>
                <div className="card-body">
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter your name</label>
                    <input type="text" className='form-control' placeholder='Enter your name'  onChange={(e)=>{setname(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter your email</label>
                    <input type="email" className='form-control' placeholder='Enter your email'  onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter password</label>
                    <input type="password" className='form-control' placeholder='Enter password ' onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <input type="submit" className='btn btn-primary' value="Register" />
                </div>
            </div>
        </form>
        <p className='mx-3'>Already have an account?  <Link to="/login">login here</Link> </p>
            
        </div>
    </div>
    </>
  )
}

export default register