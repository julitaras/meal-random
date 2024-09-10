import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MealRandomPage = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getRandomMeal = async () => {
    try {
      let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      if (searchTerm) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      }
      const response = await axios.get(url);
      if (response.data.meals) {
        setRandomMeal(response.data.meals[0]);
        setError('');
      } else {
        setRandomMeal(null);
        setError('No recipe were found.');
      }
    } catch (error) {
      console.error('Error fetching meal data:', error);
      setError('An error occurred while searching for the recipe.');
    }
  };

  useEffect(() => {
    getRandomMeal();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextMeal = () => {
    if (!searchTerm) {
      getRandomMeal();
    } else {
      setSearchTerm('');
    }
  };

  const handleLearnMore = () => {
    if (randomMeal && randomMeal.idMeal) {
      navigate(`${randomMeal.idMeal}`, { replace: true });
    }
  };

  return (
    <div className="container">
      <h1>Don't know what to eat?</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Seach recipes..."
          className="form-control"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {randomMeal && (
        <div className="meal-info">
          <h2>{randomMeal.strMeal}</h2>
          <div className="meal-details">
            <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className="meal-image" />
            <p className="meal-details__text">{randomMeal.strInstructions}</p>
          </div>
        </div>
      )}
      {!error && (
        <>
          <button onClick={handleLearnMore} className="btn btn-dark">Learn more about this recipe</button>
          <button onClick={handleNextMeal} className="btn btn-dark">Next recipe</button>
        </>
      )}
    </div>
  );
}

export default MealRandomPage;
