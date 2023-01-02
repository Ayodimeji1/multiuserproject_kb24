import React from 'react';
import logo from '../logo.svg';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom"

//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
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
    var limit=6;
    var totalLinks=totalResult/limit;
    for(let i=1; i<=totalLinks; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+`/brands/?page=${i}`)} to={`/brands/?page=${i}`} class="page-link">{i}</Link></li>)
    };


    const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    loop: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 500,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:4
        }
    },
    };
    // class Brands extends React.Component {
    // render() {
   

    return (
        <>
        {/* <div className='container'> */}
            {/* <div className='row'> */}
                <div className='col'>
                    <div className='mx-auto'>
                    <h3 className='text-center mt-3 mb-4'>Brands</h3>
                        <div className='mx-auto'>        
                            <OwlCarousel className="slider-items owl-carousel" {...options}>
                                {
                                brands.map((brand)=> 
                                // <Link  style={{textDecoration: 'none'}} to={`/brands/${brand.name}/${brand.id}/`}>
                                // <div class="card-body rounded-top">                                                                                                                                                         
                                //     <div className="shadow">
                                //         <img src={brand.pictures} className="img-fluid rounded-top" alt="..."></img>                                
                                //     </div>
                                //     <div className="card shadow text-center rounded-0">
                                //         <h4><Link style={{textDecoration: 'none',color:'black'}} to={`/brands/${brand.name}/${brand.id}/`}>{brand.name}</Link></h4>  
                                //     </div>           
                                // </div></Link> 
                                
                                <div className="main-container">
                                    <div className="post">
                                        <div>
                                        <Link  style={{textDecoration: 'none'}} to={`/brands/${brand.name}/${brand.id}/`}>
                                            <div className="post-item">
                                                <img className="thumbnail" src={brand.pictures} alt=""></img>
                                                <div className="post-preview">
                                                    <h5 className="post-title text-center"><Link style={{textDecoration: 'none',color:'black'}} to={`/brands/${brand.name}/${brand.id}/`}>{brand.name}</Link></h5>
                            
                                                </div>
                                            </div>
                                        </Link>    
                                        </div>
                                    </div>
                                </div>

                                    )
                                }    
                            </OwlCarousel>
                        </div>
                    </div>
                </div>    
            {/* </div>         */}
        {/* </div> */}

        <div>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
            {links}
            </ul>
            </nav>
        </div>
        </>
       
    )
};
// }
// }

export default Brands;