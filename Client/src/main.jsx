import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './slices/store.js'
import App from "./App.jsx";
import { Toaster } from 'react-hot-toast';
import { Login, AuthLayout, Home, Signup, Fitnesscategory, FitnessGoalDetails } from "./pages/index.js";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AuthLayout authentication ><App /></AuthLayout>}>
        <Route path='/' element={<Home />} />
        <Route path='/fitness-category' element={<Fitnesscategory />} />
        <Route path="/fitness-goal/:category" element={<FitnessGoalDetails />} /> {/* Dynamic route */}
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>,
)
