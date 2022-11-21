import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom";


export default function Welcome() {

  return (
    <div className="container">
      <main>
        
          <div>
            <h1 className="title">
              Welcome Page
            </h1>
            <div className="grid">
              <Link to={`user/Antonio`} className="card" ><h3>Antonio &rarr;</h3>
               </Link>

               <Link to={`user/Feli`} className="card" ><h3>Feli &rarr;</h3>
               </Link>

               <Link to={`user/Peña1`} className="card" ><h3>Peña1 &rarr;</h3>
               </Link>

               <Link to={`user/Peña1`} className="card" ><h3>Peña1 &rarr;</h3>
               </Link>

            </div>
          </div>

        
      </main>
    </div>
  )
}
