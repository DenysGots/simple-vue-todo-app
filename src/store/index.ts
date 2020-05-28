import Vue from 'vue';
import Vuex from 'vuex';

import { Item } from '@/public-api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: Array<Item>()
  },
  mutations: {
    addItems(state, items: Item[]) {
      state.items = [...state.items, ...items];
    },
    addItem(state, item: Item) {
      state.items.push(item);
    },
    markItemsAsDone(state, itemId: string) {
      const itemToChangeIndex = state.items.findIndex((item: Item) => item.id === itemId);
      state.items.splice(itemToChangeIndex, 1, { ...state.items[itemToChangeIndex], closed: true });
    },
    deleteItem(state, itemId: string) {
      state.items = state.items.filter((item: Item) => item.id !== itemId);
    }
  },
  actions: {
    addItems(context, items: Item[]) {
      context.commit('addItems', items);
    },
    addItem(context, item: Item) {
      context.commit('addItem', item);
    },
    markItemsAsDone(context, itemId: string) {
      context.commit('markItemsAsDone', itemId);
    },
    deleteItem(context, itemId: string) {
      context.commit('deleteItem', itemId);
    }
  },
  modules: {}
});
