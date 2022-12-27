import toyota from "../toyota.jpg";
import background from "../steering.jpg";
function Home () {
    return ( 
    <main>    
        <div className="container-fluid" style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '55vh'}}>

            <div class="container">
                <form action="" method="post">
                    <div class="row align-items-center gy-5">
                        <div className="input-group mb-3">
                            <div className="col-md-auto col-12 p-3">
                                <input type="text" className="form-control" placeholder="vehicle name" aria-label="vehicle name">                       
                                </input>
                            </div>
                            <div className="col-md-auto col-12 p-3">
                                <input className="form-control" type="datetime-local" id="meeting-time"
                                    name="meeting-time" value="2018-06-12T19:30"
                                    min="2018-06-07T00:00" max="2018-06-14T00:00">
                                </input>
                            </div>
                            <div className="col-md-auto col-12 p-3">
                                <input className="form-control" type="datetime-local" id="meeting-time"
                                    name="meeting-time" value="2018-06-12T19:30"
                                    min="2018-06-07T00:00" max="2018-06-14T00:00">
                                </input>
                            </div>
                        </div> 
                    </div>         
                </form>               
            </div>        
        </div>

        <div className='container'> 
        {/* {Latest Brands} */}   
        <div className='row'>
            {/* {Category Box} */}
            <div className='col-13 col-md-3 mb-4'>
            {/* <div className="col row-cols-auto">     */}
            <div className="card shadow">
                <img src={toyota} className="card-img-top" alt="..."></img>
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
                <img src={toyota} className="card-img-top" alt="..."></img>
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
                <img src={toyota} className="card-img-top" alt="..."></img>
                <div className='card-footer'>
                Acura           
                </div>
            </div>
            </div>
            {/* {Category box end} */}
            {/* Category box} */}
            <div className='col-13 col-md-3 mb-4'>
            <div className="card shadow">
                <img src={toyota} className="card-img-top" alt="..."></img>
                <div className='card-footer'>
                Nissan            
                </div>
            </div>
            </div>
            {/* {Category box end} */}
        </div> 
        {/* {Latest Categories end}    */}
        </div> 


        <section className="pb-4">
            <div className="bg-white border rounded-5">
                
                <section className="p-4 d-flex justify-content-center w-100">
                    <div className="multi-carousel" id="carousel">
                        <div className="multi-carousel-inner">
                        
                        
                        
                        
                        <div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <div className='col-13 col-md-3 mb-4'>
                            <div className="card shadow">
                                <img src={toyota} className="card-img-top" alt="..."></img>
                                <div className='card-footer'>
                                Nissan            
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <div className='col-13 col-md-3 mb-4'>
                            <div className="card shadow">
                                <img src={toyota} className="card-img-top" alt="..."></img>
                                <div className='card-footer'>
                                Nissan            
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <div className='col-13 col-md-3 mb-4'>
                            <div className="card shadow">
                                <img src={toyota} className="card-img-top" alt="..."></img>
                                <div className='card-footer'>
                                Nissan            
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <div className='col-13 col-md-3 mb-4'>
                            <div className="card shadow">
                                <img src={toyota} className="card-img-top" alt="..."></img>
                                <div className='card-footer'>
                                Nissan            
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <div className='col-13 col-md-3 mb-4'>
                            <div className="card shadow">
                                <img src={toyota} className="card-img-top" alt="..."></img>
                                <div className='card-footer'>
                                Nissan            
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div class="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp" alt="Winter Landscape" class="w-100">
                        </div>
                        <div class="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp" alt="View of the City in the Mountains" class="w-100">
                        </div>
                        <div class="multi-carousel-item" style="width: 100%; margin-left: 0px;">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp" alt="Place Royale Bruxelles" class="w-100">
                        </div> */}
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
        </section>


    </main>  
    )
}

export default Home;