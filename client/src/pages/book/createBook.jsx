import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { toast } from 'react-hot-toast';
import noImageSelected from '../../assets/noimage.jpg'


function createBook() {
    const navigate= useNavigate();
    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")
    const [thumb, setthumb] = useState(noImageSelected)
    const [image, setimage] = useState("")
    const [cookies, _] = useCookies(["access_token"])
const createBookHandle= async (e)=>{
    e.preventDefault();
        const formData= new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", image);
        formData.append("author", author);
       const response=  await axios.post('http://localhost:4000/api/books/create',formData, { headers: { authorization: cookies.access_token }});
     
        toast.success(`Book created successfully`);
       navigate('/books')
        
}

const onImageChange= (e)=>{
        if(e.target.files && e.target.files[0]){
            setthumb(URL.createObjectURL(e.target.files[0]))
            setimage(e.target.files[0])
        }
}
  
  return (
    <div className='container' style={{marginTop: "5rem"}}>
        <div className="card">
            <div className="card-header">
               <div className="d-flex">
               <h3>Create New Book </h3>
                <Link to='/books' className='btn btn-primary ms-auto'> Back </Link>
               </div>
            </div>
            <form action="" onSubmit={createBookHandle} encType='multipart-form-data'>
                <div className="card-body">
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter Book Title</label>
                    <input type="text" className='form-control' placeholder='Enter Book Title' onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter Book Author</label>
                    <input type="text" className='form-control' placeholder='Enter Book Author' onChange={(e)=>{setauthor(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Choose Book Type</label>
                    <select className='form-control drop-down' onChange={(e)=>{setcategory(e.target.value)}}>
                        <option >Choose book type</option>
                        <option value="story">Story</option>
                        <option value="motivation">Motivation</option>
                        <option value="crime">Crime</option>
                        <option value="fiction">Fiction</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter Description</label>
                    <textarea className="form-control" id="" cols="30" rows="4" onChange={(e)=>{setdescription(e.target.value)}}></textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="form-label" className='form-label fw-bolder fs-5'>Upload Book Image</label>
                    <img src={thumb} alt="" style={{width:"40%", height:"220px"}} className='mb-2'/>
                    {/* <input type="file" multiple  className='form-control' onChange={(e)=>setimage(e.target.files[0])}/> */}
                    <input type="file" multiple  className='form-control' onChange={onImageChange}/>
                </div>
                <div className="form-group mb-3">
                    <input type="submit" className='btn btn-primary' value="Create" />
                </div>
            </div>
        </form>
            
        </div>
    </div>
  )
}

export default createBook