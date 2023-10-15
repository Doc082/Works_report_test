import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  const user = useSelector(state => state.user);
  
  return (
    <>
      <nav
        className="navbar navbar-expand-lg rounded bg-primary"
        data-bs-theme="dark"
        aria-label="Eleventh navbar example"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Report-Tec
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              {  user &&
              <>
              <li className="nav-item">
              <NavLink className="nav-link" to="/">
              {user.name}
                </NavLink></li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  LogOut
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/reports">
                  Report
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard/clients">
                  Clienti
                </NavLink>
              </li>
              </>
              }
              {
               !user &&
               <>
               <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Register">
                  Registrati
                </NavLink>
              </li>
              </>

              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header