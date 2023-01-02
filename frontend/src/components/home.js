import toyota from "../toyota.jpg";
import background from "../steeringg.jpg";
import logo from '../logo.svg';
function Home () {
    return ( 
    <main>  
        <div className="container-fluid" style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '55vh'}}>         
        </div>


        <section class="search-sec">
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
        </section>    


        <div className="container mt-5 mb-5">
            <h3>Check out these brands</h3>
        </div>

        






        <div className='container mt-5'> 
        {/* {Latest Brands} */}   
            <div className='row'>
                {/* {Category Box} */}
                <div className='col-13 col-md-3 mb-4'>
                {/* <div className="col row-cols-auto">     */}
                <div className="card shadow">
                    <img src={toyota} className="card-img-top img-fluid" alt="..."></img>
                    {/* <div className="card-body"> */}
                    {/* <h4 className="card-title">Category title</h4>   */}
                    {/* </div> */}
                    <div className='card-footer'>
                    Toyota          
                    </div>
                </div>
                </div>
                {/* {Category box end} */}
                {/* Category box} */}
                <div className='col-13 col-md-3 mb-4'>
                {/* <div className="col row-cols-auto"> */}
                <div className="card shadow">
                    <img src={toyota} className="card-img-top img-fluid" alt="..."></img>
                    {/* <div className="card-body"> */}
                    {/* <h4 className="card-title">Category title</h4>   */}
                    {/* </div> */}
                    <div className='card-footer'>
                    Benz        
                    </div>
                </div>
                </div>
                {/* {Category box end} */}
                {/* Category box} */}
                <div className='col-13 col-md-3 mb-4'>
                {/* <div className="col row-cols-auto"> */}
                <div className="card shadow">
                    <img src={toyota} className="card-img-top img-fluid" alt="..."></img>
                    <div className='card-footer'>
                    Acura           
                    </div>
                </div>
                </div>
                {/* {Category box end} */}
                {/* Category box} */}
                <div className='col-13 col-md-3 mb-4'>
                <div className="card shadow">
                    <img src={toyota} className="card-img-top img-fluid" alt="..."></img>
                    <div className='card-footer'>
                    Nissan            
                    </div>
                </div>
                </div>
                {/* {Category box end} */}
            </div> 
        {/* {Latest Categories end}    */}
        </div> 


        {/* <section className="pb-4">
            <div className="bg-white border rounded-5">
                
                <section className="p-4 d-flex justify-content-center w-100">
                    <div className="multi-carousel" id="carousel">
                        <div className="multi-carousel-inner">                        
                            <div className="multi-carousel-item" style={{width: '100%', marginLeft: '0px'}}>
                                <div className='col-13 col-md-3 mb-4'>
                                <div className="card shadow">
                                    <img src={toyota} className="card-img-top" alt="..."></img>
                                    <div className='card-footer'>
                                    Nissan            
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="multi-carousel-item" style={{width: '100%', marginLeft: '0px'}}>
                                <div className='col-13 col-md-3 mb-4'>
                                <div className="card shadow">
                                    <img src={toyota} className="card-img-top" alt="..."></img>
                                    <div className='card-footer'>
                                    Nissan            
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="multi-carousel-item" style={{width: '100%', marginLeft: '0px'}}>
                                <div className='col-13 col-md-3 mb-4'>
                                <div className="card shadow">
                                    <img src={toyota} className="card-img-top" alt="..."></img>
                                    <div className='card-footer'>
                                    Nissan            
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="multi-carousel-item" style={{width: '100%', marginLeft: '0px'}}>
                                <div className='col-13 col-md-3 mb-4'>
                                <div className="card shadow">
                                    <img src={toyota} className="card-img-top" alt="..."></img>
                                    <div className='card-footer'>
                                    Nissan            
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="multi-carousel-item" style={{width: '100%', marginLeft: '0px'}}>
                                <div className='col-13 col-md-3 mb-4'>
                                <div className="card shadow">
                                    <img src={toyota} className="card-img-top" alt="..."></img>
                                    <div className='card-footer'>
                                    Nissan            
                                    </div> 
                                </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" tabindex="0" data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" tabindex="0" data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </section>             
                
            </div>
        </section> */}


    


    </main>  
    )
}

export default Home;