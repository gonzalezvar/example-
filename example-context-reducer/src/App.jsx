import {   useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from './components/Title'
import Card from './components/Card'
import { useAppContext } from './store/AppContext'

function App() {

  const { store, dispatch } = useAppContext()

  const onAddValue = () => {
    dispatch({ type: "addListValue", task: store.inputValue })
  }


  return (
    <>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {store.count}</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: "increment" })}>Aumentar</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Disminuir</button>
      </div>

      {/* entrada contralada */}
      <input
        type="text"
        value={store.inputValue}
        onChange={(e) => dispatch({ type: "changeInput", value: e.target.value })}
      />
      <button onClick={onAddValue}>Añadir</button>
      <ul>
        {
          store.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>

      <Title />

      {store.listCharacters.length > 0 ?

        store.listCharacters.map(item => (
          <Card key={item.id} name={item.name} />
        ))


        : <p>no hay personajes</p>
      }
    </>
  )
}

export default App
