import {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Astros from './Components/Astros/Astros';
import Navbar from './Components/Navbar/Navbar';
import './App.css'

// Constante de login
const isLogged = false;
// Guardamos en local storage


const userData = {
  name: 'Ana Fer',
  age: '23',
}

// link para personas en el espacio
// link para API NASA
// Logo / link para login

//const links = ['astros', 'apod', true];

const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]


// Navbar ------------

// Main --- ruta:
// Astros --- ruta: /astros
// Apod --- ruta: /apod

function App() {

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);

  return (
    <>
      <Navbar
        links={links}
        isLogged={JSON.parse(localStorage.login)}
    />

    <Routes>
      <Route
        path='/'
        element={<Main {...userData} />}
      />
      <Route
        path='/astros'
        element={<Astros />}
      />
      <Route
        path='/'
        element={<logo />}
        /> 
      </Routes>
    </>
  )
}

export default App
