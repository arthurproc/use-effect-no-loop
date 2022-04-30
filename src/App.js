import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [currentConditions, setCurrentConditions] = useState({});
  const [nextDays, setNextDays] = useState([]);

  const fetchAndSetConditions = useCallback(async () => {
    const response = await fetch('https://weatherdbi.herokuapp.com/data/weather/bh');
    const weatherJson = await response.json();
    setCurrentConditions(weatherJson.currentConditions);
    setNextDays(weatherJson.next_days);
    console.log('teste');
  }, []);

  useEffect(() => {
    fetchAndSetConditions();
  }, [fetchAndSetConditions]);

  return (
    <Weather
      currentConditions={ currentConditions }
      nextDays={ nextDays }
    />
  );
}

export default App;
