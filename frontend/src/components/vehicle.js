// import logo from '../logo.svg';
import {Link} from "react-router-dom"
function Vehicle (props) {
    return (
        <>

        {/* <section className="search-sec"> */}
            {/* <div className="container">
                <form action="#" method="post" novalidate="novalidate">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" classNameName="form-control search-slt" placeholder="Enter vehicle name" aria-label="vehicle name">                       
                                </input>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input classNameName="form-control search-slt" type="datetime-local" id="book-from" placeholder="Enter Drop City"
                                        name="book-from" value="2023-01-01T00:30"
                                        min="2018-06-07T00:00" max="2024-06-14T00:00">
                                </input>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input classNameName="form-control search-slt" type="datetime-local" id="book-to"
                                        name="book-to" value="2023-06-12T19:30"
                                        min="2022-01-01T00:00" max="2024-12-31T00:00">
                                    </input>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <button type="button" className="btn btn-danger wrn-btn">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> */}
        {/* </section>  */}



     
            <div className="main-container">
                <div className="post">
                    <div>
                    <Link style={{textDecoration: 'none',color:'black'}} to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>
                        <div className="post-item">
                            <img className="thumbnail" src={props.vehicle.pictures} alt=""></img>
                            <div className="post-preview">
                                <h5 className="post-title text-center"><Link style={{textDecoration: 'none',color:'black'}} to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>{props.vehicle.name}</Link></h5>
        
                            </div>
                        </div>
                    </Link>    
                    </div>
                </div>
            </div>
       
         </>  
           
    )
}
export default Vehicle