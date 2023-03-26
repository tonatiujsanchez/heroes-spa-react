import { Link, NavLink, useNavigate } from 'react-router-dom'


export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login', { replace: true })
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive })=> ` ${ isActive ? 'active' : '' } nav-item nav-link` } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive })=> ` ${ isActive ? 'active':'' } nav-item nav-link` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive })=> ` ${ isActive ? 'active':'' } nav-item nav-link` } 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-success fw-bold">Brandon</span>
                    <button onClick={ handleLogout } className="nav-item nav-link btn"> Logout</button>
                </ul>
            </div>
        </nav>
    )
}