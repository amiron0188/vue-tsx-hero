import { MockMethod } from 'vite-plugin-mock';
import herolist from './heroList.json';

const hero: Array<MockMethod> = [
    {
        url: '/api/hero',
        method: 'get',
        response: ({ headers }): any => {
            return {
                code: 0,
                data: herolist
            }
        }
    },
    {
        url: '/api/hero/free',
        method: 'get',
        response: () => {
            function getRandomArrayElements(arr, count) {
                let shuffled = arr.slice(0),
                    i = arr.length,
                    min = i - count,
                    temp,
                    index;
                
                while (i-- > min) {
                    index = Math.floor((i + 1) * Math.random());
                    temp = shuffled[index];
                    shuffled[index] = shuffled[i];
                    shuffled[i] = temp;
                }
                return shuffled.slice(min);
            }
            const freeheros = getRandomArrayElements(herolist, 15);
            return {
                code: 0,
                data: freeheros
            }
        }
    }
]

export default [...hero]