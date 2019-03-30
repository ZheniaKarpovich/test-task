import http from 'http/index';

const authentificate = uuid => http.post('/api/v1/auth/uuidLogin', { uuid }).then(res => res.data);

export default authentificate;
