import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Form, useNavigate, useParams } from "react-router-dom"

  import axios from "axios"
  import { Link } from "react-router-dom"
import UserHeader from "./UserHeader"
//   import AdminHeader from "./AdminHeader"
  
  function UserViewPackage(){
    const [data, setData] = useState([])
   
    const [packageName, setPackage] = useState("");
    const [description, setDes] = useState("");
    const [cost, setCost] = useState("");
    const [duration, setDuration] = useState("");
    const [thumbnail, setthumbnail] = useState({});
    const [thumbnailName, setthumbnailName] = useState("");
  
    const changePackage = (event) => {
      setPackage(event.target.value);
    };
    const changeDes = (event) => {
      setDes(event.target.value);
    };
  
    const changeCost = (event) => {
      setCost(event.target.value);
    };
  
    const changeDuration = (event) => {
      setDuration(event.target.value);
    };
  
    const changethumbnail = (event) => {
      setthumbnail(event.target.files[0]);
      setthumbnailName(event.target.value);
    };

    useEffect(() => {
        axios.post("http://localhost:2000/api/package/getall")
        .then((res) => {
          setData(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        })
    } , []
    )


    return (
      <>
            {/* <AdminHeader/> */}
            <UserHeader/>
                <section
            className="breadcrumb-section set-bg"
            // data-setbg="/assets/img/breadcrumb-bg.jpg"
            style={{backgroundImage:"url(/assets/img/breadcrumb-bg.jpg)"}} >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="breadcrumb-text">
                    <h2>View User Package</h2>
                    <div className="bt-option">
                      {/* <a href="./index.html"></a> */}
                      {/* <a href="#">Pages</a> */}
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <div className="container table-responsive py-5">
          {/* <h2 className="text-center">View Category</h2> */}
          <div className="row">

                      {
                          data.map((el, index) => {
                              return (
                                  <>
                                      <div className="col-md-6 py-1">
                                          <div className="card" style={{ minWidth: "20px" }}>
                                           <img src={"http://localhost:2000/" + el.thumbnail} class="card-img-top" width="100px" alt="..."/>
                                              <div className="card-body">
                                           <h5 className="card-title">Package Name : {el.packageName}</h5>

                                           <h5 className="card-title">Duration : {el.duration}</h5>
                                           <h5 className="card-title">Cost : {el.cost}</h5>
                                           <h5 className="card-title"> {el.description}</h5>
                                           
                                            <div className="text-center">
                                            {/* <button type="buy"  style={{ width: '100px', height: '50px' }} className="btn btn-primary">Buy</button> */}
                                            <Link to={'/user/booking/'+el._id} className="btn btn-primary">Buy</Link>
                                            </div>


                                          
                                                  {/* <p className="card-text">
                                                  </p> */}
                                  
                                                  {/* <p className="card-text text-center">
                                                      <button onClick={() => { setJobId(el._id);setIsModalOpen(true) }} class="btn btn-primary">Apply</button>
                                                  </p> */}
                                              </div>
                                          </div>
                                      </div>
                                  </>
                              )
                          })
                      }
                  </div>
          {/* <table className="table table-bordered table-hover" >
            <tbody>
              <tr>
                <th>S.no</th>
                <th>Category</th>
                <th>Thumbnail</th>
              
              </tr>

              {
                data.map((el, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{el.categoryName}</td>
                      <td><img src={"http://localhost:1000/" + el.thumbnail} style={{ width: "200px" }} /></td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table> */}
        </div>
      </>
    )
  }
  export default UserViewPackage