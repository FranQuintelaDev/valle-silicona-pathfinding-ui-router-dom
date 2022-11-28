import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Grid.css';
import classNames from "classnames";

export function Grid() {

  const [grid, setGrid] = useState();
  const [pressed, setPressed] = useState(false);
  const [error, setError] = useState(false);

  // const initialGrid = [["c", "b", "o"], ["", "o", ""], ["b", "o", ""], ["", "o", ""], ["b", "b", "o"], ["b", "b", "o"], ["b", "b", "o"]];

  useEffect(() => {

    fetch("http://localhost:8080/array")
      .then(res => res.json())
      .then(
        (data) => {
          setGrid(data);
          setPressed(false);
        }
      );

  }, [])

  const playHandler = () => {

    setPressed(true);
    setError(false)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grid)
    };

    fetch("http://localhost:8080/execute", requestOptions)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data.error)
          setTimeout(() => {
            if (data.error) {
              setGrid(undefined)
              setError(true)
            } else {
              setGrid(data);
            }
            setPressed(false);
          }, 400);
        }
      )
  }

  const refreshHandler = () => {

    setPressed(true);
    setError(false)

    fetch("http://localhost:8080/array")
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data.error)
          setPressed(false);

          if (data.error) {
            setGrid(undefined)
            setError(true)
            return;
          }

          setTimeout(() => {
            setGrid(data);
          }, 400);
        }
      )
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="grid vh80" >
        {grid ?
          <>
            {grid.map(row =>
              <>
                <Row>
                  {row.map(col =>
                    <>
                      <Col>
                        {/* <input type="checkbox" /> */}

                        <div className={classNames({
                          item: true,
                          fadeIn: col.includes('c') && !pressed,
                          fadeOut: col.includes('c') && pressed,
                          obstaculo: col.includes('o'),
                          coche: col.includes('c'),
                          barranco: col.includes('b'),
                          final: col === 'f',
                          success: col.includes('fc'),
                        })}>
                          {/* {col.includes('fc') ? <><Alert key='success' variant='success' >Success!</Alert></>:<></>} */}
                          {/* {col.includes('c') ? <><Alert key='danger' variant='danger' onClose={() => setShow(false)} dismissible>Oops, there was an obstacle there, you lost 1 life!</Alert></>:<></>} */}

                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              </>
            )}

          </> : <> </>}

      </div>
      <div className="grid actions">
        <Row>
          {error ?
            <>
              <Col>
                <div className={classNames({
                  item: true,
                  refresh: true,
                  pressed: pressed
                })} onClick={refreshHandler}>

                </div>
              </Col>
            </> : <>
              <Col>
                <div className={classNames({
                  item: true,
                  play: true,
                  pressed: pressed
                })} onClick={playHandler}>

                </div>
              </Col>
            </>}
        </Row>
      </div>


    </>
  );
}

