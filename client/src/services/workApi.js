import axios from '../api/axios';
const serverUrl = 'http://72f06y-ip-185-68-28-20.tunnelmole.net';

const getWorks = async () => {
  try {
    const response = await axios.get(`${serverUrl}/api/v1/position`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;
      throw new Error(errorData.message || 'Chyba při získávání pozic');
    } else if (error.request) {
      console.error('Chyba při odesílání požadavku:', error.request);
      throw new Error('Chyba při odesílání požadavku');
    } else {
      console.error('Nastala neznámá chyba:', error.message);
      throw error;
    }
  }
};

export { getWorks};