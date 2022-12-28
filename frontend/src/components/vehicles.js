import logo from '../logo.svg';
import {Link} from "react-router-dom"
import Vehicle from "./vehicle";
function Vehicles () {
    return(
        <section className='container mt-4'> 
           <h4 className='mb-4'>Python Vehicles</h4>    
            <div className='row'>
                <Vehicle title="Django Project"/>
                <Vehicle/>
                <Vehicle/>
                <Vehicle/>
                <Vehicle/>
                <Vehicle/>
                <Vehicle/>
            </div>    
               
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        </section>
    )
}           
export default Vehicles
