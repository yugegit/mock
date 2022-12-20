import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import EditStudents from './components/EditStudents';
import FormikComponent from './FormikComponent';
export const url = 'https://622450793af069a0f9b3146e.mockapi.io/student'

function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

  return <>
    <Router>
      <div style={{display:"grid", gridTemplateColumns:"17% 85%"}}>
        <div>
          <SideBar/>
        </div>
        <div>
            <Routes>
                <Route path = '/dashboard' element={<Dashboard data={data}/>}/>
                <Route path = '/all-students' element = {<AllStudents/>}/>
                <Route path = '/add-student' element = {<AddStudent/>}/>
                <Route path = '/edit-student/:id' element = {<EditStudents/>}/>
                <Route path = '/formik' element = {<FormikComponent/>}/>

                <Route path = '*' element={<Dashboard data={data}/>}/>
            </Routes>
        </div>
      </div>
    </Router>
  </>
}

export default App;