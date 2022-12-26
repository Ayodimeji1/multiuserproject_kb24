import {Link} from "react-router-dom"
function Header () {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info" aria-label="Eighth navbar example">
        <div className="container">
        <a className="navbar-brand" href="#">CarLender</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#">Link</Link>
            </li>
        
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="true">Dropdown</Link>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}
export default Header;

