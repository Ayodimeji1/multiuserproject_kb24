import {Link} from "react-router-dom"
function Header () {
    return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-info" aria-label="Eighth navbar example">
        <div className="container">
        <Link className="navbar-brand" to="/">CarLender</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/vehicles'>Vehicles</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/brands'>Brands</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Login</Link>
            </li>
        
            <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="true">Join</Link>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">As a owner</Link></li>
                <li><Link className="dropdown-item" href="#">As a customer</Link></li>
                </ul>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}
export default Header;

