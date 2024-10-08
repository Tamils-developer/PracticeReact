import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LoginComp from './LoginComp';
import HomeComp from './HomeComp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchComp from './FetchComp';
import Details from './Details';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/fetch" element={<FetchComp />} />
  //     <Route path="/" element={<LoginComp />} />
  //     <Route path="/details/:id" element={<Details />} />

  //     {/* <Route path="/" element={<App />} /> */}
  //   </Routes>
  //   {/* <Routes>

  //   <Route path="/" element={<App />} /> 
  //   </Routes> */}
  // </BrowserRouter>
);


