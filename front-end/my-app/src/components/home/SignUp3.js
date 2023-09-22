import React, { useState } from 'react'
import './signup.css'



function SignUp3() {
  const [number, setNumber] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Make a POST request to your backend API
      const response = await fetch('/api/otpEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponse(data.message); // Assuming the backend sends a message in the response
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Number Input Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Number'}
        </button>
      </form>
      {response && (
        <div>
          <h3>Response from Backend:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default SignUp3;
