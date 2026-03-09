// import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//       <div className="container">
//         <a href="#" className="navbar-brand">
//           <img src={logo} width="40px" alt="Logo" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-md-end gap-md-2"
//           id="navbarNav"
//         >
//           <Link
//             to="/signup"
//             className="btn btn-lg btn-primary d-block mt-4 mb-3 mt-md-0 mb-md-0"
//           >
//             Sign up
//           </Link>
//           <Link
//             to="/login"
//             className="btn btn-lg btn-outline-light d-block mb-4 mb-md-0"
//           >
//             Log in
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavBar;


import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './style.css'  // we'll create this for custom styles

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top navbar-custom">
      <div className="container navbar-container">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <img src={logo} width="40px" alt="Logo" />
          <span className="ms-2 navbar-title">Job Tracker</span>
        </a>

        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end gap-2"
            id="navbarNav"
          >
            <Link
              to="/signup"
              className="btn btn-lg btn-primary"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="btn btn-lg btn-outline-light"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
