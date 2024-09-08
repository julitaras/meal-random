import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MealRandomPage from './components/MealRandomPage';
import RecipeDetailsPage from './components/MealRandomPage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MealRandomPage />} />
      <Route path="/recipe-details/:id" element={<RecipeDetailsPage />} />
    </Routes>
  );
}

export default App;
