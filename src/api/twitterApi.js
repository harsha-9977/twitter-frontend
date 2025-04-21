import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getTwitterMetrics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/twitter`);
    return response.data;
  } catch (err) {
    console.error('Error fetching Twitter metrics:', err);
    throw err;
  }
};
