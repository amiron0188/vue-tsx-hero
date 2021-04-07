import { getItemList } from "@/apis/item";


export interface ItemType {
    item_id: number,
	item_name: string,
	item_type: number,
	price: number,
	total_price: number,
	des1: string,
	des2: string
}

export interface ItemStateType {
    name?: string,
    items?: ItemType[]

}

const state: ItemStateType = {
    name: 'item',
    items: []
}

const mutations = {
    commitItemsState(state: ItemStateType, payload: { items: ItemType[]}) {
        state.items = payload.items;
    }

}

const actions = {
    async getItems(store: any) {
        const { data } = await getItemList();
        store.commit('commitItemsState', { items: data });
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}