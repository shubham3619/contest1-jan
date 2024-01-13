import React, { useState } from 'react';
import './App.css'; // Make sure to create a corresponding CSS file for styling

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const validateInputs = () => {
    if (!num1.trim() || !num2.trim() || isNaN(num1) ||isNaN(num2)) {
        if(!num1) {
            setError("Num1 cannot be empty");
        }
        else if(!num2) {
            setError("Num2 cannot be empty");
        }
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (validateInputs()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operation) {
        case 'add':
          setResult(number1 + number2);
          break;
        case 'subtract':
          setResult(number1 - number2);
          break;
        case 'multiply':
          setResult(number1 * number2);
          break;
        case 'divide':
          setResult(number1 / number2);
          break;
        default:
          break;
      }
    }
  };

  return (
    
    <div className="container">
      <h1>React Calculator</h1>
    
      <div className="calculator">
        <input
          type="text"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => handleInputChange(e, setNum1)}
        />
        <input
          type="text"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => handleInputChange(e, setNum2)}
        />
      
      <div className="btn-div">
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      {error && <div className="error">
        <h2>Error!</h2>
        {error}
        </div>}
      {result !== null && (
        <div className="success">
            <h2>Success!</h2>
          Result: {result} 
        </div>
      )}
      </div>
    </div>
  );
};

export default App;

