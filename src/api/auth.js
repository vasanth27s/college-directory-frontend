import axios from 'axios';

export const loginUser = async (username, password, role) => {
    const response = await axios.post('/api/auth/login', { username, password, role });
    return response.data;
};
