import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import logo from '../logo.svg';
import {Link} from "react-router-dom"
import $ from 'jquery' 
function Brands () {
    return(
        <section className='container mt-4'> 
            {/* {Latest Categories} */}
            <h4 className='mb-4'>All Brands</h4> 
            <div class="card">
                <div class="card-body"> 
                    <div className="how container mb-4'">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="card shadow">
                                    <figure className="figure">
                                        <img src={logo} className="figure-img img-fluid w-100" alt="..."></img>
                                        {/* <img src="https://loremflickr.com/600/200?random=1"  */}
                                            {/* // class="figure-img img-fluid w-100" /> */}
                                        {/* <figcaption class="figure-caption">
                                            SIGN UP
                                        </figcaption> */}
                                    </figure>
                                </div>    
                            </div>
                            <div className="item">
                                <div className="card shadow">
                                    <figure className="figure">
                                        <img src={logo} className="figure-img img-fluid w-100" alt="..."></img>
                                            {/* <img src="https://loremflickr.com/600/200?random=1"  */}
                                                {/* // class="figure-img img-fluid w-100" /> */}
                                            {/* <figcaption class="figure-caption">
                                                SIGN UP
                                            </figcaption> */}
                                    </figure>
                                </div>     
                            </div>
                            <div className="item">
                                <div className="card shadow">
                                    <figure className="figure">
                                        <img src={logo} className="figure-img img-fluid w-100" alt="..."></img>
                                            {/* <img src="https://loremflickr.com/600/200?random=1"  */}
                                                {/* // class="figure-img img-fluid w-100" /> */}
                                            {/* <figcaption class="figure-caption">
                                                SIGN UP
                                            </figcaption> */}
                                    </figure>
                                </div>    
                            </div>
                            <div className="item">
                                <div className="card shadow">
                                    <figure className="figure">
                                        <img src={logo} className="figure-img img-fluid w-100" alt="..."></img>
                                            {/* <img src="https://loremflickr.com/600/200?random=1"  */}
                                                {/* // class="figure-img img-fluid w-100" /> */}
                                            {/* <figcaption class="figure-caption">
                                                SIGN UP
                                            </figcaption> */}
                                    </figure>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>    
            </div>
            
            



            {/* <div className='row'>
                {/* {Category Box} */}
                {/* <div className='col-13 col-md-3 mb-4'>
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h4 className="card-title"><Link to="/brands/python/1">Python</Link></h4>  
                    </div>
                    <div className='card-footer'>
                    Product download: 23333            
                    </div>
                </div>
                </div>  */}
                {/* {Category box end} */}
                {/* Category box} */}
                {/* <div className='col-13 col-md-3 mb-4'>
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h4 className="card-title"><Link to="/">Category title</Link></h4>  
                    </div>
                    <div className='card-footer'>
                    Product download: 23333            
                    </div>
                </div>
                </div> */}
                {/* {Category box end} */}
                {/* Category box} */}
                {/* <div className='col-13 col-md-3 mb-4'>
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h4 className="card-title"><Link to="/">Category title</Link></h4>  
                    </div>
                    <div className='card-footer'>
                    Product download: 23333            
                    </div>
                </div>
                </div> */}
                {/* {Category box end} */}
                {/* Category box} */}
                {/* <div className='col-13 col-md-3 mb-4'>
                <div className="card shadow">
                    <img src={logo} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h4 className="card-title"><Link to="/">Category title</Link></h4>  
                    </div>
                    <div className='card-footer'>
                    Product download: 23333            
                    </div>
                </div>
                </div> */}
                {/* {Category box end} */}
            {/* </div>  */}
            {/* {Latest Categories end}    */}

            {/* <nav aria-label="Page navigation example">
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
            </nav> */}
    </section>
    )
}   
       
export default Brands




