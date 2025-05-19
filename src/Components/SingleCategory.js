import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function SingleCategory (){
    var [data, setData] = useState({})
    let param=useParams()
    const id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        axios.post('http://localhost:2000/api/category/getsingle',data)
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
                <th>Category Name</th>
                <th>Thumbnail</th>
                <th>Description</th>
                </tr>

                <tr>                      
                    {/* <td>{data.srNo}</td> */}
                    <td>{data.categoryName}</td>
                    <td>
                        {<img
                          src={"http://localhost:2000/" + data.thumbnail}
                          width="200px"
                        />}
                      </td>
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
export default SingleCategory