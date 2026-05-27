import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ComplaintPage from "./pages/ComplaintPage";
import DashboardPage from "./pages/DashboardPage";

function App() {

  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/complaints"
          element={<ComplaintPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

      </Routes>

    </div>
  );
}

export default App;