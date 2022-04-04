import React from 'react';
import './App.css';
import HomePage from './routes/homepage/homepage.component';
import Navigation from './routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/sign-in/SignIn.component';

const ShopPage = () => {
  return ( 
    <div>
      shopPage
    </div> );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<HomePage/>}/>
          <Route path='shop' element={<ShopPage/>}/>
          <Route path='sign-in' element={<SignIn/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
