// import logo from './logo.svg';
import './App.css';
// import Home from './Components/Layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Stuform from './Components/Auth/Stuform';
import Studentdetails from './Components/Layout/Studentdetails';
import Profiles from './Components/Layout/Profiles/Profile';
// import Update from './Components/Layout/Update';
// import PrivateRouter from './Components/PrivateRoutes/PrivateRoute';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import NotFound from './Components/Utility/NotFound';
import Teacher from './Components/Teachers/Teacher';
import EditEnformation from './Components/Layout/Profiles/EditEnformation';
// import EditAdd from './Components/Layout/Profiles/EditAdd';
import Dashboard from './Components/Layout/Dashboard';
import TechRegistation from './Components/Teachers/TechRegistation';
import Student from './Components/Layout/Student';
import Attendance from './Components/Teachers/TeachAttendance/Attendance';
import TeachDetails from './Components/Teachers/TeachDetails';
import UpdateTeach from './Components/Teachers/UpdateTeach';
// import Api from './Components/API/Api';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Api/> */}


          <Route path='/' element={<Dashboard />}>
            <Route path='student' element={<PrivateRoute><Student /></PrivateRoute>} />
            <Route path='teacher' element={<PrivateRoute><Teacher /></PrivateRoute>} />
            <Route path='/stuform' element={<PrivateRoute><Stuform /></PrivateRoute>} />
            {/* <Route path='/studentdetails/:id' element={<PrivateRoute><Studentdetails /></PrivateRoute>} /> */}
            <Route path='/techregistation' element={<PrivateRoute><TechRegistation /></PrivateRoute>} />
            <Route path='/teachdetails/:id' element={<PrivateRoute><TeachDetails/></PrivateRoute>}/>
            <Route path='/updateteach' element={<PrivateRoute><UpdateTeach/></PrivateRoute>}/>
            <Route path='/attendance' element={<PrivateRoute><Attendance /></PrivateRoute>} />
            <Route path='/studentdetails/:id' element={<PrivateRoute><Studentdetails /></PrivateRoute>} />

            <Route path='profile' element={<Profiles />} />
            <Route path='/editenformation' element={<PrivateRoute><EditEnformation /></PrivateRoute>} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
