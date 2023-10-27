import { BrowserRouter as Router } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import SidebarProfile from "./components/Sidebar/SidebarProfile";
import FakeNewsPage from "./pages/FakeNewsPage";
import LandingPage from "./pages/LandingPage";

function getCurrentPath() {
  const currentURL = new URL(window.location.href);

  return currentURL.pathname;
}

function App() {
  const currentPath = getCurrentPath();

  return (
    <>
      {currentPath !== "/login" ? <SidebarProfile /> : null}
      <SidebarMenu />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/fake-news-detection" element={<FakeNewsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
