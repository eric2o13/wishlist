import {createStore} from 'vuex';
import {AppPlugin} from "@/plugin/app-plugin";
import Actions from "@/actions";
import Mutations from "@/mutations";
import {State} from "@/state";

export default createStore({
  state: State,
  mutations: {
    ...Mutations
  },
  actions: {
    ...Actions
  },
  plugins: [AppPlugin]
})
