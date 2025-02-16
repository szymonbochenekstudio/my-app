import { useState } from 'react';
import './App.css';

function App() {
  // Stan dla licznika
  const [count, setCount] = useState(0);

  // Funkcja obsługująca kliknięcie przycisku
  const handleClick = () => {
    setCount(count + 1);
  };

  // Funkcja do resetowania licznika
  const resetCount = () => {
    setCount(0);
  };

  // Funkcja zmieniająca tło
  const [bgColor, setBgColor] = useState('white');
  const changeBackgroundColor = () => {
    setBgColor(bgColor === 'white' ? 'lightblue' : 'white');
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <h1>Prosty licznik w React</h1>
        <p>Liczba kliknięć: {count}</p>
        <button onClick={handleClick}>Kliknij mnie!</button>
        <button onClick={resetCount}>Resetuj licznik</button>
        <button onClick={changeBackgroundColor}>Zmień tło</button>
      </header>
    </div>
  );
}

export default App;
