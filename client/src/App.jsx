import "./App.css"
import { useEffect } from "react";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import {useDispatch} from "react-redux"
import {setUser} from "./redux/features/authSlice"
import AddEditTour from "./pages/AddEditTour";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import SingleTour from "./pages/SingleTour";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(()=> {
    dispatch(setUser(user));
  }, [])
  return (
   

    <>
    <BrowserRouter>
      <div className="App">
      <Header />
        <ToastContainer />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addTour"
            element={
              
                <AddEditTour />
             
            }
          />
          <Route
            path="/editTour/:id"
            element={
              <PrivateRoute>
                <AddEditTour />
              </PrivateRoute>
            }
          />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
          <Route path="/tour/:id" element={<SingleTour />} />


        </Routes>
      </div>
    </BrowserRouter>    
        
    </>
  )
}

export default App
