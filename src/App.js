import logo from './logo.svg';
import './App.css';
import Chatbox from './components/chatbox';
import './pages/login';
import './pages/dashboard';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Asegúrate de importar Router

function App() {
  return (
    <Router>  {/* Envuelve las rutas dentro de un Router */}
      <div className="App">
        <Routes>
          {/* Ruta por defecto que redirige al dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {/* Ruta para el Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Chatbox /> {/* Chatbox debería estar fuera de las rutas si lo quieres mostrar siempre */}
      </div>
    </Router>
  );
}

export default App;
