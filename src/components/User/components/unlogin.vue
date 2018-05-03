<template>
  <div class="loginpage">
    <div class="loginpage-header">
      <div class="unlogin">
        <p class="title">Logga in eller skapa ett konto</p>
        <p class="login-title">Befintlig kund? Logga in</p>
        <p class="login-title-contant">
          Om du redan har ett konto hos oss, vänligen logga in.
        </p>
        <div class="login-input">
          <label>
                <p>
                  E-postadresspsan <span> *</span>
                </p>
              <input :class=" {'noClass':user.username.addClass ,'addClass':user.username.removeClass }" type="text" v-model="user.username.name" @focus="loginSetClass()" @blur="loginRemoveClass()" >
              <p class="checkout" v-show="user.username.isShow">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
                Detta är ett obligatoriskt fält.
              </p>
              </label>
          <label>
                <p>
                  Lösenord <span> *</span>
                </p>
              <input :class=" {'noClass':user.userpassword.addClass ,'addClass':user.userpassword.removeClass }" type="password" v-model="user.userpassword.password" @focus="passwordSetClass()" @blur="passwordRemoveClass()">
              <p class="checkout" v-show="user.userpassword.isShow">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
                Detta är ett obligatoriskt fält.
              </p>
              </label>
          <p class="input-must">* Obligatoriska fält</p>
          <router-link class="for-pass" to="/">Glömt ditt lösenord?</router-link>
          <button class="btn" @click="login()">Logga in</button>
        </div>
        <p class="login-title">Inte kund? Skapa konto</p>
        <p class="login-title-contant">
          Om du registrerar dig som kund hos oss, kan du handla mycket smidigare, använda dig av flera leveransadresser, granska och spåra dina beställningar och mycket mer.
        </p>
        <router-link style="text-decoration: none" to='/Register'>
          <button class="btn">Registrera dig som kund</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'loginpage',
    data() {
      return {
        user: {
          username: {
            name: '',
            isShow: false,
            addClass:true,
            removeClass:false
          },
          userpassword: {
            password: '',
            isShow: false,
            addClass:true,
            removeClass:false
          }
        }
      }
    },
    computed: {
      // ...mapState(['userisLogin'])
    },
    methods: {
      loginSetClass() {
        this.user.username.addClass = false;
        this.user.username.removeClass = true;
      },
      loginRemoveClass() {
        this.user.username.addClass = true;
        this.user.username.removeClass = false;
      },
      passwordSetClass() {
        this.user.userpassword.addClass = false;
        this.user.userpassword.removeClass = true;
      },
      passwordRemoveClass() {
        this.user.userpassword.addClass = true;
        this.user.userpassword.removeClass = false;
      },
      login() {
        var checkEmail =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        // console.log(checkEmail.test(this.user.username.name))
        if (!checkEmail.test(this.user.username.name)) {
          this.user.username.isShow = true
          // console.log(1)
        } else if (checkEmail.test(this.user.username.name)){
          this.user.username.isShow = false
          // console.log(0)
        }
        if (this.user.userpassword.password == '') {
          this.user.userpassword.isShow = true
          // console.log(2)
        } else if (this.user.userpassword.password != '') {
          this.user.userpassword.isShow = false
        }
        if (this.user.username.name != '' && this.user.userpassword.password != ''){
          this.$store.dispatch('userLogin',this.user)
        }
        // this.$store.dispatch('userLogin')
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../../../static/hotcss/px2rem.scss';
  .loginpage {
    margin-top: px2rem(20);
    padding: 0 px2rem(30);
    .loginpage-header {
      height: px2rem(365);
      // background-color: #000000;
      padding: 0 px2rem(15);
      .unlogin {
        .title {
          font-size: px2rem(30);
          line-height: px2rem(60);
          padding-bottom: px2rem(10);
          border-bottom: px2rem(2) solid #cecece;
          // padding-left: px2rem(20);
          font-weight: bold;
          margin-bottom: px2rem(30);
        }
        .login-title {
          text-transform: uppercase;
          font-size: px2rem(24);
          margin: px2rem(24) 0;
          font-weight: bold;
        }
        .login-title-contant {
          font-size: px2rem(24);
          margin-bottom: px2rem(24);
        }
        .login-input {
          // text-align: center;
          .for-pass {
            // text-decoration: none;
            display: inline-block;
            color: #aaaaaa;
            margin: px2rem(30) 0;
            font-size: px2rem(30);
          }
          // padding: 0 px2rem(100);
          label {
            &:nth-child(2) {
              margin-bottom: px2rem(15)
            }
            p {
              font-size: px2rem(30);
              margin: px2rem(10) 0;
              span {
                color: red;
              }
            }
            .noClass {
              height: px2rem(46);
              border: none;
              border-radius: 0;
              // border-left: px2rem(1) solid #aaa;
              border-bottom: px2rem(2) solid #aaa; // border-left: none;
              width: 100%;
              outline: none;
              font-size: px2rem(30);
              text-indent: px2rem(10);
              border-top-right-radius: px2rem(10);
              border-bottom-right-radius: px2rem(10);
            }
            .addClass {
              height: px2rem(46);
              border: none;
              border-radius: 0;
              // border-left: px2rem(1) solid #aaa;
              border-bottom: px2rem(2) solid #fc6908; // border-left: none;
              width: 100%;
              outline: none;
              font-size: px2rem(30);
              text-indent: px2rem(10);
              border-top-right-radius: px2rem(10);
              border-bottom-right-radius: px2rem(10);
            }
            .checkout {
              color: red;
              font-size: px2rem(20);
            }
          }
        }
      }
    }
  }
  
  .btn {
    height: px2rem(96);
    display: block;
    width: 100%;
    margin: 0 auto;
    border: none;
    background: #fc6908;
    color: #fff;
    font-size: px2rem(30);
    margin-bottom: px2rem(20);
    border-radius: px2rem(10);
    // margin: px2rem(30) 0;
  }
  
  .input-must {
    color: red;
    font-size: px2rem(24);
    margin-top: px2rem(20);
  }
</style>
