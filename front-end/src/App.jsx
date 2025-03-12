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
  const [loading,setLoading]=useState(true);
   const getData = async ()=>{
         const url="http://localhost:3000/api"; 
         try{
          const response= await fetch(url,{
            method:"GET",
            credentials:"include",  // All cookies
           })
           if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
           }
           const data= await response.json();
           console.log(data.username);
           setData(data.username);
           setLoading(false);
         }
        catch (err){
          console.log("Fetch error:",err);
                 window.location.href="http://localhost:3000/login";
                 // Redirect to Express Login
        }
   };
   useEffect(()=>{
       getData();
   },[]);
  
 
  
    //Prevent rendering until data is fetched
    if(loading){
      return null; // Do not render anything while redirecting
    }

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
