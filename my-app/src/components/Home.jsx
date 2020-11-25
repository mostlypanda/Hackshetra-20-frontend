import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home =()=> {
   
    return (
        <div class="home">
            <div class="card">

                <div class="title">Give a Test</div>

                <div class="icon">
                <svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">  
                    <path d="M468.493,101.637L371.955,5.098H159.57v77.231H43.724v424.769h308.923v-77.231h115.846V101.637z   M371.955,32.401l69.236,69.235h-69.236V32.401z M63.031,487.79V101.637h173.769v96.538h96.538V487.79H63.031z M256.108,109.632  l69.236,69.235h-69.236V109.632z M352.647,410.56V178.867l-96.538-96.538h-77.231V24.406h173.769v96.538h96.538V410.56H352.647z" fill="#37404D">
                    </path>
                </svg>
                </div>

                <div class="features">
                
                </div>

                <Link  to='/login/student' class="btn">Go Ahead</Link>

            </div>
            <div class="card">

                <div class="title">Create a  test </div>

                <div class="icon">
                <svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">  
                    <path d="M468.493,101.637L371.955,5.098H159.57v77.231H43.724v424.769h308.923v-77.231h115.846V101.637z   M371.955,32.401l69.236,69.235h-69.236V32.401z M63.031,487.79V101.637h173.769v96.538h96.538V487.79H63.031z M256.108,109.632  l69.236,69.235h-69.236V109.632z M352.647,410.56V178.867l-96.538-96.538h-77.231V24.406h173.769v96.538h96.538V410.56H352.647z" fill="#37404D">
                    </path>
                </svg>
                </div>

                <div class="features">

                </div>

                <Link  to='/login/admin' class="btn">Welcome</Link>

                
            </div>

            
        </div>
    )
}

export default Home
