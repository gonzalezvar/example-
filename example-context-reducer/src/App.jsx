import { createContext, useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initialState, appReducer } from './reducer/appReducer'
import {MyContext} from './store/Context'

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState)

  const onAddValue = () => {
    dispatch({type:"addListValue",task:store.inputValue})
  }

  const dataStore = useContext(MyContext)


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
        onChange={(e)=>dispatch({type:"changeInput",value:e.target.value})}
      />
      <button onClick={onAddValue}>Añadir</button>
      <ul>
        {
          store.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
