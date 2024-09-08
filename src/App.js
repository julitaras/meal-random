import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MealRandomPage from './components/MealRandomPage';
import RecipeDetailsPage from './components/MealRandomPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MealRandomPage} />
        <Route path="/recipe-details" component={RecipeDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
