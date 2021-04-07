import { MockMethod } from 'vite-plugin-mock';
import itemList from './itemList.json';

const item: Array<MockMethod> = [
    {
        url: '/api/item',
        method: 'get',
        response: (): any => {
            return {
                code: 0,
                data: itemList
            }
        }
    }
]

export default [...item]