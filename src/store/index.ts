import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

// modules
import user from "./user/index";
import article from "./article/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    user,
    article
  }
};

export default new Vuex.Store<RootState>(store);
