
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CategoriesBar from './components/CategoriesBar';
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetail from './components/VideoDetails';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  const handleHamburgerClick = () => setSidebarOpen(true);
  const handleSidebarClose = () => setSidebarOpen(false);
  const handleCategorySelect = (cat) => setSelectedCategory(cat);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <NavBar onHamburgerClick={handleHamburgerClick} />

        <div className="flex flex-1">
          {/* Sidebar (mobile & desktop toggle) */}
          <Sidebar
            isOpen={sidebarOpen}
            onClose={handleSidebarClose}
            onSelectCategory={handleCategorySelect}
          />

          <div className="flex-1">
            {/* Categories bar only on md+ screens */}
            <div className="hidden md:block">
              <CategoriesBar
                onSelect={handleCategorySelect}
                selectedCategory={selectedCategory}
              />
            </div>

            {/* Routing */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <main className="p-4">
                      <h1 className="text-xl font-semibold">
                        Showing videos for: {selectedCategory}
                      </h1>
                      <Feed category={selectedCategory} />
                    </main>
                  </>
                }
              />
              <Route path="/search/:searchTerm" element={<SearchResults />} />
              <Route path='/video/:id' element={<VideoDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;


