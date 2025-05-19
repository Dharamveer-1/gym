import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function SinglePackage (){
    var [data, setData] = useState({})
    let param=useParams()
    const id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        axios.post('http://localhost:2000/api/package/getsingle',data)
        .then((res)=>{
            console.log(res.data)
            setData(res.data.data)
        })
    },[id])

    return (
        <>
        <table className="table">
            <tbody>
                <tr>
                {/* <th>Sr No</th> */}
                <th>Package Name</th>
                <th>Thumbnail</th>
                <th>Cost</th>
                <th>Duration</th>
                <th>Description</th>
                {/* <th>Action</th>
                <th>Views</th> */}
                </tr>
                <tr>
                    {/* <td>{data.SrNo}</td> */}
                    <td>{data.packageName}</td>
                    <td>
                        {<img
                          src={"http://localhost:2000/" + data.thumbnail}
                          width="200px"
                        />}
                      </td>
                    <td>{data.cost}</td>
                    <td>{data.duration}</td>
                    <td>{data.description}</td>
                    {/* <td>{data.action}</td>
                    <td>{data.views}</td> */}
                    {/* <td><img src={'http://localhost:3000/'+ data.Image} width="200px"/></td> */}
                </tr>

            </tbody>
           </table>
       
        </>
    )
        
    
}
export default SinglePackage