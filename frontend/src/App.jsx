import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Feedback from "./components/Feedbacks";
import Contact from "./components/Contact";
import { Banner } from "./components/Banner";
import Hero from "./components/Hero";
import style from './App.module.css';
import { Post } from "./components/Post"; 
import { AddPost } from "./components/AddPost";
import SplashCursor from "./SplashCursor/SplashCursor";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={style.container}>
      <SplashCursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Banner />
              <Experience />
              <Tech />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/Post"
          element={
            <>
              <Navbar />
              <Post />
              <Footer />
            </>
          }
        />

        <Route
          path="/AddPost"
          element={
            <>
              <Navbar />
              <AddPost />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Experience />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/feedback"
          element={
            <>
              <Navbar />
              <Feedback />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
