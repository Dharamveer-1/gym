import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// toast
// axios
// useEffect
// useParams
// useState
// react
function Booking() {
  
  const [accountHolder, setAccountHolder] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [paymentMode, setPaymentMode] = useState("");
    const [course, setCourse] = useState("");
     const [price, setPrice] = useState("");

      let param=useParams()
    const id=param.id
useEffect(()=>{
    let data={
        _id:id
    }

axios.post('http://localhost:2000/api/package/getsingle',data)
    .then((res)=>{
        setCourse(res.data.data.packageName)
        setPrice(res.data.data.cost)
    })
},[])

    const handleForm = (e) => {
        e.preventDefault();
        let data = {
            accountHolder:accountHolder,
            accountNumber:accountNumber,
            cvv:cvv,
            paymentMode:paymentMode,
            package:course,
            price:price
           
        };

        axios.post('http://localhost:2000/api/booking/add', data)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    toast.success(res.data.message);
                } else {
                    toast.error(res.data.message);
                }
            }).catch(err => {
                toast.error("Booking failed");
            });
    };
  return (
    <>
    <UserHeader/>
        <section
    className="breadcrumb-section set-bg"
    // data-setbg="/assets/img/breadcrumb-bg.jpg"
    style={{backgroundImage:"url(/assets/img/breadcrumb-bg.jpg)"}}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb-text">
            <h2>Add Booking</h2>
            <div className="bt-option">
              <a href="./index.html">Home</a>
              {/* <a href="#">Pages</a> */}
              <span>Booking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

        
       

            <div className="container">
                <h1 className="text-center">Buy Package</h1><br></br>
                <form onSubmit={handleForm}>
                    <div className="row">

                        <div className="col-6">
                            <label>Account Holder Name</label>
                            <input type="text" value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} className="form-control" required /><br></br>
                        </div>

                        <div className="col-6">
                            <label>Account Number</label>
                            <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className="form-control" required />
                        </div>

                        <div className="col-6">
                            <label>CVV</label>
                            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} className="form-control" required /><br></br>
                        </div>

                        <div className="col-6">
                            <label>Payment Mode</label><br />
                            <input type="radio" id="credit" name="payment" value="credit" checked={paymentMode === "credit"} onChange={(e) => setPaymentMode(e.target.value)} />
                            <label htmlFor="credit" className="mx-2">Credit Card</label>

                            <input type="radio" id="debit" name="payment" value="debit" checked={paymentMode === "debit"} onChange={(e) => setPaymentMode(e.target.value)} />
                            <label htmlFor="debit" className="mx-2">Debit Card</label>
                        </div>
                        <div className="col-6">
                       Package Name<input type="text" value={course} onChange={(e) => setCourse(e.target.value)} className="form-control" readOnly />
                            
               
                    </div>
                           <div className="col-6">
                       Package Price <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" readOnly /><br></br>
                            
               
                    </div>
                    {/* <div className="col-6">
  <label>Customer Email</label>
  <input type="text" value={customer} className="form-control" readOnly />
</div>
                        */}

                        <div className="col-12 py-3 text-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        
    </>
  );
}
export default Booking;