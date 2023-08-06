import './App.css';
import LoginPage from './components/pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderPage from './components/pages/OrderPage';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />}/>
          <Route path="/OrderPage" element={ <OrderPage />}/>
          <Route path="/*" element={ <ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
