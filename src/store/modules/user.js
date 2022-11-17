const state = {
  gallery: [{
    id: 5,
    default: '',
    status: 'creating',
    children:[{
      status: 'creating',
    },{
      status: 'await',
    },{
      status: 'await',
    },{
      status: 'await',
    }]
  }],
  underWay:{
    id: 5,
    default: '',
    status: 'creating',
    children:[{
      status: 'creating',
    },{
      status: 'await',
    },{
      status: 'await',
    },{
      status: 'await',
    }]
  }
}

const mutations = {
  SET_CONFIG(state,list){
    state.gallery = list
  },
  UP_UNDERWAY(state,{ key,value }){
    state.underWay[key] = value;
  },
  UP_UNDERWAY_CHILD(state,{ index, key, value }){
    state.underWay.children[index][key] = value;
  },
  SET_UNDERWAY(state, info) {
    state.underWay = info;
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
