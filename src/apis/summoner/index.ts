import request  from '@/utils/request';

export const getSummonerList = () => request.get('/api/summoner');