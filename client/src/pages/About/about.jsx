import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function about() {
  return (
    <>
      
        <div className="container" style={{marginTop: "5rem"}}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://th.bing.com/th/id/R.b996f844841de288796bfa8f003070cc?rik=etZt%2f7hNbh4PQw&pid=ImgRaw&r=0" className="img-fluid rounded-start" alt="..." style={{height: "550px"}}/>
              
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">About Us</h3>
                <h4 className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam esse libero ea voluptates culpa ab quod deserunt ex recusandae adipisci molestiae earum, magni, in neque, quae illum accusantium molestias excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vel doloremque vero quis animi distinctio maxime accusantium commodi adipisci totam dicta fugiat, ipsam sit, odio iste numquam temporibus quo atque.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem similique magnam porro iure? Assumenda illum ab explicabo beatae eos tenetur, obcaecati sapiente expedita veniam nobis, unde, quisquam ut ipsam ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iste sed harum nobis. Delectus, quas ratione alias voluptatibus culpa corporis, at asperiores minus distinctio eaque fuga, dolores inventore expedita saepe.</p>
                <h4 className="card-text"><small className="text-muted">Last updated 3 mins ago</small></h4>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </>
  )
}

export default about