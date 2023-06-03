import React from 'react';
import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';

function App() {
  return (
    <div>
      <h1>AI Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
}

export default App;