import { BrowserRouter, Route, Routes } from "react-router-dom";
import TokenProvider from "./context/TokenContext";
import ActivitiesPage from "./pages/ActivitiesPage";
import Detailpage from "./pages/Detailpage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import WelcomePage from "./pages/WelcomePage";


function App() {
  return (
    <div>
      <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/aktiviter" element={<ActivitiesPage/>}/>
          <Route path="/activity/:id" element={<Detailpage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </TokenProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
