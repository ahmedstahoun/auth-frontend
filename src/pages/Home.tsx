import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service'; 

export default function AppHome() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('acesssToken');
    const sessionId = localStorage.getItem('sessionId');

    try {
      if (token && sessionId) {
        await logout();
      }
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      localStorage.removeItem('acesssToken');
      localStorage.removeItem('sessionId');
      navigate('/signin');
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="card p-5 shadow-sm">
        <h1 className="mb-4">Welcome to the App 👋</h1>
        <p className="lead">You're successfully logged in.</p>
        <button onClick={handleLogout} className="btn btn-danger mt-4">
          Logout
        </button>
      </div>
    </div>
  );
}
