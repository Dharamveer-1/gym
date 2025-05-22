
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminFooter from "./AdminFooter"



function Dashboard(){
const [data,setData]=useState([])
useEffect(()=>{
  // let data1={
  //   status:true
  // }
    axios.post("http://localhost:2000/api/admin/dashboard")
    .then((res)=>{
      console.log(res)
        setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
},[])
    return(
     <>
     <AdminHeader/>
       <section
    className="breadcrumb-section set-bg"
    // data-setbg="/assets/img/breadcrumb-bg.jpg"
    style={{backgroundImage:"url(/assets/img/breadcrumb-bg.jpg)"}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Admin Dashboard</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              {/* <a href="#">Pages</a> */}
              <span>Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     {/* <div className="container-fluid" style={{overflow:"hidden"}}>
        <div className="container">
            <div className="row py-2">
                <div className="col-md-12 fw-bold text-center py-3"><h1 id="welcome">Welcome Admin</h1></div>
                <div className="col-md-1"></div>

                <div className="col-md-4 text-center py-5 shadow">
                    <Link to={"/admin/viewcategory"} style={{textDecoration:"none",}}><br/><h1>Total Category {data.totalcategory}
                    </h1></Link>
                
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 shadow text-center py-5">
                <Link to={"/admin/viewexercise"} style={{textDecoration:"none"}}><br/><h1>Total Exercise {data.totalexercise}</h1></Link>
                </div>

                <div className="col-md-12 py-3 fw-bold text-center"></div>
                <div className="col-md-1"></div>

                         <div className="col-md-4 text-center  py-5 shadow">
                    <Link to={"/admin/viewpackage"} style={{textDecoration:"none"}}><br/><h1>Total package {data.totalpackage}</h1>
     
                    </Link>
                
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 text-center  py-5 shadow">
                    <Link to={"/admin/viewuser"} style={{textDecoration:"none"}}><br/><h1>Total User {data.totalCustomer}</h1>
     
                    </Link>
                
                </div>
           
              

            </div>
        </div>
     </div> */}
     <div className="container-fluid" style={{ backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
  <div className="container py-5">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h1 className="fw-bold text-dark" style={{ fontSize: "4.8rem" }}><br></br>
          Welcome Admin 👋
        </h1>
        {/* <p className="text-muted">Here's an overview of your platform's performance</p> */}
      </div>

      {/* CARD TEMPLATE */}
      {[
        {
          title: "Total Categories",
          value: data.totalcategory,
          // icon: "fas fa-list",
          bg: "#0d9488",
          link: "/admin/viewcategory"
        },
        {
          title: "Total Exercises",
          value: data.totalexercise,
          icon: "fas fa-dumbbell",
          bg: "#3b82f6",
          link: "/admin/viewexercise"
        },
        {
          title: "Total Packages",
          value: data.totalpackage,
          icon: "fas fa-box-open",
          bg: "#f59e0b",
          link: "/admin/viewpackage"
        },
        {
           title: "Total Users",
          value: data.totalCustomer,
          // icon: "fas fa-list",
          bg: "#10b981",
          link: "/admin/viewuser"
        },
      ].map((item, idx) => (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={idx}>
          <Link to={item.link} style={{ textDecoration: "none" }}>
            <div
              className="shadow-lg card-glass h-100 text-white text-center p-4"
              style={{
                backgroundColor: item.bg,
                borderRadius: "20px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <i className={`${item.icon} fa-3x mb-3`}></i>
              <h5>{item.title}</h5>
              <h2 className="fw-bold">{item.value}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
<AdminFooter/>

     </>

    )
}
export default Dashboard


