import { getSummonerList } from "@/apis/summoner";

export interface SummonerType {
    
        summoner_id: number,
        summoner_name: string,
        summoner_rank: string,
        summoner_description: string
      
}

export interface SummonerStateType {
    name?: string,
    summoners?: SummonerType[]

}

const state: SummonerStateType = {
    name: 'summoner',
    summoners: []
}

const mutations = {
    commitSummonersState(state: SummonerStateType, payload: { summoners: SummonerType[]}) {
        state.summoners = payload.summoners;
    }

}

const actions = {
    async getSummoners(store: any) {
        const { data } = await getSummonerList();
        store.commit('commitSummonersState', { summoners: data });
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}