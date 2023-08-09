import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useCookies } from 'react-cookie'




function updateBook() {

    const navigate= useNavigate ();
        // old data
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [author, setauthor] = useState("")
  const [category, setcategory] = useState("")
  const [image, setimage] = useState("")
const [cookies, _] = useCookies(["access_token"])



  const slugUrl = useParams();
  const baseUrl = `http://localhost:4000/api/books/${slugUrl.slug}`;
  const fetchData = async () => {
    try {
      const book = await axios.get(baseUrl);
      const data= book.data;
      settitle(data.title);
      setdescription(data.description);
      setauthor(data.author);
      setcategory(data.category);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])



// update Book
const updateBookHandle= async(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("author", author);
    await axios.put(`http://localhost:4000/api/books/${slugUrl.slug}`,formData, { headers: { authorization: cookies.access_token }});
    toast.success('Book updated successfully');
    navigate('/books')


}








  return (
    <div className='container' style={{marginTop:"5rem"}}>
        <div className="card">
            <div className="card-header">
               <div className="d-flex">
                <Link to='/books' className='btn btn-primary'> Back </Link>
               <h3 className='text-center mx-auto'> Update Book  </h3>
               </div>
            </div>
            <form action="" onSubmit={updateBookHandle}  encType='multipart-form-data'>
                <div className="card-body">
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter Book Title</label>
                    <input type="text" className='form-control' value={title} placeholder='Enter Book Title' onChange={(e)=>{settitle(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter Book Author</label>
                    <input type="text" className='form-control' value={author} placeholder='Enter Book Author' onChange={(e)=>{setauthor(e.target.value)}}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Choose Book Type</label>
                    <select className='form-control drop-down' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                        <option >Choose book type</option>
                        <option value="story">Story</option>
                        <option value="motivation">Motivation</option>
                        <option value="crime">Crime</option>
                        <option value="fiction">Fiction</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="label" className='form-label fw-bolder fs-5'>Enter Description</label>
                    <textarea className="form-control" id="" cols="30" rows="4" value={description} onChange={(e)=>{setdescription(e.target.value)}}>
                       
                    </textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="form-label" className='form-label fw-bolder fs-5'>Upload Book Image</label>
                    <input type="file" multiple  className='form-control' onChange={(e)=>setimage(e.target.files[0])}/>
                </div>
                <div className="form-group mb-3">
                    <input type="submit" className='btn btn-success' value="Update" />
                </div>
            </div>
        </form>
            
        </div>
    </div>
  )
}

export default updateBook