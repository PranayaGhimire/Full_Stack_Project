import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import { useEffect, useState } from "react";
function App() {
  const[data,setData]=useState();
  // const getData = async ()=>{
  //       const url="http://localhost:3000/api";
  //       const response= await fetch(url)
  //       const data= await response.json();
  //       console.log(data);
  // }
  // useEffect(()=>{
  //     getData();
  // },[]);
  
  useEffect(() => {
    fetch("http://localhost:3000/api", {
      method: "GET",
      credentials: "include", // All cookies
    })
      .then((res) => res.json())
      .then((data) => setData(data.username))
      .catch((err) => console.log("Fetch error:", err));
  }, []);
  


  return (

      <Router>
      <Navbar msg={data} />
      <DarkModeToggle></DarkModeToggle>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404 pages */}
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;
