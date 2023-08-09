import React, {useEffect, useContext , useState} from 'react'
import axios from 'axios'
import { Link, NavLink , useNavigate} from 'react-router-dom';

function home() {
    
  return (
    <>
      <div className="container" style={{marginTop: "5rem"}}>
          <h1>Hello Welcome to our Home Page
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci debitis cum nesciunt repellendus fugiat sunt molestias, sed quaerat consequatur officiis modi quidem sequi alias suscipit mollitia odio quae ipsa. Nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla assumenda, ea nemo totam odio iusto repudiandae ex distinctio nesciunt, animi consectetur harum quo? Quas tenetur nisi eligendi harum qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, eius, sit iste molestias dignissimos harum et ullam veniam odit perspiciatis laborum nulla sapiente voluptates rem illum totam, autem nobis eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, magni. Aut voluptatibus exercitationem neque quos placeat distinctio, obcaecati aspernatur voluptas eum, dolor quidem, ratione quasi? Expedita molestiae accusantium minus sunt!</p>
          <h3 className="my-4">
            About Page
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reiciendis consequuntur consequatur minus mollitia ea corrupti cum autem dicta sint ut numquam officiis, magnam voluptatum, at, delectus qui expedita officia?
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolore aliquid exercitationem assumenda ea totam voluptatibus vitae perspiciatis. Dolor omnis sunt deleniti magnam beatae adipisci at vitae cum et voluptatem!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, libero. Earum, aliquam quos quae itaque voluptatem nisi tempore harum sunt amet dicta cupiditate vel in voluptas saepe ratione distinctio eius.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ab omnis amet animi recusandae optio culpa mollitia, a distinctio porro, aut ullam rem vel? Obcaecati esse deleniti commodi molestiae cumque.</p>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem est aut, dolores tempora quam, sint eligendi ipsam, exercitationem totam non laborum dolor esse consequuntur? Quasi doloremque rerum perferendis a!</p>
      </div>
    </>
  )
}

export default home