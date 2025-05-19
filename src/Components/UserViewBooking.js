import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import UserHeader from "./UserHeader"

function UserViewBooking() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.post("http://localhost:2000/api/booking/getall")
            .then((res) => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
                toast.error("Failed to fetch bookings")
            })
    }


    return (
        <>
        <UserHeader/>
                <section
        className="breadcrumb-section set-bg"
        // data-setbg="/assets/img/breadcrumb-bg.jpg"
        style={{ backgroundImage: "url(/assets/img/breadcrumb-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb-text">
                <h2>View Booking</h2>
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
                <h1 className="text-center mb-4">View Booking</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S no</th>
                            <th scope="col">Package Name</th>
                             <th scope="col">Package Price</th>
                            <th scope="col">Account Holder Name</th>
                            <th scope="col">Payment Mode</th>
                            <th scope="col">Status</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((el, index) => (
                            <tr key={el._id}>
                                <td>{index + 1}</td>
                                <td>{el.package}</td>
                                <td>{el.price}</td>
                                <td>{el.accountHolder}</td>
                                <td>{el.paymentMode}</td>
                                <td>{el.status}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserViewBooking