
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Diesel from './Pages/Product/Diesel'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<WebLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/diesel' element={<Diesel/>}/>
        </Route>

      </>



    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
