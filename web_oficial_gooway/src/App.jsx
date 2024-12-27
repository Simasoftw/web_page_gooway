import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const items = [
  //   { id: 1, image: "/assets/naturaleza.jpg", title: "Naturaleza" },
  //   { id: 2, image: "/assets/naturaleza.jpg", title: "Náutico" },
  //   { id: 3, image: "/assets/naturaleza.jpg", title: "Romance" },
  //   { id: 4, image: "/assets/naturaleza.jpg", title: "Sol y Playa" },
  // ];
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      {/* <Carousel items={items} /> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
import Carousel from './components/carousel/Carousel'

export default App
