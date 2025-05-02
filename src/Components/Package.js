import { useState } from "react";
// import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { toast } from "react-toastify";
import react from "react";
// react
function Package() {
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
  const handleForm=(event)=>{
    event.preventDefault()
    let data=new FormData()
    data.append("packageName",packageName)
    data.append("description",description)
    data.append("cost",cost)
    data.append("duration",duration)
    data.append("thumbnail",thumbnail)
    // data.append("PackageName", PackageName);
    // data.append("description", description);
    // data.append("Image", image);

    axios
      .post("http://localhost:3000/api/package/add", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
            <h2>Add Package</h2>
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

      <div className="container my-4">
        <h1 className="text-center">Add Package</h1><br></br>
        <form onSubmit={handleForm}>
          <div className="row">
            <div className="col-2">Package Name</div>
            <div className="col-10">
              <input
                type="text"
                value={packageName}
                onChange={changePackage}
                className="form-control"
              /><br></br>
            </div>

            <div className="col-2">Description</div>
            <div className="col-10">
              <input
                type="text"
                value={description}
                onChange={changeDes}
                className="form-control"
              /><br></br>
            </div>

            <div className="col-2">Cost</div>
            <div className="col-10">
              <input
                type="text"
                value={cost}
                onChange={changeCost}
                className="form-control"
              /><br></br>
            </div>

            <div className="col-2">Duration</div>
            <div className="col-10">
              <input
                type="text"
                value={duration}
                onChange={changeDuration}
                className="form-control"
              /><br></br>
            </div>

            <div className="col-2">thumbnail</div>
            <div className="col-10">
              <input
                type="file"
                value={thumbnailName}
                onChange={changethumbnail}
                className="form-control"
              /><br></br>
            </div>

            <div className="col-2">
              <button type="submit" value="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Package;