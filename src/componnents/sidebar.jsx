import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div>
      {/* Sidebar Start */}
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="./index.html" className="text-nowrap logo-img">
            <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
          </Link>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./index.html" aria-expanded="false">
                <span>
                  <i className="ti ti-layout-dashboard" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">cours</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/addcours" aria-expanded="false">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Add cours</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/listecours" aria-expanded="false">
                <span>
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">List cours</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">formation</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/addformation" aria-expanded="false">
                <span>
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">add formation</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/listeformation" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">liste formation</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon ²fs-4" />
              <span className="hide-menu">formateur</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/addformateur" aria-expanded="false">
                <span>
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">add formateur</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/listeformateur" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">liste formateur</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">etudiant</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/addetudiant" aria-expanded="false">
                <span>
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">add etudiant</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/listeetudiant" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">liste etudiant</span>
              </Link>
            </li>
            
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./authentication-login.html" aria-expanded="false">
                <span>
                  <i className="ti ti-login" />
                </span>
                <span className="hide-menu">Login</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./authentication-register.html" aria-expanded="false">
                <span>
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Register</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./icon-tabler.html" aria-expanded="false">
                <span>
                  <i className="ti ti-mood-happy" />
                </span>
                <span className="hide-menu">Icons</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="./sample-page.html" aria-expanded="false">
                <span>
                  <i className="ti ti-aperture" />
                </span>
                <span className="hide-menu">Sample Page</span>
              </Link>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Upgrade to pro</h6>
                <Link to="https://adminmart.com/product/modernize-bootstrap-5-admin-template/" target="_blank" className="btn btn-primary fs-2 fw-semibold lh-sm">Buy Pro</Link>
              </div>
              <div className="unlimited-access-img">
                <img src="../assets/images/backgrounds/rocket.png" alt className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    {/*  Sidebar End */}
    
    </div>
  )
}

export default Sidebar
