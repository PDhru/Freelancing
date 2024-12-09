import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
  };
  return (
    <header className="pc-header">  
    <div className="header-wrapper"> 
      <div className="me-auto pc-mob-drp">
        <ul className="list-unstyled">
          <li className="pc-h-item pc-sidebar-collapse">
            <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
              <i className="ti ti-menu-2" />
            </a>
          </li>
          <li className="pc-h-item pc-sidebar-popup">
            <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
              <i className="ti ti-menu-2" />
            </a>
          </li>
          <li className="dropdown pc-h-item d-inline-flex d-md-none">
            <a className="pc-head-link dropdown-toggle arrow-none m-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              <i className="ph-duotone ph-magnifying-glass" />
            </a>
            <div className="dropdown-menu pc-h-dropdown drp-search">
              <form className="px-3">
                <div className="mb-0 d-flex align-items-center">
                  <input type="search" className="form-control border-0 shadow-none" placeholder="Search..." />
                  <button className="btn btn-light-secondary btn-search">Search</button>
                </div>
              </form>
            </div>
          </li>
          <li className="pc-h-item d-none d-md-inline-flex">
            <form className="form-search">
              <i className="ph-duotone ph-magnifying-glass icon-search" />
              <input type="search" className="form-control" placeholder="Search..." />
              <button className="btn btn-search" style={{padding: 0}}><kbd>ctrl+k</kbd></button>
            </form>
          </li>
        </ul>
      </div>
      {/* [Mobile Media Block end] */}
      <div className="ms-auto">
        <ul className="list-unstyled">
          <li className="dropdown pc-h-item">
            <a className="pc-head-link dropdown-toggle arrow-none me-0" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
              <i className="ph-duotone ph-diamonds-four" />
            </a>
            <div className="dropdown-menu dropdown-menu-end pc-h-dropdown">
              <button href="#!" className="dropdown-item" onClick={handleLogout}>
                <i className="ph-duotone ph-power" />
                <span>Logout</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header