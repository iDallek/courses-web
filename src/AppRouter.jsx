import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCourse from './pages/AddCourse/AddCourse';
import EditCourse from './pages/EditCourse/EditCourse';

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddCourse />} />
        <Route path="/course/:id" element={<EditCourse />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
