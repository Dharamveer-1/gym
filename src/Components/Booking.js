// import { useState } from "react";
// // import AdminFooter from "./AdminFooter";
// import AdminHeader from "./AdminHeader";
// import axios from "axios";
// import { toast } from "react-toastify";
// import react from "react";
// // react
// function Booking() {
//   const [cardno, setcardno] = useState("");
//   const [cvp, setcvp] = useState("");
//   const [expiredate, setexpiredate] = useState("");
//   const [dateofBooking, setdateofBooking] = useState("");

//   const changecardno = (event) => {
//     setcardno(event.target.value);
//   };
//   const changecvp = (event) => {
//     setcvp(event.target.value);
//   };

//   const changeexpiredate = (event) => {
//     setexpiredate(event.target.value);
//   };

//   const changedateofBooking = (event) => {
//     setdateofBooking(event.target.value);
//   };
  
//   const handleForm=(event)=>{
//     event.preventDefault()
//     let data=new FormData()
//     data.append("Cardno",cardno),
//     data.append("cvp",cvp),
//     data.append("expiredate",expiredate),
//     data.append("dateofBooking",dateofBooking),

//     axios
//       .post("http://localhost:3000/api/booking/add", data)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.success) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//     <AdminHeader/>
//         <section
//     className="breadcrumb-section set-bg"
//     // data-setbg="/assets/img/breadcrumb-bg.jpg"
//     style={{backgroundImage:"url(/assets/img/breadcrumb-bg.jpg)"}}
//   >
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12 text-center">
//           <div className="breadcrumb-text">
//             <h2>Add Booking</h2>
//             <div className="bt-option">
//               <a href="./index.html">Home</a>
//               {/* <a href="#">Pages</a> */}
//               <span>Booking</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//       <div className="container my-4">
//         <h1 className="text-center">Add Booking</h1><br></br>
//         <form onSubmit={handleForm}>
//           <div className="row">
//             <div className="col-2">cardno</div>
//             <div className="col-10">
//               <input
//                 type="text"
//                 value={cardno}
//                 onChange={changecardno}
//                 className="form-control"
//               /><br></br>
//             </div>
//             <div className="col-2">cvp</div>
//             <div className="col-10">
//               <input
//                 type="text"
//                 value={cvp}
//                 onChange={changecvp}
//                 className="form-control"
//               /><br></br>
//             </div>
//             <div className="col-2">expiredate</div>
//             <div className="col-10">
//               <input
//                 type="text"
//                 value={expiredate}
//                 onChange={changeexpiredate}
//                 className="form-control"
//               /><br></br>
//             </div>

//             <div className="col-2">dateofBooking</div>
//             <div className="col-10">
//               <input
//                 type="text"
//                 value={dateofBooking}
//                 onChange={changedateofBooking}
//                 className="form-control"
//               /><br></br>
//             </div>

//             <div className="col-2">
//               <button type="submit" value="submit" className="btn btn-success">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
// export default Booking;