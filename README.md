# Spring + React

Spring + React application that computes and renders the best posible path for a grid like board.

## V-DES-0.1
### What's new?
- Added routing functionality with URLs based on IDs.
- Use of Styles with css files
- Error and loading handling with fetch requests.

## Routing 
First of all we need to install react-router-dom to access its routing funcionalities.
- Install react-router-dom
    - Console: npm install react-router-dom --save

## HelloWorld app with React

We are going to use React Router for the routing handling of our React application.

- Create new [React Router](https://v5.reactrouter.com/web/guides/quick-start) app
    - Inside a console run: npx create-react-app valle-silicona-pathfinding-ui-router-dom

- Run the development server
    - cd valle-silicona-pathfinding-ui-router-dom
    - npm start

- Edit App.js with the REST api message

```javascript
import React, { useState, useEffect } from 'react';

export default function App() {

  const [greeting, setGreeting] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/greeting")
      .then(res => res.json())
      .then(
        (data) => {
          setGreeting(data);
        }
      )
  }, [])

  return (
    <div className="container">

      <main>
        <h1 className="title">
          {greeting.content}
        </h1>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


```