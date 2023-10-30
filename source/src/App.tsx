import { BrowserRouter as Router } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import FakeNewsPage from "./pages/FakeNewsPage";
import LandingPage from "./pages/LandingPage";
import SidebarLayout from "./pages/SidebarLayout";
import AuthPage from "./pages/AuthPage";
import RequireAuth from "./components/Auth/RequireAuth";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<LandingPage />} />

            <Route element={<RequireAuth />}>
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/fake-news-detection" element={<FakeNewsPage />} />
            </Route>

            <Route path="/auth">
              <Route index element={<AuthPage />} />
              <Route path=":process" element={<AuthPage />} />
            </Route>
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
