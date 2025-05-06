import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/students/Home';
import CourseList from './page/students/CourseList';
import CourseDetail from './page/students/CourseDetail';
import MyEnrollment from './page/students/MyEnrollment';
import Player from './page/students/Player';
import Loading from './components/students/Loading';
import Educator from './page/teacher/Educator';
import Dashboard from './page/teacher/Dashboard';
import AddCourse from './page/teacher/AddCourse';
import MyCourses from './page/teacher/myCourses';
import StudentEnrolled from './page/teacher/studentEnrolled';
import Navbar from './components/students/navbar';

const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/my-enrollments' element={<MyEnrollment/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/teacher' element={<Educator/>}>
           <Route path='teacher' element={<Dashboard/>}/>
           <Route path='add-course' element={<AddCourse/>}/>
           <Route path='my-courses' element={<MyCourses/>}/>
           <Route path='student-enrolled' element={<StudentEnrolled/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
