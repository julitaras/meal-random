import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        setError('No se encontró lo que buscabas.');
      }
    } catch (error) {
      console.error('Error fetching meal data:', error);
      setError('Ocurrió un error al buscar la receta.');
    }
  };

  useEffect(() => {
    getRandomMeal();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNextMeal = () => {
    // Obtener una nueva receta aleatoria si no hay término de búsqueda
    if (!searchTerm) {
      getRandomMeal();
    } else {
      // Si hay un término de búsqueda, simplemente limpiamos el término de búsqueda
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
      <h1>No sabes qué comer?</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar recetas..."
          className="form-control"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {randomMeal && (
        <div className="meal-info">
          <h2>{randomMeal.strMeal}</h2>
          <div className="meal-details">
            <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className="meal-image" />
            <p>{randomMeal.strInstructions}</p>
          </div>
          <button onClick={handleLearnMore} className="btn btn-primary">Saber más sobre esta receta</button>
        </div>
      )}
      {!error && (
        <button onClick={handleNextMeal} className="btn btn-primary">Siguiente Receta</button>
      )}
    </div>
  );
}

export default MealRandomPage;
