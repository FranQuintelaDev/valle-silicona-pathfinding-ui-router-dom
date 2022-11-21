import './App.css';
import React, { useState, useEffect } from 'react';


export default function App() {

  const [greeting, setGreeting] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/greeting")
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setGreeting(data);
        },

      ).catch(error => {
        setError(error);
        console.log(error);
      })
  }, [])

  return (
    <div className="container">
      <main>
        {error ? (
          <div>
            <h1 className="title">
              error
            </h1>
            <p className="description">
              {error.message}
            </p>
          </div>

        ) : (
          <h1 className="title">
            {greeting.content}
          </h1>
        )}
      </main>
    </div>
  )
}
