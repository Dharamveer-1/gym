import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <>
    <div className="offcanvas-menu-overlay" />
    <div className="offcanvas-menu-wrapper">
      <div className="canvas-close">
        <i className="fa fa-close" />
      </div>
      <div className="canvas-search search-switch">
        <i className="fa fa-search" />
      </div>
      <nav className="canvas-menu mobile-menu">
        <ul>
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./about-us.html">About Us</a>
          </li>
          <li>
            <a href="./class-details.html">Classes</a>
          </li>
          {/* <li>
            <a href="./services.html">Services</a>
          </li> */}
          <li>
            <a href="./team.html">Our Team</a>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="dropdown">
              <li>
                <a href="./about-us.html">About us</a>
              </li>
              <li>
                <a href="./class-timetable.html">Classes timetable</a>
              </li>
              <li>
                <a href="./bmi-calculator.html">Bmi calculate</a>
              </li>
              <li>
                <a href="./team.html">Our team</a>
              </li>
              <li>
                <a href="./gallery.html">Gallery</a>
              </li>
              <li>
                <a href="./blog.html">Our blog</a>
              </li>
              <li>
                <a href="./404.html">404</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap" />
      <div className="canvas-social">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-youtube-play" />
        </a>
        <a href="#">
          <i className="fa fa-instagram" />
        </a>
      </div>
    </div>
    {/* Offcanvas Menu Section End */}
    {/* Header Section Begin */}
    <header className="header-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo">
              <a href="./index.html">
              <img src="/assets/img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="nav-menu">
              <ul>
                <li>
                  <a href="./index.html">Home</a>
                </li>
                {/* <li>
                  <a href="./about-us.html">About Us</a>
                </li> */}
                {/* <li>
                  <a href="./class-details.html">Classes</a>
                </li> */}
                {/* <li>
                  <a href="./services.html">Services</a>
                </li> */}
                {/* <li>
                  <a href="./team.html">Our Team</a>
                </li> */}
                <li>
                  <a href="#">Category</a>
                  <ul className="dropdown">
                    <li>
                      <Link to={"/admin/category"}>Add</Link>
                    </li>
                    <li>
                      <Link to={"/admin/viewcategory"}>View</Link>
                    </li>
                  </ul>
                </li> 

                <li>
                  <a href="#">Package</a>
                  <ul className="dropdown">
                    <li>
                      <Link to={"/admin/package"}>Add</Link>
                    </li>
                    <li>
                      <Link to={"/admin/viewpackage"}>View</Link>
                    </li>
                  </ul>
                </li> 

                <li>
                  <a href="#">Exercise</a>
                  <ul className="dropdown">
                    <li>
                      <Link to={"/admin/exercise"}>Add</Link>
                    </li>
                    <li>
                      <Link to={"/admin/viewexercise"}>View</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Booking</a>
                  <ul className="dropdown">
                    {/* <li>
                      <Link to={"/admin/booking"}>Add</Link>
                    </li> */}
                    <li>
                      <Link to={"/admin/viewbooking"}>View</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/sign">Logout</Link>
                  <ul className="dropdown">
                    {/* <li>
                      <Link to={"/admin/logout"}>Logout</Link>
                    </li> */}
                  </ul>
                </li>


                <li>
              {/* <Link to={'/admin/category'}>
                Category
              </Link> */}
            </li>
                {/* <li className="active">
                  <a href="./contact.html">Service</a>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="top-option">
              <div className="to-search search-switch">
                <i className="fa fa-search" />
              </div>
              <div className="to-social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="canvas-open">
          <i className="fa fa-bars" />
        </div>
      </div>
    </header>
    {/* Header End */}
    {/* Breadcrumb Section Begin */}
    {/* <section
      className="breadcrumb-section set-bg"
      style={{backgroundImage:"url(/assets/img/breadcrumb-bg.jpg)"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb-text">
              <h2>Service</h2>
              <div className="bt-option">
                <a href="./index.html">Home</a>
                <a href="#">Pages</a>
                <span>Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* Breadcrumb Section End */}
  </>
  
  );
}
