import http from 'http/index';

export const authentificate = uuid => http.post('/api/v1/auth/uuidLogin', { uuid }).then(res => res.data);

export const getUser = () => http.get('/api/v1/auth/user').then(res => res.data.response);
