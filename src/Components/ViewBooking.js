import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";
// import AdminFooter from "./AdminFooter"
// import Booking from "./Booking"
// import {Link} from "react-router-dom"

function ViewBooking() {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    axios.post("http://localhost:3000/api/booking/getall")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete]);

  const deleteData = (id) => {
    let data = {
        _id: id
    }
    axios.post("http://localhost:3000/api/booking/delete",data)
    .then((res)=>{
        console.log(res.data)
        if(res.data.success){
            setIsDelete(res.data.data)
            toast.error(res.data.message)
        }else{
            toast.error(res.data.message)
        }
            

    })
    setIsDelete(true)
}


  return (
    <>
      <AdminHeader />
      <section
        className="breadcrumb-section set-bg"
        // data-setbg="/assets/img/breadcrumb-bg.jpg"
        style={{ backgroundImage: "url(/assets/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>View Booking</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  {/* <a href="#">Pages</a> */}
                  <span>Booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container"></div>
      <div className="row"></div>
      <div className="col-lg-12 text-center"></div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1>View Booking</h1>
          <br></br>
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Sr No</th>
                <th>cardno</th>
                <th>cvp</th>
                <th>dateofBooking</th>
                <th>expiredate</th>
                <th>Action</th>
              </tr>
             
                {
                // data.map((el, index) => {
                    data.map((el,index)=>{
                        return(
                            <>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{el.cardno}</td>
                                    <td>{el.cvp}</td>
                                    <td>{el.dateofBooking}</td>
                                    <td>{el.expiredate}</td>
                                    <td><button className="btn btn-outline-danger" onClick={()=>{deleteData(el._id)}}><i class="bi bi-trash3"></i></button></td>
                                  
                                
                                </tr>
                            </>
                        )
                    })                  
}       
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ViewBooking;
