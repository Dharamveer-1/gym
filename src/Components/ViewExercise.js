import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
// import Exercise from "./Exercise"
import {Link} from "react-router-dom"

function ViewExercise() {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    axios.post("http://localhost:2000/api/exercise/getall")
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
    axios.post("http://localhost:2000/api/exercise/delete",data)
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
                <h2>View Exercise</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  {/* <a href="#">Pages</a> */}
                  <span>Exercise</span>
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
  <div className="col-lg-12 text-center mb-4"><br></br>
           <h1 className="text-center fw-bold mb-4 text- display-3">
  View <span style={{ color: "#ff6600" }}>Exercise</span>
</h1>
  </div>

  <div className="col-lg-12">
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle shadow-sm">
        <thead className="table-dark text-center">
          <tr>
            <th>Sr No</th>
            <th>Exercise Name</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
            <th>View</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((el, index) => (
            <tr key={el._id}>
              <td>{index + 1}</td>
              <td className="fw-semibold">{el.exerciseName}</td>
              <td>
                <img
                  src={`http://localhost:2000/${el.thumbnail}`}
                  alt="thumbnail"
                  className="img-thumbnail"
                  style={{ width: "100px", borderRadius: "10px" }}
                />
              </td>
              <td>{el.description}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteData(el._id)}
                  title="Delete"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
              <td>
                <Link
                  to={`/singleexercise/${el._id}`}
                  className="btn btn-info btn-sm"
                  title="View Details"
                >
                  <i className="bi bi-eye"></i>
                </Link>
              </td>
              <td>
                <Link
                  to={`/updateexercise/${el._id}`}
                  className="btn btn-success btn-sm"
                  title="Edit"
                >
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
<AdminFooter/>
    </>
  );
}
export default ViewExercise;
