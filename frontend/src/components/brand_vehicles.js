import {Link} from "react-router-dom"
import Vehicle from "./vehicle";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
function BrandVehicles () {
    const baseUrl='http://127.0.0.1:8000/api'; 
    const [vehicles, setVehicles]=useState([]);
    const [totalResult, setTotalResults]=useState(0);
    const {brand_slug, brand_id} = useParams();
    // console.log(brand_id);

    useEffect (()=> {
        fetchData(baseUrl+'/vehicle/?brand='+brand_id);
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
    var limit=2; 
    var totalLinks=totalResult/limit;
    for(let i=1; i<=totalLinks; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/vehicle/?brand=${brand_id}&page=${i}`)} to={`/brand/${brand_slug}/${brand_id}/?page=${i}`} class="page-link">{i}</Link></li>)
    };
    
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
export default BrandVehicles
