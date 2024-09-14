import '@smastrom/react-rating/style.css'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
function App() {

  return (
    <>
      <Helmet>
        <title>E-Shop | Home</title>

      </Helmet>
      <Header />
      <div className='main-content'>
        {
          <Outlet />
        }
      </div>
      <Toaster />
    </>
  )
}

export default App
