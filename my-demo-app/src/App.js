import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import UserHome from './Pages/User/UHome';
import USignin from './Pages/Home/USignIn';
import SProfile from './Pages/User/Profile';
import TSignin from './Pages/Home/TSignin';
import THome from './Pages/Teacher/THome';
import ClassCard from './Pages/Teacher/ClassesCard/ClassesCard';
import UResourceList from './Pages/Teacher/ResourceList';
import PDF from './Pages/Teacher/ViewPdf';
import AddResource from './Pages/Teacher/AddResource';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<USignin/>}/>
          <Route path='/User-UserSignin' element ={<USignin/>}/>
          <Route path='/UHome' element = {<UserHome/>}/>
          <Route path="/SProfile" element={<SProfile />} />


          <Route path="/TeacherHome" element={<THome/>} />
          <Route path='/Teacher-Signin' element={<TSignin/>}/>

          <Route path='/Cards' element ={<ClassCard/>}/>
          <Route path='/Resource-List' element={<UResourceList/>}/>          
          <Route path="/pdfPage" element={<PDF />} />
          <Route path="TAddResource" element={<AddResource/>}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
