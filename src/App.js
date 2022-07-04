
import { Route, Routes } from "react-router-dom";
import About from "./page/aboutme/About";
import Blogs from "./page/Blogs/Blogs";
import Home from "./page/home/Home";
import Project from "./page/Projects/Project";
import Footer from "./page/shared/Footer";
import Navbar from "./page/shared/Navbar";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blogs/>}></Route>
        <Route path="/project/:id" element={<Project/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
