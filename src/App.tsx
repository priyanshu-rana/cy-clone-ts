import StudentPage from "./Pages/StudentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import LecturePage from "./Pages/LecturePage";
import NotfoundPage from "./Pages/NotfoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="students" element={<StudentPage />} />
          <Route path="lecture" element={<LecturePage />} />
        </Route>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
