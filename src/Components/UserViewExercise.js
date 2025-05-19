import { useEffect, useState } from "react"
  import { toast } from "react-toastify"
  import { Form, useNavigate, useParams } from "react-router-dom"

  import axios from "axios"
  import { Link } from "react-router-dom"
import UserHeader from "./UserHeader"
//   import AdminHeader from "./AdminHeader"
  
  function UserViewExercise(){
    const [data, setData] = useState([])
   
    const [exerciseName, setExercise] = useState("");
    const [description, setDes] = useState("");
    const [thumbnail, setthumbnail] = useState({});
    const [thumbnailName, setthumbnailName] = useState("");
  
    const changeExercise = (event) => {
      setExercise(event.target.value);
    };
    const changeDes = (event) => {
      setDes(event.target.value);
    };
  
    const changethumbnail = (event) => {
      setthumbnail(event.target.files[0]);
      setthumbnailName(event.target.value);
    };

    useEffect(() => {
        axios.post("http://localhost:2000/api/exercise/getall")
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
                    <h2>View User Exercise</h2>
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
          <h2 className="text-center">View Exercise</h2><br></br>
          <div className="row">

                      {
                          data.map((el, index) => {
                              return (
                                  <>
                                      <div className="col-md-6 py-1">
                                          <div className="card" style={{ minWidth: "50px" }}>
                                          <img src={"http://localhost:2000/" + el.thumbnail}
                                          class="card-img-top"
                                           height={"400px"} 
                                           alt="..."/>
                                              <div className="card-body">

                                                  <h5 className="card-title"> {el.exerciseName}</h5>
                                                 <h5 className="card-title"> {el.description}</h5>

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
  export default UserViewExercise