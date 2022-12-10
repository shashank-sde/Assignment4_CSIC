import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import BlogBody from './components/BlogBody/BlogBody.js';
import Footer from './components/Footer/Footer.js';
import BlogPage from './components/BlogPage/BlogPage.js';
import BlogPage3 from './components/BlogPage/BlogPage3.js';
import BlogPage2 from './components/BlogPage/BlogPage2.js';
import Apirefresh from './components/Apirefresh/Apirefresh.js';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<BlogBody/>} />
      <Route path="/post1" element={<BlogPage/>} /> 
      <Route path="/post2" element={<BlogPage2/>} />
      <Route path="/post3" element={<BlogPage3/>} />
      <Route path="/apirefresh" element={<Apirefresh/>}/>
    </Routes>    
    <Footer/>  
    
    </>
  );
}

export default App;
