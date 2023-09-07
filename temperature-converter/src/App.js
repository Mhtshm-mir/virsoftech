import React, { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
    setResult('');
    setError('');
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
    setResult('');
    setError('');
  };

  const convertToCelsius = () => {
    if (isNaN(temperature)) {
      setError('Please enter a valid number');
      setResult('');
      return;
    }

    const convertedTemperature = scale === 'celsius' ? parseFloat(temperature) : ((parseFloat(temperature) - 32) * 5) / 9;
    setResult(`${temperature}°${scale.toUpperCase()} is equal to ${convertedTemperature.toFixed(2)}°C`);
    setError('');
  };

  const convertToFahrenheit = () => {
    if (isNaN(temperature)) {
      setError('Please enter a valid number');
      setResult('');
      return;
    }

    const convertedTemperature = scale === 'fahrenheit' ? parseFloat(temperature) : (parseFloat(temperature) * 9) / 5 + 32;
    setResult(`${temperature}°${scale.toUpperCase()} is equal to ${convertedTemperature.toFixed(2)}°F`);
    setError('');
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <div>
        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={handleTemperatureChange}
        />
        <select value={scale} onChange={handleScaleChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <div className='btn'>
        <button onClick={convertToCelsius}>Convert to Celsius</button>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      </div>
      {error && <p className="error">{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
