import React, { useState, useEffect } from 'react';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.userId;
}

export default function User() {

  const user = useLoaderData();
  
  const [greeting, setGreeting] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('useEffect',user)
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
                {error.statusText || error.message}
            </p>
          </div>

        ) : (
          <h1 className="title">
            {greeting.content} to {user}
          </h1>
        )}
      </main>
    </div>
  )
}
