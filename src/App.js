import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivitiesPage from "./pages/ActivitiesPage";
import Detailpage from "./pages/Detailpage";
import WelcomePage from "./pages/WelcomePage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/aktiviter" element={<ActivitiesPage/>}/>
          <Route path="/activity/:id" element={<Detailpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
