import React from 'react';
// import {Routes, Route} from 'react-router-dom';
import toyota from "../toyota.jpg";
import background from "../steeringg.jpg";
import logo from '../logo.svg';
import Brands from '../components/brands';
function Home () {
    return ( 
        <>
        
    <main>  
        <div className="container-fluid" style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '50vh'}}>         
        </div>


        <section class="search-sec">
            <div class="container">
                <form action="#" method="post" novalidate="novalidate">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" className="form-control search-slt" placeholder="Enter vehicle name" aria-label="vehicle name">                       
                                </input>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input className="form-control search-slt" type="datetime-local" id="book-from" placeholder="Enter Drop City"
                                        name="book-from" value="2023-01-01T00:30"
                                        min="2018-06-07T00:00" max="2024-06-14T00:00">
                                </input>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input className="form-control search-slt" type="datetime-local" id="book-to"
                                        name="book-to" value="2023-06-12T19:30"
                                        min="2022-01-01T00:00" max="2024-12-31T00:00">
                                    </input>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <button type="button" class="btn btn-danger wrn-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>    

        <Brands />


    </main> 
    </>
    )
}

export default Home;