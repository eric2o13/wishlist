import {AppState} from "@/interfaces/State";
import {Store} from "vuex";

export const AppPlugin = (store:Store<AppState>): void => {

    const localStorage = window.localStorage || {};

    const synchronizeLocalStorage = (state:AppState) => {
        localStorage.setItem('AppState', JSON.stringify(state));
    };

    const localState: string | null = localStorage.getItem('AppState');
    if (localState) {
        store.commit('setAppState', JSON.parse(localState));
    }

    store.subscribe((mutation, state) => {
        synchronizeLocalStorage(state);
    });

}