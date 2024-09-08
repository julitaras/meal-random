import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const RecipeDetailsPage = ({ match }) => {
  const { id } = useParams(); // Obtén el ID de los parámetros
  const [mealDetails, setMealDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (response.data.meals && response.data.meals.length > 0) {
          setMealDetails(response.data.meals[0]);
          setError('');
        } else {
          setError('No se encontraron detalles de la receta');
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
        setError('Ocurrió un error al obtener los detalles de la receta.');
      }
    };

    fetchMealDetails();
  }, [id]);

  return (
    <div className="container">
      <h1>Detalles de la Receta</h1>
      {error && <p className="error-message">{error}</p>}
      {mealDetails && (
        <div>
          <h2>{mealDetails.strMeal}</h2>
          <div className="meal-details">
            <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} className="meal-image" />
            <p>{mealDetails.strInstructions}</p>
          </div>
        </div>
      )}
      <Link to="/" className="btn btn-primary">Volver a cualquier receta</Link>
    </div>
  );
}

export default withRouter(RecipeDetailsPage);
