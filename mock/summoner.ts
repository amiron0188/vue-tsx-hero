import { MockMethod } from 'vite-plugin-mock';
import summonerList from './summoner.json';

const summoner: Array<MockMethod> = [
    {
        url: '/api/summoner',
        method: 'get',
        response: (): any => {
            return {
                code: 0,
                data: summonerList
            }
        }
    }
]

export default [...summoner]