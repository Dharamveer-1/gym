import Home from './Components/Home';
import './App.css';
import Master from './Components/Master';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
// import Login from './Components/Login';
// import Sign from './Components/Sign';
// import LoginUser from './Components/LoginUser';
import AdminMaster from './Components/AdminMaster';

import SignUser from './Components/SignUser';
import Register from './Register';
import { Bounce, toast, ToastContainer } from 'react-toastify'


import Category from './Components/Category';
import ViewCategory from './Components/ViewCategory';

import Package from './Components/Package';
import ViewPackage from './Components/ViewPackage';

import Exercise from './Components/Exercise';
import ViewExercise from './Components/ViewExercise';
import SingleExercise from './Components/SingleExercise';


// import Booking from './Components/Booking';
import ViewBooking from './Components/ViewBooking';
import SingleCategory from './Components/SingleCategory';
import SinglePackage from './Components/SinglePackage';
import UpdateCategory from './Components/UpdateCategory';
import UpdatePackage from './Components/UpdatePackage';
import UpdateExercise from './Components/UpdateExercise';

import UserMaster from './Components/UserMaster';
import UserViewCategory from './Components/UserViewCategory';
import UserViewExercise from './Components/UserViewExercise';
import UserViewPackage from './Components/UserViewPackage';
import Booking from './Components/Booking';
import AdminViewBooking from './Components/AdminViewBooking';
import UserViewBooking from './Components/UserViewBooking';
import Dashboard from './Components/Dashboard';
import ViewUser from './Components/ViewUser';
import HomeLayout from './Components/HomeLayout';
import AboutUs from './Components/AboutUs';


// import ApiService from './Components/ApiService';





// import Layout from './Components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/> */}
      

        {/* <Route path='/loginuser' element={<LoginUser/>}/> */}
        <Route path='/signuser' element={<SignUser/>}/>
        <Route path='/register' element={<Register/>}/>



        </Route>
        <Route>
        <Route path='/admin' element={<AdminMaster/>}/>
     <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/category' element={<Category/>}/>
        <Route path='/admin/viewcategory' element={<ViewCategory/>}/>
        
        <Route path='/admin/package' element={<Package/>}/>
        <Route path='/admin/viewpackage' element={<ViewPackage/>}/>

        <Route path='/admin/exercise' element={<Exercise/>}/>
        <Route path='/admin/viewexercise' element={<ViewExercise/>}/>
         <Route path='/admin/viewbooking' element={<AdminViewBooking/>}/>
         <Route path='/admin/viewuser' element={<ViewUser/>}/>


        </Route>
        <Route>
        <Route path='/user' element={<UserMaster/>}/>  
        <Route path='/user/home' element={<Home/>}/>
        {/* <Route path='/user/category' element={<Category/>}/>  */}
        <Route path='/user/userviewcategory' element={<UserViewCategory/>}/>    
        <Route path='/user/userviewexercise' element={<UserViewExercise/>}/>    
        <Route path='/user/userviewpackage' element={<UserViewPackage/>}/>  
        <Route path='/user/booking/:id' element={<Booking/>}/>  
         <Route path='/user/userviewbooking' element={<UserViewBooking/>}/>  


   
        </Route>


      
        <Route path="/singlecategory/:id" element={<SingleCategory />} />
        <Route path="/updatecategory/:id" element={<UpdateCategory />} />

        <Route path="/singlepackage/:id" element={<SinglePackage />} />
        <Route path="/updatepackage/:id" element={<UpdatePackage />} />

        <Route path="/singleexercise/:id" element={<SingleExercise />} />
        <Route path="/updateexercise/:id" element={<UpdateExercise />} />

        {/* <Route path='/apiservice' element={<ApiService/>}/>   */}



        



      </Routes>
      </BrowserRouter>
            <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      />
    </>
  
  );
}

export default App;
