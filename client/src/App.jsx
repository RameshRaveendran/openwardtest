import {
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ComplaintPage from "./pages/ComplaintPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default App;