import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/course-details/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
