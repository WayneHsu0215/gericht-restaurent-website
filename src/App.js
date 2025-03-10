import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 引入 Router、Routes 和 Route
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import MenuPage from './container/MenuPage/MenuPage';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        {/* 主頁路由 */}
        <Route
          path="/"
          element={
            <>
              <Header />
                <AboutUs/>
              <SpecialMenu />
              <Intro />
              <Gallery />
              <FindUs />
              <Footer />
            </>
          }
        />

        {/* 菜單頁面路由 */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
