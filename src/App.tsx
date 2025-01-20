import BlogsPage from "./components/BlogsPage";
import Home from "./components/Home";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import NewBlog from "./components/CreateNewBlog";

import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Browser>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListGroup" element={<ListGroup />} />
          <Route path="/BlogsPage" element={<BlogsPage />} />
          <Route path="/CreateNewBlog" element={<NewBlog />} />
        </Routes>
      </div>
    </Browser>
  );
}

export default App;

/* import React, { useState } from 'react';
import Home from './Home'; // Import Home component
import About from './About'; // Import About component
import Contact from './Contact'; // Import Contact component

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App; */
