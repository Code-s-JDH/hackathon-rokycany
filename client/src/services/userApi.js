import axios from '../api/axios';
const serverUrl = 'http://localhost:8080';

const registerUser = async (userData) => {
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

const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${serverUrl}/auth`, JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    return response;
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;
      throw new Error(errorData.message || 'Chyba při přihlašování uživatele');
    } else if (error.request) {
      console.error('Chyba při odesílání požadavku:', error.request);
      throw new Error('Chyba při odesílání požadavku');
    } else {
      console.error('Nastala neznámá chyba:', error.message);
      throw error;
    }
  }
};

const logoutUser = async () => {
  try {
    const response = await fetch(`${serverUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Chyba při odhlašování uživatele');
    }

    // Zpracování úspěšné odpovědi ve formátu JSON
    const result = await response.json();
    console.log(result.message);

    // Doplňte další akce po odhlášení, např. přesměrování na přihlašovací stránku
  } catch (error) {
    console.error('Chyba při odhlašování:', error);
    throw error;
  }
};

export {
  registerUser,
  loginUser,
  logoutUser
};
