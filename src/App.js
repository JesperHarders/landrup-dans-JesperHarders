import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivitiesPage from "./pages/ActivitiesPage";
import WelcomePage from "./pages/WelcomePage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/aktiviter" element={<ActivitiesPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
