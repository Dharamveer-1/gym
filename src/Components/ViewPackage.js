import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";
// import AdminFooter from "./AdminFooter"
// import Package from "./Package"
import { Link } from "react-router-dom";

function ViewPackage() {
  const [data, setData] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/package/getall")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete]);
  // }, [isDelete]);

    const deleteData = (id) => {
      let data = {
          _id: id
      }
      axios.post("http://localhost:3000/api/package/delete",data)
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
                <h2>View Package</h2>
                <div className="bt-option">
                  <a href="./index.html">Home</a>
                  {/* <a href="#">Pages</a> */}
                  <span>Package</span>
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
          <h1>View Package</h1>
          <br></br>
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>Sr No</th>
                <th>Package Name</th>
                <th>Thumbnail</th>
                <th>Cost</th>
                <th>Duration</th>
                <th>Description</th>
                <th>Action</th>
                <th>Views</th>
                <th>Edit</th>

              </tr>

              {
                data.map((el, index) => {
                return (
                  <>
                    <tr>
                      <td>{index+1}</td>
                      {/* <td>{el.srNo}</td> */}
                      <td>{el.packageName}</td>
                      <td>
                        {<img
                          src={"http://localhost:3000/" + el.thumbnail}
                          width="200px"
                        />}
                      </td>
                      <td>{el.cost}</td>
                      <td>{el.duration}</td>
                      <td>{el.description}</td>
                      {/* <td>{el.action}</td>
                      <td>{el.views}</td> */}
                      <td><button className="btn btn-outline-danger" onClick={()=>{deleteData(el._id)}}><i class="bi bi-trash3"></i></button></td>
                      <td> <Link to={'/singlepackage/'+el._id} className="btn btn-outline-info"><i class="bi bi-eye"></i></Link> </td>
                      <td> <Link to={'/updatepackage/'+el._id} className="btn btn-outline-success"><i class="bi bi-pencil-square"></i></Link> </td>

                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ViewPackage;
