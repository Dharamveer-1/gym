import Home from './Components/Home';
import './App.css';
import Master from './Components/Master';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Sign from './Components/Sign';
import { Bounce, toast, ToastContainer } from 'react-toastify'

import AdminMaster from './Components/AdminMaster';

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






// import Layout from './Components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
        </Route>
        <Route>
        <Route path='/admin' element={<AdminMaster/>}/>

        <Route path='/admin/category' element={<Category/>}/>
        <Route path='/admin/viewcategory' element={<ViewCategory/>}/>
        
        <Route path='/admin/package' element={<Package/>}/>
        <Route path='/admin/viewpackage' element={<ViewPackage/>}/>

        <Route path='/admin/exercise' element={<Exercise/>}/>
        <Route path='/admin/viewexercise' element={<ViewExercise/>}/>

        {/* <Route path='/admin/booking' element={<Booking/>}/> */}
        <Route path='/admin/viewbooking' element={<ViewBooking/>}/>

        </Route>
      
        <Route path="/singlecategory/:id" element={<SingleCategory />} />
        <Route path="/updatecategory/:id" element={<UpdateCategory />} />

        <Route path="/singlepackage/:id" element={<SinglePackage />} />
        <Route path="/updatepackage/:id" element={<UpdatePackage />} />

        <Route path="/singleexercise/:id" element={<SingleExercise />} />
        <Route path="/updateexercise/:id" element={<UpdateExercise />} />




      </Routes>
      </BrowserRouter>
            <ToastContainer
      position="top-center"
      autoClose={5000}
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
