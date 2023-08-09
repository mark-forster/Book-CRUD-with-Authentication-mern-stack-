import React, {useState, useEffect} from 'react'
import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useCookies } from 'react-cookie'


function book() {
  const navigate = useNavigate();
    const [data, setdata] = useState([])

    const [cookies, _] = useCookies(["access_token"])



    const fetchData= async ()=>{
      try{
        let baseUrl= "http://localhost:4000/api/books"
       const books= await axios.get(baseUrl);
          setdata(books.data);
      }
      catch(err){
        console.log(err);
      }
    }
  useEffect(() =>{
    fetchData();
  },[data]);

  // remove Book
  const handleDelete = async (id)=>{
     const response= await axios.delete("http://localhost:4000/api/books/" + id, { headers: { authorization: cookies.access_token }});
     console.log(response)
     toast.success(`Book Deleted successfully`);
  }
  

  return (
    <>
        <div className="books" style={{marginTop:"5rem"}}>
        <div className="container mt-5">
        <h1 className='mt-5'>Books</h1>
        {
          cookies.access_token ? (<Link to='/books/create' className='btn btn-primary'>Create New Book</Link>) : (<></>)
        }
        
        <div className="mt-3">
          <div className="row w-100" >
                  {
                    Object.values(data).map(book=>{
                      
                      return (
                          <div className="col-md-3 col-lg-3 col-sm-6"  key={book._id}>
                          <div className="card w-100 mt-3" >
                              <img src={`http://localhost:4000/${book.image}`} className="card-img-top" alt="..." style={{width: "100%", height:"250px"}}/>
                              <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">{book.description}</p>
                                  {
                                    cookies.access_token ? (<Link to={`/books/editBook/${book.slug}`} className='btn btn-primary'>Edit</Link>) : (<></>)
                                  }
                                  
                                  <Link to={`/books/${book.slug}`} className='btn btn-warning mx-1'> View </Link>
                                  {
                                    cookies.access_token ? (<button className='btn btn-danger' onClick={()=>handleDelete(book._id)}> Delete </button>) : (<></>)
                                  }
                                  
                              </div>
                          </div>
                          </div>
                      )
                      
                    })
                  }
           </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default book