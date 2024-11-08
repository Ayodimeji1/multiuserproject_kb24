import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Vehicle from './vehicle'; 
function VehicleDetail () {
    const baseUrl='http://127.0.0.1:8000/api'; 
    const [vehicleData, setvehicleData]=useState([]);
    const [motorImages, setmotorImages]=useState([]);
    const {vehicle_slug, vehicle_id} = useParams();

    useEffect (()=> {
        fetchData(baseUrl+'/vehicles/'+vehicle_id);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => { 
            setvehicleData(data); 
            setmotorImages(data.motor_images);
        });
    }

    console.log(motorImages)

    return (
        <>
        <section style={{backgroundColor: '#E6E6E3',}}>
            <div id="vehicleThumbnailSlider" className="carousel carousel-dark slide carousel-fade mb-4" data-bs-ride="true">
                <div className="carousel-indicators">
                    {motorImages.map((img, index) => {
                        if (index === 0) {
                            return <button type="button" data-bs-target="#vehicleThumbnailSlider" data-bs-slide-to={index} class="active" aria-current="true" aria-label="Slide 1"></button>;
                        }
                        else {
                            return <button type="button" data-bs-target="#vehicleThumbnailSlider" data-bs-slide-to={index} aria-label="Slide 2"></button>;
                        }
                    })}
                </div>

                <div className="carousel-inner">
                    {motorImages.map((img, index) => {
                        if (index === 0) {
                            return <div className="carousel-item active">
                                <img src={img.image} className="img-fluid mb-5" alt="..."></img>
                            </div>;
                        }
                        else {
                            return <div className="carousel-item">
                                <img src={img.image} className="img-fluid mb-5" alt="..."></img>
                            </div>;
                        }
                    })}
                </div>
            </div>
        </section>


        <section className='mb-4' style={{backgroundColor: '#E6E6E3',}}>
            <div className="container text-center">
            <div class="parent">
                <div class="column main">
                    <div className="col mt-3" align="center">
                        <table>
                            <tr>
                                <td><h4>{vehicleData.name}</h4></td>
                                <td className='px-2'><h4>{vehicleData.year}</h4></td>
                            </tr>
                        </table>

                        <div class="card p-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="ratings">
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star rating-color"></i>
                                    <i class="fa fa-star"></i>                                   
                                    <Link title='' target="_blank" className='btn btn-success btn-sm'>
                                        <i className="fa-solid fa-cart-shopping"></i> Wishlist</Link>                                   
                                </div>                        
                            </div>
                        </div>    
                        <div className="Vehicletags">
                            <h5 className="mt-4">Tags</h5>
                            <p>
                                <Link style={{ textDecoration: 'none'}} to="#" className="badge bg-secondary text-white me-1">BMW</Link>
                                <Link style={{ textDecoration: 'none'}} to="#" className="badge bg-secondary text-white me-1">4WD</Link>
                                <Link style={{ textDecoration: 'none'}} to="#" className="badge bg-secondary text-white">Automatic</Link>
                            </p>
                        </div>
                    </div>
                </div>



                <div class="column sidebar">
                <div class="col" align="center">
                    <div class="col-lg-5 col-md-8 col-sm-12 p-0 mt-3">
                    <p>Book from</p>
                        <input className="form-control search-slt" type="datetime-local" id="book-from" placeholder="Enter Drop City"
                            name="book-from" value="2023-01-01T00:30"
                            min="2018-06-07T00:00" max="2024-06-14T00:00">
                        </input>
                    </div>
                    <div class="col-lg-5 col-md-8 col-sm-12 p-0 mt-3">
                    <p>Book to</p>
                        <input className="form-control search-slt" type="datetime-local" id="book-to"
                            name="book-to" value="2023-06-12T19:30"
                            min="2022-01-01T00:00" max="2024-12-31T00:00">
                        </input>
                    </div>
                </div>
                </div>
            </div>
            </div> 
        </section> 

        <h4 className='mt-5 mb-3 text-center' >Related Vehicles</h4>
        <div style={{backgroundColor: '#E6E6E3',}} id="vehicleThumbnailSlider" className="carousel carousel-dark slide bg-light" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#vehicleThumbnailSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#vehicleThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#vehicleThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row mb-4">
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row mb-4">
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row mb-4">
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                        <vehicle title="Django Project 7"/>
                    </div>
                </div>
            </div>
        </div>    

        </> 
    )
}    

export default VehicleDetail