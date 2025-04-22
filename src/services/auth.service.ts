import axios from 'axios';

const API_URL = 'http://localhost:3001/auth';

// Save token and session info in localStorage after successful sign-in
export const signUp = (data: any) => axios.post(`${API_URL}/signup`, data);

export const signIn = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, data);
    const { accessToken, refreshToken, sessionId } = response.data.data; // Adjust based on your API response structure
    // Save tokens and session info to localStorage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('sessionId', sessionId);
    
    return response;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error; 
  }
};

export const logout = () => {
  const token = localStorage.getItem('accessToken');
  const sessionId = localStorage.getItem('sessionId');

  if (!token || !sessionId) {
    console.log('No active session found');
    return;
  }
  return axios.post(
    `${API_URL}/logout`,
    { sessionId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  .then(response => {
    // On successful logout, clear storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('sessionId');
  })
  .catch(error => {
    console.error('Logout error:', error);
    throw error; // Rethrow for further handling
  });
};


