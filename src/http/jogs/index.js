import http from 'http/index';

export const getJogs = () => http.get('/api/v1/data/sync').then(res => res.data.response);

export const addJog = jogs => http.post('/api/v1/data/jog', jogs).then(res => res.data.response);
