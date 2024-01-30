import axios from '../api/axios';
const serverUrl = 'http://localhost:8080';

const  = async (userData) => {
  try {
    const response = await axios.post(`${serverUrl}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return response;
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;
      throw new Error(errorData.message || 'Chyba při registraci uživatele');
    } else if (error.request) {
      console.error('Chyba při odesílání požadavku:', error.request);
      throw new Error('Chyba při odesílání požadavku');
    } else {
      console.error('Nastala neznámá chyba:', error.message);
      throw error;
    }
  }
};