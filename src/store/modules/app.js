const state = {
  config: {}
}

const mutations = {
  SET_CONFIG(state,data){
    state.config = data
  }
}

const actions = {
  init ({ dispatch,commit,state }) {
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions: {
    ...actions,
    init: {
      root: true,
      handler: actions.init
    }
  }
}
