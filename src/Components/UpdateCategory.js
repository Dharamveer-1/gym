import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import AdminFooter from "./AdminFooter";
// import AdminHeader from "./AdminHeader";
// import axios from "axios";
import { toast } from "react-toastify";
// import ApiService from '../ApiService'

function UpdateCategory() {
  const [categoryName, setCategory] = useState("");
  const [description, setDes] = useState("");

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  const changeDes = (event) => {
    setDes(event.target.value);
  };

//   const changeImage = (event) => {
//     setImageName(event.target.value);
//     setImage(event.target.files[0]);
//     // previousImage(event.target.value)
//   };

  let param = useParams();
  const id = param.id;
  useEffect(() => {
    let data = {
      _id: id,
    };
    axios
      .post("http://localhost:2000/api/category/getsingle", data)
      .then((res) => {
        console.log(res.data);
        setCategory(res.data.data.categoryName);
        setDes(res.data.data.description);
        // setImage(res.data.data.Image);
        // setPreviousImage(res.data.data.Image)
      });
  }, []);

  const nav = useNavigate();
  const handleForm = (event) => {
    event.preventDefault();
    let data = {
      _id: id,
      categoryName:categoryName,
      description:description
  }
    // let data = new FormData();
    // data.append("_id", id);
    // data.append("categoryName", categoryName);
    // data.append("description", description);
   
    axios.post("http://localhost:2000/api/category/update", data)

      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          toast.success(res.data.message);
          nav("/admin/viewcategory");
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
    <section>

       <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1 className="text-white font-weight-bold">Update Category</h1>
                <div className="custom-breadcrumbs">
                  <a></a> <span className="mx-2 slash"></span>
                  <span className="text-white">
                    <strong>Category</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container my-4">
          <h1 className="text-center">Update CATEGORY</h1><br></br>
          <form onSubmit={handleForm}>
          <div className="row">
            
            <div className="col-2">Category Name</div>
            <div className="col-10"><input type="text" value={categoryName} onChange={changeCategory} className="form-control" /></div><br></br>
            <div className="col-2">Description</div>
            <div className="col-10"><input type="text" value={description} onChange={changeDes} className="form-control" /></div>
            <br /><br />
            {/* <div className="col-2">Category Image</div> */}
            {/* <div className="col-10"><input type="file" value={imageName} onChange={changeImage} className="form-control" /></div> */}
                            {/* <img src={"http://localhost:4000/"+previousImage} style={{width:200}} /> */}

            <div className="col-2">
              <button type="submit" value="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
          </form>
        </div>  
    </>
  )
}
export default UpdateCategory;
