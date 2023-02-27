import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import JobsPage from './Pages/JobsPage';
import JobDetailsPage from './Pages/JobDetailsPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:jobId" element={<JobDetailsPage />} />
          <Route path="/jobs/:filter" element={<JobsPage />} />
          <Route path="*" element={<Navigate to={<HomePage />}/>} />
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
