import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

function AdminViewBooking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .post("http://localhost:2000/api/booking/getall")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch bookings");
      });
  };

  const changeStatus = (id, newStatus) => {
    axios
      .post("http://localhost:2000/api/booking/changestatus", {
        _id: id,
        status: newStatus,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          fetchData();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update status");
      });
  };

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
      {/* <div className="container">
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
                            <th scope="col">Action</th>
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
                                <td>
                                    <button
                                        className="btn btn-success btn-sm me-2"
                                        onClick={() => changeStatus(el._id, "Approved")}
                                        disabled={el.status === "Approved"}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => changeStatus(el._id, "Declined")}
                                        disabled={el.status === "Declined"}
                                    >
                                        Decline
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
      <div className="container"></div>
      <div className="row"></div>
      <div className="col-lg-12 text-center"></div>

      <div className="row"></div>
      <div className="col-lg-12 text-center mb-4">
        <h1 className="text-center fw-bold mb-4 text- display-3">
          View <span style={{ color: "#ff6600" }}>Booking</span>
        </h1>

        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle shadow-sm">
              <thead className="table-dark text-center">
                <tr>
                  <th>Sr No</th>
                  <th>Package Name</th>
                  <th>Price</th>
                  <th>Account Holder</th>
                  <th>Payment Mode</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data.map((el, index) => (
                  <tr key={el._id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{el.package}</td>
                    <td>₹{el.price}</td>
                    <td>{el.accountHolder}</td>
                    <td>{el.paymentMode}</td>
                    <td>
                      <span
                        className={`badge px-3 py-2 ${
                          el.status === "Approved"
                            ? "bg-success"
                            : el.status === "Declined"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {el.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-success me-2"
                        onClick={() => changeStatus(el._id, "Approved")}
                        disabled={el.status === "Approved"}
                      >
                        ✅ Approve
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => changeStatus(el._id, "Declined")}
                        disabled={el.status === "Declined"}
                      >
                        ❌ Decline
                      </button>
                    </td>
                  </tr>
                ))}
                {data.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-muted text-center py-4">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AdminFooter />
    </>
  );
}

export default AdminViewBooking;
