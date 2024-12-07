
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider';


function App() {


  return (
  


<>
<AuthProvider>
      <Router>
        <Routes>
          <Navbar/>
          <Route path="/login" element={<Login />} />
          <Route path="/lessons" element={<LetsLearn />} />
          {/* Protect the Lesson Route */}
          <Route element={<PrivateRoute />}>
            <Route path="/lesson/:lesson_no" element={<Lesson />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer/>
      </AuthProvider>
    
</>

      
    
    
  )
}

export default App



{/* <Navbar />
        <ToastContainer position="top-right" autoClose={3000} /> */}
        // Add your routes here

