const state = {
  user: null
}

const mutations = {
  SET_USER(state,info){
    state.user = info
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
