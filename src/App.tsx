import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'

function App() {

  return (
    <>
      <Header />
      <div className='main-content'>
        {
          <Outlet />
        }
      </div>
    </>
  )
}

export default App
