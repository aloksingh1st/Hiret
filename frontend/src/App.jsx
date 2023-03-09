import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import JobPage from "./Pages/JobPage";
import CollegePage from "./Pages/CollegPage";
import Contact from "./Pages/contact";
import PrivateRoute from "../src/components/PrivateRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/jobseeker" element={<JobPage />} />
          <Route path="/college" element={<CollegePage />} />
          {/* <Route path="/profile" element={<Contact /> } /> */}

          {/* <Route></Route> */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
