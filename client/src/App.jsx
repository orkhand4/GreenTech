import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import CardSection from './components/CardSection/CardSection';
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CardSection />
              </>
            } />
            {/* Digər səhifələr üçün Route komponentləri buraya əlavə edə bilərsiniz */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;