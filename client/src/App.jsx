import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Auth/login'
import Register from './pages/Auth/register'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Book from './pages/book/book'
import CreateBook from './pages/book/createBook'
import EditBook from './pages/book/updateBook'
import SingleBook from './pages/book/singleBook'
import {Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/userContext'
function App() {

  return (
    <>
     <Router>
       <Header />
        <Toaster position='top-center' toastOptions={{duration: 2000}}/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/register' element= { <Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/books' element={ <Book /> } />
          <Route path='/books/create' element={ <CreateBook /> } />
          <Route path='/books/editBook/:slug' element={ <EditBook /> } />
          <Route path='/books/:slug' element={ <SingleBook /> } />
        </Routes>
        <Footer />
     </Router>
  
    
    </>
  )
}

export default App
