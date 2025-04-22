import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AppHome from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<AppHome />} />
    </Routes>
  );
}

export default App;
