import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MealRandomPage from './components/MealRandomPage';
import RecipeDetailsPage from './components/ReceipeDetailPage';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MealRandomPage/>} />
      <Route path=":id" element={<RecipeDetailsPage/>} />
      <Route element={<NoMatch />} />
    </Routes>
  );
}

export default App;
