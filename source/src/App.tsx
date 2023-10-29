import { BrowserRouter as Router } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import FakeNewsPage from "./pages/FakeNewsPage";
import LandingPage from "./pages/LandingPage";
import SidebarLayout from "./pages/SidebarLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/fake-news-detection" element={<FakeNewsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
