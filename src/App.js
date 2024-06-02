import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import About from './pages/About';
import Math from './pages/Math';
import Algorithms from './pages/Algorithms';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Navbar from './Navbar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>  
      <Navbar />        
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/math" element={<Math />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

// if you want to put the navbar on every page, its as simple as putting <Navbar />  under the base router tag
//remember this app component is your entire application (react is a single page app that just dynamically changes based off of route). 
//so you are rendering the page with the navbar every time then adding components depending on the route you're on

//if you want to CHOOSE which pages use the navbar, you can add this function. Outlet means the element based off of the route
// function Layout() {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />  {/* This renders the content of the active route */}
//     </div>
//   );
// }

//Wrap the routes you want to have the navbar with this 
// <Route element={<Layout />}>  
// </Route>
//