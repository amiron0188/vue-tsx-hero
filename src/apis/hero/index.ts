import request from '@/utils/request';

export const getHeroList = () =>  request.get('/api/hero');
export const getFreeHeroList = () => request.get('/api/hero/free')