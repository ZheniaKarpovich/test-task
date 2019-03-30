import http from 'http/index';

const getJogs = () => http.get('/api/v1/data/sync').then(res => res.data.response);

export default getJogs;
