import { GetterTree, MutationTree, ActionTree, Action } from "vuex";
import Cookies from "js-cookie";
import { postUserInfoToSignUp, getUserInfo } from "@/apis/user";
import { IUserSignUpSuccess } from "./types";
import { IUserInfo } from "@/types/user";

class State {
  public token: string = "";
  public info: IUserInfo | Object = {};
}

const mutations = <MutationTree<State>>{
  saveToken(state, token) {
    state.token = token;
  },
  saveUserInfo(state, userInfo) {
    state.info = userInfo;
  }
};

const actions = <ActionTree<State, any>>{
  signup({ commit }, data) {
    return new Promise((resolve, reject) => {
      // 注册执行
      postUserInfoToSignUp(data).then((res: any) => {
        const { token } = res;
        // 保存 token 并持久化
        commit("saveToken", token);
        // cookie 保存三天
        Cookies.set("token", token, { expires: 3 });
        resolve({ code: 0 });
      });
    });
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then((res: any) => {
        const { data } = res;
        commit("saveUserInfo", data);
        resolve({ code: 0 });
      });
    });
  }
};

const UserModule = {
  namespaced: true,
  state: new State(),
  mutations: mutations,
  actions: actions
};

export default UserModule;
