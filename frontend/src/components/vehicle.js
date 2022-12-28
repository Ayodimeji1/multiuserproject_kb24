import logo from '../logo.svg';
import {Link} from "react-router-dom"
function Vehicle (props) {
    return (
        <main>
        {/* <section class="search-sec">
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
        </section> */}
        
        <div className='col-13 col-md-3 mb-4'>
            <div className="card shadow">
                <Link to='/vehicles/:vehicle_slug/:vehicle_id'>                
                    <div className="card-body">
                        <img src={props.vehicle.pictures} className="card-img-top" alt="..."></img>
                    </div>
                    <div className='card-footer'>
                        <h5 className="card-title"><Link to='/vehicles/:vehicle_slug/:vehicle_id'>{props.vehicle.name}</Link></h5>
                        <h5 className="card-title">₦{props.vehicle.price}</h5>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'>
                            <i className="fa-solid fa-heart"></i>
                        </button>               
                    </div>
                </Link>
            </div>
        </div>
        </main>            
    )
}
export default Vehicle