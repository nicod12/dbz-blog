import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { HomePage, CharactersPage, CharacterInf } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <NavBar /> }>
          <Route index element={ <HomePage />} />
          <Route path='/characters' element={ <CharactersPage /> } />
          <Route path='/characters/:characterId' element={ <CharacterInf /> } />
        </Route>
        <Route path='*' element={ <Navigate to={'/'} /> } />
      </Routes>

      
    </>
    
  )
}

export default App;
