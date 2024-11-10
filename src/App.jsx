import reactLogo from './assets/react.svg'
import reduxLogo from './assets/redux.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeByValue, decrease, increment } from './store/slices/counter'

function App() {
  const { counter } = useSelector( state => state.counter ) 
  const dispatch = useDispatch() 

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={reduxLogo} className="logo react" alt="React logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter {counter}</h1>
      <div className="card"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px'
        }}
      >

        <button
          onClick={() => dispatch(decrease())}
        >
          Decrease -1
        </button>

        <button onClick={() => dispatch(increment())}>
          Increase +1
        </button>

        <button
          onClick={() => dispatch(changeByValue(10))}
        >
          Increase + 10
        </button>



      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
