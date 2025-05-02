import { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Sign() {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const nav=useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    if(email=="admin@gmail.com" && password=="123"){
      console.log("valid user");
      toast.success("Login succesfully !!")
      nav('/admin/category')
      
    }else{
      console.log('invalid user')
      toast.error('invalid user')
      
    }
}

  return (
   
      <>
    {/* <Header/> */}
  <section
    className="breadcrumb-section set-bg"
    // data-setbg="/assets/img/breadcrumb-bg.jpg"
    style={{backgroundImage:"url(/assets/img/breadcrumb-bg.jpg)"}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2> Admin Login</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              {/* <a href="#">Pages</a> */}
              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Contact Section Begin */}
  <div className="container my-5">

<h1 className="text-center"> Admin Login</h1><br></br>
<form onSubmit={handleForm}>
<div className="row">

    <div className="col-2">Email</div>
    <div className="col-10"><input type="text" value={email} onChange={changeEmail} className="form-control" /></div>
    <br /><br></br>
    <div className="col-2">Password</div>
    <div className="col-10"><input type="password" value={password} onChange={changePassword} className="form-control" /></div>

    <div className="">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
   
</div>
</form> 
</div>

   </>
  );
}
export default Sign;