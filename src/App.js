import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MealRandomPage from './components/MealRandomPage';
import RecipeDetailsPage from './components/MealRandomPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" Component={MealRandomPage} />
      <Route path="/recipes/details/:id" Component={RecipeDetailsPage} />
    </Routes>
  );
}

export default App;
