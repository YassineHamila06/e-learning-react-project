import React from 'react';
import Sidebar from '../../componnents/sidebar';
import Header from '../../componnents/header';
import Footer from '../../componnents/footer';
import {Outlet} from 'react-router-dom'

const Home = () => {
  return (
   <div>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <Sidebar/>
    {/*  Main wrapper */}
    <div className="body-wrapper">
      <Header/>
      <div className="container-fluid">
        <Outlet/>
        {/*  Row 1 */}
        <Footer/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
