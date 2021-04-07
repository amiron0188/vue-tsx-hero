import request  from '@/utils/request';

export const getItemList = () => request.get('/api/item');