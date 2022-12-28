import {Link} from "react-router-dom"
import Vehicle from "./vehicle";
import {useState, useEffect} from 'react';
function Vehicles () {
    const baseUrl='http://127.0.0.1:8000/api'; 
    const [vehicles, setVehicles]=useState([]);
    const [totalResult, setTotalResults]=useState(0);

    useEffect (()=> {
        fetchData(baseUrl+'/vehicles/');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => { 
            setVehicles(data.results); 
            setTotalResults(data.count);
        });
    }

    function changeUrl(baseurl){
        fetchData(baseurl);
    } 

    var links=[];
    for(let i=1; i<=totalResult; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+'/vehicles/?page=${i}')} to={'/vehicles/?page=${i}'} class="page-link">{i}</Link></li>)
    }

    
    return(
        <section className='container mt-4'> 
           <h4 className='mb-4'>Vehicles</h4>    
            <div className='row'>
                {
                    vehicles.map((vehicle)=> <Vehicle vehicle={vehicle}/>)
                }
            </div>    
               
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links}
            </ul>
            </nav>
        </section>
    )
}            
export default Vehicles
