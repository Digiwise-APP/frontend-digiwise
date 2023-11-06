import { BrowserRouter as Router } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

// page
import QuizPage from "./pages/QuizPage";
import FakeNewsPage from "./pages/FakeNewsPage";
import LandingPage from "./pages/LandingPage";
import SidebarLayout from "./pages/SidebarLayout";
import AuthPage from "./pages/AuthPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";

// component
import Logout from "./components/Logout";
import RequireAuth from "./components/Auth/RequireAuth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/article" element={<ArticlePage />} />
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
