import { useState } from "react";
// import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// axios
function Register() {
    const [name, setName] = useState("")
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
  
    const changeName = (event) => {
      setName(event.target.value)
    }
    const changeEmail= (event) => {
      setEmail(event.target.value)
    }
    const changePassword = (event) => {
      setPassword(event.target.value)
    }
    const changeContact = (event) => {
      setContact(event.target.value)
    }
    const changeAddress = (event) => {
      setAddress(event.target.value)
    }
  
    const nav=useNavigate()
    const handleForm=(event)=>{
      event.preventDefault()
      let data={
      name:name,
        email:email,
        password:password,
        contact:contact,
        address:address
      }
      axios.post("http://localhost:2000/api/customer/register",data)
      .then(res=>{
          console.log(res.data)
          if(res.data.success){
  
              toast.success(res.data.message)
              let data1={
                  email:email,
                  password:password
              }
              axios.post("http://localhost:2000/api/customer/login",data1)
              .then(res=>{
                  if(res.data.success==true){
                      toast.success(res.data.message)
                      sessionStorage.setItem("token",res.data.token)
                      localStorage.setItem("token",res.data.token)
                      sessionStorage.setItem("userId",res.data.data._id)
                      nav('/user/userviewcategory')
                  }
              })
          }
          else{
              toast.error(res.data.message)
          }
      })
        .catch(err=>{
            console.log(err)
        })

        
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
            <h2> Register</h2>
            <div className="bt-option">
              <a href="./index.html">Register</a>
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
  {/* <div className="container my-5">

<h1 className="text-center"> Register</h1><br></br>
<form onSubmit={handleForm}>
<div className="row">

    <div className="col-2">Name</div>
    <div className="col-10"><input type="text" value={name} onChange={changeName} className="form-control" /><br></br></div>
    
    <div className="col-2">Email</div>
    <div className="col-10"><input type="text" value={email} onChange={changeEmail} className="form-control" /><br></br></div>

    <div className="col-2">Password</div>
    <div className="col-10"><input type="password" value={password} onChange={changePassword} className="form-control" /><br></br></div>
    

    <div className="col-2">Contact</div>
    <div className="col-10"><input type="text" value={contact} onChange={changeContact} className="form-control" /><br></br></div>
    

    <div className="col-2">Address</div>
    <div className="col-10"><input type="text" value={address} onChange={changeAddress} className="form-control" /><br></br></div>


    <div className="col-2 mx-auto">
      <button type="submit"  className="btn btn-primary">Submit</button>
    </div>
   
</div>
</form> 
</div> */}

<div 
className="container d-flex justify-content-center align-items-center " 
style={{
   minHeight: "90vh",
   minWidth: "100%",
    backgroundImage: 'url("/assets/img/banner-bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   }}>
  <div className="col-md-8 col-lg-6 shadow p-5 rounded bg-">
    <h1 className="text-center text-white fw-bold mb-4" style={{fontSize: "50px"}}>User Registration</h1>
    <form onSubmit={handleForm}>
      <div className="mb-3">
        <label className="form-label fw-semibold text-white">Name</label>
        <input
          type="text"
          value={name}
          onChange={changeName}
          className="form-control"
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold text-white">Email</label>
        <input
          type="email"
          value={email}
          onChange={changeEmail}
          className="form-control"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold text-white">Password</label>
        <input
          type="password"
          value={password}
          onChange={changePassword}
          className="form-control"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold text-white">Contact</label>
        <input
          type="text"
          value={contact}
          onChange={changeContact}
          className="form-control"
          placeholder="Enter your contact number"
          required
        />
      </div>
      <div className="mb-4">
        <label className="form-label fw-semibold text-white">Address</label>
        <input
          type="text"
          value={address}
          onChange={changeAddress}
          className="form-control"
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success fw-bold">
          Register
        </button>
      </div>
    </form>
  </div>
  </div>
    
   </>
  );

}
export default Register;