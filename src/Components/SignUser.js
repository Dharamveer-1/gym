import { useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// axios
function SignUser() {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
  }
  const nav=useNavigate()
  const handleForm=(event)=>{
    event.preventDefault()
    let data={
      email:email,
      password:password
    }
    
    axios.post('http://localhost:2000/api/customer/login',data)
    .then((res)=>{
      console.log(res.data)
      if(res.data.success==true){
        toast.success(res.data.message)
        // sessionStorage.setItem(keys , value)
        sessionStorage.setItem("userData",JSON.stringify(res.data.data))
        sessionStorage.setItem("userId",res.data.data._id)
        sessionStorage.setItem("token",res.data.token)
        localStorage.setItem("token",res.data.token)
        if(res.data.data.userType == 1){
          nav("/admin/dashboard")

        }
        else{
          nav("/user/userviewexercise")
          nav("/user/userviewpackage")
          nav("/user/userviewcategory")


        }
        
      }else{
        toast.error(res.data.message)
      }
      
      
     
    }).catch((err)=>{
      console.log(err);
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
            <h2> Login</h2>
            <div className="bt-option">
              <a href="./index.html">Login</a>
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

<h1 className="text-center">Login</h1><br></br>
<form onSubmit={handleForm}>
<div className="row">

    <div className="col-2">Email</div>
    <div className="col-10"><input type="text" value={email} onChange={changeEmail} className="form-control" /></div>
    <br /><br></br>
    <div className="col-2">Password</div>
    <div className="col-10"><input type="password" value={password} onChange={changePassword} className="form-control" /><br></br></div>

    <div className="col-2 mx-auto">
      <button type="submit"  className="btn btn-primary">Submit</button>
    </div>
   
</div>
</form> 
</div> */}
{/* <div className="container d-flex justify-content-center align-items-center my-4" style={{ minHeight: "80vh",}}>
  <div className="col-md-6 col-lg-5 shadow p-5 rounded" style={{ backgroundColor: "#ffffff" }}>
    <h2 className="text-center mb-4 text-primary fw-bold"> Login</h2>
    <form onSubmit={handleForm}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-semibold">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={changeEmail}
          className="form-control"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label fw-semibold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={changePassword}
          className="form-control"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success fw-bold">
          Login
        </button>
      </div>
    </form>
  </div>
</div> */}
<div 
className="container d-flex justify-content-center align-items-center" 
style={{
    minHeight: "90vh",
   minWidth: "100%",
    backgroundImage: 'url("/assets/img/banner-bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   }}>
  <div className="col-md-8 col-lg-6 shadow p-5 rounded" style={{ backgroundColor: "" }}>
    <h1 className="text-center mb-4 text-white fw-bold" style={{ fontSize: "60px" }}>
  Login
</h1>
    <form onSubmit={handleForm}>
      <div className="mb-4">
        <label htmlFor="email" className="form-label fw-semibold text-white fs-5">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={changeEmail}
          className="form-control form-control-lg"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label fw-semibold text-white fs-5">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={changePassword}
          className="form-control form-control-lg"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-success btn-lg fw-bold">
          Login
        </button>
      </div>
    </form>
  </div>
</div>


   </>
  );
}
export default SignUser;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// function SignUser() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("user"); // NEW STATE

//   const changeEmail = (e) => setEmail(e.target.value);
//   const changePassword = (e) => setPassword(e.target.value);
//   const changeUserType = (e) => setUserType(e.target.value); // NEW HANDLER

//   const nav = useNavigate();

//   const handleForm = (event) => {
//     event.preventDefault();
//     let data = {
//       email: email,
//       password: password,
//       userType: userType, // INCLUDE userType
//     };

//     axios
//       .post("http://localhost:2000/api/customer/login", data)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.success === true) {
//           toast.success(res.data.message);
//           sessionStorage.setItem("userData", JSON.stringify(res.data.data));
//           sessionStorage.setItem("userId", res.data.data._id);
//           sessionStorage.setItem("token", res.data.token);
//           localStorage.setItem("token", res.data.token);

//           if (res.data.data.userType === 1 || userType === "admin") {
//             nav("/admin/dashboard");
//           } else {
//             nav("/user/userviewexercise");
//           }
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Login failed. Please try again.");
//       });
//   };

//   return (
//     <>
//       {/* Breadcrumb Section */}
//       <section
//         className="breadcrumb-section set-bg"
//         style={{ backgroundImage: "url(/assets/img/breadcrumb-bg.jpg)" }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <div className="breadcrumb-text">
//                 <h2>Login</h2>
//                 <div className="bt-option">
//                   <a href="/">Home</a>
//                   <span>Login</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Login Form Section */}
//       <div
//         className="container d-flex justify-content-center align-items-center my-5"
//         style={{ minHeight: "80vh" }}
//       >
//         <div
//           className="col-md-8 col-lg-6 shadow p-5 rounded"
//           style={{ backgroundColor: "#ffffff" }}
//         >
//           <h1 className="text-center mb-4 fw-bold" style={{ fontSize: "60px" }}>
//             Login
//           </h1>
//           <form onSubmit={handleForm}>
//             <div className="mb-4">
//               <label htmlFor="email" className="form-label fw-semibold fs-5">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 value={email}
//                 onChange={changeEmail}
//                 className="form-control form-control-lg"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="form-label fw-semibold fs-5">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={changePassword}
//                 className="form-control form-control-lg"
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="userType" className="form-label fw-semibold fs-5">
//                 Select User Type
//               </label>
//               <select
//                 id="userType"
//                 value={userType}
//                 onChange={changeUserType}
//                 className="form-select form-select-lg"
//                 required
//               >
//                 <option value="user">User</option>
//                 <option value="admin">Admin</option>
//               </select>
//             </div>
//             <div className="d-grid">
//               <button type="submit" className="btn btn-success btn-lg fw-bold">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUser;
