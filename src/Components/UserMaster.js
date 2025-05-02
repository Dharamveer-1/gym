
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import { Outlet } from "react-router-dom";




export default function UserMaster(){
    return(
        <>
        <UserHeader/>
        <Outlet/>
        <UserFooter/>
        </>
    )
}