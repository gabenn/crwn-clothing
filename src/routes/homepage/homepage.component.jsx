import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return ( 
    <div className='homepage'>
      <Directory/>
      <Outlet/>
    </div> );
}
 
export default HomePage;