import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
<nav className="pc-sidebar">
  <div className="navbar-wrapper">
    <div className="m-header">
      <a href="../dashboard/index.html" className="b-brand text-primary">
        <img src="images/logo-dark.svg" alt="logo image" className="logo-lg" />
        <span className="badge bg-brand-color-2 rounded-pill ms-1 theme-version">v1.3.0</span>
      </a>
    </div>
    <div className="navbar-content">
      <ul className="pc-navbar">
        <li className="pc-item pc-caption">
          <label data-i18n="Navigation">Navigation</label>
          <i className="ph-duotone ph-gauge" />
        </li>
        <li className="pc-item"><Link to={"/"} className="pc-link">
            <span className="pc-mtext" data-i18n="Sample Page">Earnings Overview</span></Link>
        </li>
        <li className="pc-item"><Link to={"/projects"} className="pc-link">
            <span className="pc-mtext" data-i18n="Sample Page">Projects Management</span></Link>
        </li>
        <li className="pc-item"><Link to={"/payments"} className="pc-link">
            <span className="pc-mtext" data-i18n="Sample Page">Payments Management</span></Link>
        </li>
      </ul>

    </div>
    <div className="card pc-user-card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0">
            <img src="images/user/avatar-1.jpg" alt="user-image" className="user-avtar wid-45 rounded-circle" />
          </div>
          <div className="flex-grow-1 ms-3">
            <div className="dropdown">
              <a href="#" className="arrow-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,20">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 me-2">
                    <h6 className="mb-0">Jonh Smith</h6>
                    <small>Administrator</small>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="btn btn-icon btn-link-secondary avtar">
                      <i className="ph-duotone ph-windows-logo" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a className="pc-user-links">
                      <i className="ph-duotone ph-user" />
                      <span>My Account</span>
                    </a>
                  </li>
                  <li>
                    <a className="pc-user-links">
                      <i className="ph-duotone ph-gear" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="pc-user-links">
                      <i className="ph-duotone ph-lock-key" />
                      <span>Lock Screen</span>
                    </a>
                  </li>
                  <li>
                    <a className="pc-user-links">
                      <i className="ph-duotone ph-power" />
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Aside