import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

function singleBook() {
  const [data, setdata] = useState("")
  const slugUrl = useParams(setdata);
  const baseUrl = `http://localhost:4000/api/books/${slugUrl.slug}`;
  const fetchData = async () => {
      const book = await axios.get(baseUrl);
      setdata(book.data);
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className='single_book' style={{ marginTop: "5rem" }}>
      <div className="container">
        <Link to='/books' className='btn btn-secondary my-3'> Back </Link>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`http://localhost:4000/${data.image}`} className="img-fluid rounded-start w-100" alt="..." style={{height:"450px"}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default singleBook