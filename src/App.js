import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TokenProvider from "./context/TokenContext";
import ActivitiesPage from "./pages/ActivitiesPage";
import CalenderDetails from "./pages/CalenderDetails";
import CalenderPage from "./pages/CalenderPage";
import Detailpage from "./pages/Detailpage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import WelcomePage from "./pages/WelcomePage";


function App() {

  const [loggedInState, setLoggedInState] = useState(false)

  return (
    <div>
      <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/aktiviter" element={<ActivitiesPage/>}/>
          <Route path="/activity/:id" element={<Detailpage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/login" element={<LoginPage setLoggedInState={setLoggedInState}/>}/>
          <Route path="/calender" element={loggedInState ? <CalenderPage/> : <Navigate to='/login'/>}/>
          <Route path="/calenderDetails/:id" element={loggedInState ? <CalenderDetails/> : <Navigate to='/login'/>}/>
        </Routes>
      </TokenProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
