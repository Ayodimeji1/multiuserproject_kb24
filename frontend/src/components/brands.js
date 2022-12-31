import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import logo from '../logo.svg';
import {Link} from "react-router-dom"
import {useState, useEffect} from 'react';
function Brands () {
    const baseUrl='http://127.0.0.1:8000/api'; 
    const [brands, setBrands]=useState([]);
    const [totalResult, setTotalResults]=useState(0);

    useEffect (()=> {
        fetchData(baseUrl+'/brands/');
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json())
        .then((data) => { 
            setBrands(data.results); 
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
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/brands/?page=${i}`)} to={`/brands/?page=${i}`} class="page-link">{i}</Link></li>)
    };




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
            
            



            <div className='row'>
                {/* {Category Box} */}
                
                {
                    brands.map((brand)=> 
                    <div className='col-13 col-md-3 mb-4'>
                        <div className="card shadow">
                            <img src={brand.pictures} className="card-img-top" alt={brand.name}></img>
                            <div className="card-body">
                            <h4 className="card-title"><Link to={`/brands/${brand.name}/${brand.id}/`}>{brand.name}</Link></h4>  
                            </div>
                            <div className='card-footer'>
                                Product download: 23333            
                            </div>
                        </div>
                    </div>    
                    )
                }
            
            </div>

            <nav aria-label="Page navigation example">
            <ul class="pagination">
              {links}
            </ul>
            </nav>
    </section>
    )
}   
       
export default Brands




