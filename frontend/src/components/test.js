




{/* <div className='container mt-5'>            
            <div className='row'> 
                           
                <div className='col-13 col-md-3 mb-4'> 
                <Link to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>               
                <div className="card shadow">
                    <img src={props.vehicle.pictures} className="card-img-top img-fluid" alt={props.vehicle.pictures}></img>
                    <div className='card-footer'>
                        <div class="container">
                        <Link style={{ textDecoration: 'none', color:'black' }} to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>
                            <div class="row">
                                <div class="col text-center">
                                {props.vehicle.name}
                                </div>
                                <div class="col text-start">
                                {props.vehicle.year}
                                </div>
                                <div class="col text-end">
                                ₦{props.vehicle.price}
                                </div>
                            </div>
                        </Link>    
                        </div>                            
                    </div>
                </div>
                </Link> 
                </div>
             
            </div>
        </div>  */}




        {/* <div className='col-13 col-md-3 mb-4'>
            <div className="card shadow">
                <Link to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>    
                    <div class="card-body rounded-top">                                                                                                                                                         
                        <div className="shadow">
                            <img src={props.vehicle.pictures} className="img-fluid rounded-top" alt="..."></img>                                
                        </div>
                        <div className="card shadow text-center rounded-0">
                            <h4><Link style={{textDecoration: 'none',color:'black'}} to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>{props.vehicle.name},₦{props.vehicle.price}</Link></h4> 
                            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'>
                                <i className="fa-solid fa-heart"></i>
                            </button>   
                        </div>           
                    </div> */}



                    {/* <div className="card-body">
                        <img src={props.vehicle.pictures} className="card-img-top" alt="..."></img>
                    </div>
                    <div className='card-footer'>
                        <h5 className="card-title"><Link to={`/vehicles/${props.vehicle.name}/${props.vehicle.id}`}>{props.vehicle.name}</Link></h5>
                        <h5 className="card-title">₦{props.vehicle.price}</h5>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'>
                            <i className="fa-solid fa-heart"></i>
                        </button>               
                    </div> */}
                {/* </Link>
            </div>
        </div> */}


        {/* <div className="col"> */}
        {/* <div className="card-deck row"> */}
        <div className="col-xs-12 col-sm-6 col-md-4">               
        <div className="card ">
            <div className="view overlay">
                <img style={{width: '100%',height: '100%'}} className="card-img-top" src={props.vehicle.pictures} alt="Card image cap"></img>
                <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>                    
            {/* <div className="card-body">                   
                <h4 className="card-title">1 Card title</h4>                
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-light-blue btn-md">Read more</button>
            </div> */}
            </div>
        </div>
        {/* <div className="col-xs-12 col-sm-6 col-md-4">               
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></img>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>                    
                <div className="card-body">                   
                    <h4 className="card-title">1 Card title</h4>                
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-light-blue btn-md">Read more</button>
                </div>
            </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">               
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></img>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>                    
                <div className="card-body">                   
                    <h4 className="card-title">1 Card title</h4>                
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-light-blue btn-md">Read more</button>
                </div>
            </div>
        </div> */}
    {/* </div> */}

{/* </div> */}


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


    