import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Loginpage from './Components/Loginpage';
// import Signuppage from './Components/Signuppage'
// import Mobileverifivation from './Components/Mobileverifivation'
// import Otpverification from './Components/Otpverification'
// import Otpnotverified from './Components/Otpnotverified'
// import Navbar from './Components/Navbar' 
// import Searchpage from './Components/Searchpage';
import RealCard from './Components/RealCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar/> */}
    {/* <Searchpage/> */}
    {/* <Loginpw */}
   {/* {<Signuppage/> */}
   {/* /* <Mobileverifivation/>
    <Otpverification/>
    <Otpnotverified/> */} 
    <RealCard/>
   
  </React.StrictMode>
);
reportWebVitals();
