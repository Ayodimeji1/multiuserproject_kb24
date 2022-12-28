import logo from '../logo.svg';
import {Link} from "react-router-dom"
import Vehicle from "./vehicle";
import {useState, useEffect} from 'react';
function Vehicles () {

    const [Vehicles, setVehicles]= useState ([])

    useEffect (()=> {
        fetchData('http://127.0.0.1:8000/api/vehicles/');
    })

    function fetchData (baseurl) {
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => setVehicles(data.results));
    }

    
    return(
        <section className='container mt-4'> 
           <h4 className='mb-4'>Python Vehicles</h4>    
            <div className='row'>
                {
                    Vehicles.map((vehicle)=> <Vehicle vehicle={vehicle}/>)
                }
            </div>    
               
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        </section>
    )
}           
export default Vehicles
