import './App.css';
import './Components/Home/Responsive.css';
// import Home from './Components/Layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Stuform from './Components/Auth/Stuform';
import Studentdetails from './Components/Layout/Studentdetails';
import Profiles from './Components/Layout/Profiles/Profile';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import NotFound from './Components/Utility/NotFound';
import Teacher from './Components/Teachers/Teacher';
import EditEnformation from './Components/Layout/Profiles/EditEnformation';
import Dashboard from './Components/Layout/Dashboard';
import TechRegistation from './Components/Teachers/TechRegistation';
import Student from './Components/Layout/Student';
import Attendance from './Components/Teachers/TeachAttendance/Attendance';
import TeachDetails from './Components/Teachers/TeachDetails';
import UpdateTeach from './Components/Teachers/UpdateTeach';
import Footer from './Components/Layout/Footer';
import Home from './Components/Home/Home';
import Attendanceform from './Components/Teachers/TeachAttendance/Attendanceform';
// import Notification from './Components/Home/Notification';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='home' element={<Home/>}/> */}


          {/* PUBLIC / SIMPLE PROTECTED */}
          {/* <Route path='/student' element={<PrivateRoute><Student /></PrivateRoute>} /> */}
          {/* <Route path='/teacher' element={<PrivateRoute><Teacher /></PrivateRoute>} /> */}


          {/* PROTECTED LAYOUT */}
          <Route path='/' element={<Dashboard />}>
            <Route path='' element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path='footer' element={<PrivateRoute><Footer/></PrivateRoute>}/>
            <Route path='student' element={<PrivateRoute><Student /></PrivateRoute>} />
            <Route path='teacher' element={<PrivateRoute><Teacher /></PrivateRoute>} />
            <Route path='stuform' element={<PrivateRoute><Stuform /></PrivateRoute>} />
            <Route path='studentdetails/:id' element={<PrivateRoute><Studentdetails /></PrivateRoute>} />
            <Route path='techregistation' element={<PrivateRoute><TechRegistation /></PrivateRoute>} />
            <Route path='/teachdetails/:id' element={<PrivateRoute><TeachDetails /></PrivateRoute>} />
            <Route path='/updateteach' element={<PrivateRoute><UpdateTeach /></PrivateRoute>} />
            <Route path='/attendanceform' element={<PrivateRoute><Attendanceform/></PrivateRoute>}/>
                       <Route path='/attendance' element={<PrivateRoute><Attendance /></PrivateRoute>} />
            <Route path='/editenformation' element={<PrivateRoute><EditEnformation /></PrivateRoute>} />
            {/* <Route path='/notification' element={<PrivateRoute><Notification/></PrivateRoute>}/> */}

            {/* public inside dashboard */}
            <Route path='profile' element={<Profiles />} />
          </Route>

          {/* NOT FOUND */}
          <Route path='*' element={<NotFound />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
