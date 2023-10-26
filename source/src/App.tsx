import { BrowserRouter as Router } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import SidebarProfile from "./components/Sidebar/SidebarProfile";
import FakeNewsPage from "./pages/FakeNewsPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <SidebarMenu />
      <SidebarProfile />
      <Router>
        <Routes>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/fake-news-detection" element={<FakeNewsPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
