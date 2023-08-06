import './App.css';
import OrderPage from './components/pages/Order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';
import LoginPage from './components/pages/login/LoginPage';
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/order/:userName" element={ <OrderPage />}/>
        <Route path="*" element={ <ErrorPage />} />
      </Routes>
    </div>
    
  );
}

export default App;
