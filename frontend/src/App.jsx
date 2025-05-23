import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedback from "./components/Feedbacks";
import Contact from "./components/Contact";
import { Banner } from "./components/Banner";
import style from './App.module.css';
import { Post } from "./components/Post"; 
import { AddPost } from "./components/AddPost";
import Comment from "../connect/Comment";
import SplashCursor from "./SplashCursor/SplashCursor";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className={style.container}>
      <SplashCursor></SplashCursor>
        <Routes>
          
          {/* Home */}
          <Route path="/" element={
            <>
              <Navbar />
              <Banner />
              <Tech />
              <Contact />
              <Footer></Footer>
            </>
          } />

          <Route path="/Post" element={
            <>
              <Navbar />
              <Post />
              <Footer></Footer>
            </>
          } />
          <Route path="/Post" element={
            <>
              <Navbar />
              <Post />
            </>
          } />
           <Route path="/AddPost" element={
            <>
              <Navbar />
              <AddPost></AddPost>
              <Footer></Footer>
            </>
          } />
          {/* Projects */}
          <Route path="/projects" element={
            <>
              <Navbar />
              <Experience />
              <Footer></Footer>
            </>
          } />
          

          {/* About */}
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer></Footer>
            </>
          } />

          {/* Feedback - opened alone */}
          <Route path="/feedback" element={
            <><Navbar /><Feedback /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
