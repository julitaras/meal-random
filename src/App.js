import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MealRandomPage from './components/MealRandomPage';
import RecipeDetailsPage from './components/ReceipeDetailPage';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MealRandomPage />} />
      <Route path=":id" element={<RecipeDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
