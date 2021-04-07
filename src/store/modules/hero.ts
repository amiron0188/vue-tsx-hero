import { getHeroList, getFreeHeroList } from '@/apis/hero/index';


export interface HeroStateType {
    name: string,
    heros: HeroType[],
    freeheros: HeroType[]

}

export interface HeroType {
    ename: number;
    cname: string;
    title: string;
    new_type: number;
    hero_type: number;
    skin_name: string;
}

const state: HeroStateType = {
    name: 'hero',
    heros: [],
    freeheros: []
}

const mutations = {
    commitHerosState(state: HeroStateType, payload: { heros: HeroType[] }) {      
        state.heros = payload.heros;
    },
    commitFreeHerosState(state: HeroStateType, payload: { freeheros: HeroType[]}) {
        state.freeheros = payload.freeheros;
    }
    
}

const actions = {
    async getHeros(store: any) {
        const { data } = await getHeroList();
        store.commit('commitHerosState', {heros: data});
    },
    async getFreeHeros(store: any) {
        const { data } = await getFreeHeroList();
        store.commit('commitFreeHerosState', { freeheros: data})
    }    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  };
  