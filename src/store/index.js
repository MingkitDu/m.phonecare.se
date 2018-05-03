import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var _this = this
export default new Vuex.Store({
  state: {
    headerLogo: 'https://www.phonecare.se/skin/frontend/tv_bigboom_package/tv_bigboom1/images/logo.png',
    bottomTag: [{
      text: 'Home',
      route: '/',
      class: 'fa fa-home',
      active: true
    },{
      text: 'Catalog',
      route: '/Catalog',
      class: 'fa fa-th-list',
      active: false
    },{
      text: 'Cart',
      route: '/Cart',
      class: 'fa fa-shopping-cart',
      active: false
    },{
      text: 'User',
      route: '/User',
      class: 'fa fa-user-o',
      active: false
    }],
    drawerShow: false,
    userisLogin: 0
  },
  mutations: {
    DRAWERTOGGLE: function (state) {
      _this.state.drawerShow = !_this.state.drawerShow
    },
    USERISLOGIN (state) {
      state.userisLogin = 1
      console.log(state.userisLogin)
    },
    USERREGISTER (state) {
      state.userisLogin = -1
    }
  },
  getters: {

  },
  actions: {
    drawerToggle (context) {
      // _this.a.state.drawerShow = !_this.a.state.drawerShow
      // console.log(_this)
      context.commit('DRAWERTOGGLE')
    },
    userLogin (context, user) {
      console.log(user)
      var username = user.username.name;
      var userpassword = user.userpassword.password;
      console.log(username + userpassword)
      // context.commit('USERISLOGIN')
    },
    userRegister (context) {
      context.commit('USERREGISTER')
    }
  }
})