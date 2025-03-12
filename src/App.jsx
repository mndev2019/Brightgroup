
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Diesel from './Pages/Product/Diesel'

import Abouts from './Pages/Abouts'
import Gallery from './Pages/Gallery'
import Environment from './Pages/Enviournment'
import Solution from './Pages/Solution'
import Process from './Pages/Process'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/diesel' element={<Diesel />} />
          <Route path='/about' element={<Abouts />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/enviournment' element={<Environment />} />
          <Route path='/solution' element={<Solution />} />
          <Route path='/process' element={<Process />} />




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
