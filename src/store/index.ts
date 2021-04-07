import { createStore } from 'vuex';
import hero, { HeroStateType } from './modules/hero';
import item, { ItemStateType } from './modules/item';
import summoner, { SummonerStateType } from './modules/summoner';

export interface StateType {
  hero: HeroStateType;
  item: ItemStateType;
  summoner: SummonerStateType;

}

export default createStore({
  getters: {

  },
  mutations: {},
  actions: {},
  modules: {
    hero,
    item,
    summoner
  },
});
