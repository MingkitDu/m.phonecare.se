<template>
  <div class="user-register">
    <div class="reg-title">
      <i class="fa fa-chevron-left" aria-hidden="true" @click="back()"></i>
      <p>Registrera</p>
      <i></i>
    </div>
    <p class="r-title">Registrera dig som kund</p>
    <div class="person-information">
      <p class="p-title">
        Personlig information
      </p>
      <div class="p-contant">
        <label class="input-text">
            <p>Förnamn <span>*</span></p>
            <input type="text" v-model="regInformation.personInformation.lastName.value">
            <p class="checkout" v-show="regInformation.personInformation.lastName.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>Efternamn <span>*</span></p>
            <input type="text" v-model="regInformation.personInformation.firstName.value">
            <p class="checkout" v-show="regInformation.personInformation.firstName.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>E-postadress <span>*</span></p>
            <input type="text" v-model="regInformation.personInformation.eMail.value">
            <p class="checkout" v-show="regInformation.personInformation.eMail.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-checkbox">
            <input class="mui-switch mui-switch-animbg" type="checkbox" v-model="regInformation.personInformation.dingyue.isCheck">
            <span>Prenumerera på nyhetsbrev</span>
          </label>
      </div>
    </div>
    <div class="person-information">
      <p class="p-title">
        Information om inloggning
      </p>
      <div class="p-contant">
        <label class="input-text">
            <p>Lösenord <span>*</span></p>
            <input type="password" v-model="regInformation.Information.password.value">
            <p class="checkout" v-show="regInformation.Information.password.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>Bekräfta lösenord <span>*</span></p>
            <input type="password" v-model="regInformation.Information.conPassword.value">
            <p class="checkout" v-show="regInformation.Information.conPassword.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
      </div>
    </div>
    <div class="person-information">
      <p class="p-title">
        Adress information
      </p>
      <div class="p-contant">
        <label class="input-text">
            <p>Företag</p>
            <input type="text" v-model="regInformation.adressInfoamation.company.value">
        </label>
        <label class="input-text">
            <p>Telefon <span>*</span></p>
            <input type="text" v-model="regInformation.adressInfoamation.phone.value">
            <p class="checkout" v-show="regInformation.adressInfoamation.phone.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>Gatuadress <span>*</span></p>
            <input type="text" v-model="regInformation.adressInfoamation.stree.value">
            <p class="checkout" v-show="regInformation.adressInfoamation.stree.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>Stad <span>*</span></p>
            <input type="text" v-model="regInformation.adressInfoamation.city.value">
            <p class="checkout" v-show="regInformation.adressInfoamation.city.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>Region</p>
            <input type="text" v-model="regInformation.adressInfoamation.district.value">
        </label>
        <label class="input-text">
            <p>Postadress <span>*</span></p>
            <input type="text" v-model="regInformation.adressInfoamation.postAddress.value">
            <p class="checkout" v-show="regInformation.adressInfoamation.postAddress.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-text">
            <p>Land <span>*</span></p>
            <input type="text" v-model="regInformation.adressInfoamation.country.value">
            <p class="checkout" v-show="regInformation.adressInfoamation.country.isShow">
              <i class="fa fa-angle-up" aria-hidden="true"></i>
              Detta är ett obligatoriskt fält.
            </p>
        </label>
        <label class="input-checkbox">
          <input class="mui-switch mui-switch-animbg" type="checkbox" v-model="regInformation.adressInfoamation.checkMan.isCheck">
          <span>I am not a robot.</span><span style="color:red"> *</span>
        </label>
        <p class="checkout" v-show="regInformation.adressInfoamation.checkMan.isShow">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
            Detta är ett obligatoriskt fält.
          </p>
      </div>
    </div>
    <button class="btn" @click="reg()">Skicka</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       
        regInformation: {
          personInformation: {
            lastName: {
              value: '',
              isShow: false
            },
            firstName: {
              value: '',
              isShow: false
            },
            eMail: {
              value: '',
              isShow: false
            },
            dingyue: {
              isCheck: true
            }
          },
          Information: {
            password: {
              value: '',
              isShow: false
            },
            conPassword: {
              value: '',
              isShow: false
            }
          },
          adressInfoamation: {
            company: {
              value: ''
            },
            phone: {
              value: '',
              isShow: false
            },
            stree: {
              value: '',
              isShow: false
            },
            city: {
              value: '',
              isShow: false
            },
            district: {
              value: ''
            },
            postAddress: {
              value: '',
              isShow: false
            },
            country: {
              value: '',
              isShow: false
            },
            checkMan: {
              isCheck: false,
              isShow: false
            }
          }
        }
      }
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      reg () {
        var regIn = {}
        var checkEmail =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        var checkTel = /^\S[0-9]*$/
        //姓氏
        if(this.regInformation.personInformation.lastName.value == ''){
          this.regInformation.personInformation.lastName.isShow = true
        } else {
          this.regInformation.personInformation.lastName.isShow = false
          regIn.lastName = this.regInformation.personInformation.lastName.value
        //名字
        }
        if(this.regInformation.personInformation.firstName.value == ''){
          this.regInformation.personInformation.firstName.isShow = true
        } else {
          this.regInformation.personInformation.firstName.isShow = false
          regIn.firstName = this.regInformation.personInformation.firstName.value
        }
        //邮箱
        if(!checkEmail.test(this.regInformation.personInformation.eMail.value)){
          this.regInformation.personInformation.eMail.isShow = true
        } else {
          this.regInformation.personInformation.eMail.isShow = false
          regIn.eMail = this.regInformation.personInformation.eMail.value
        }
        //订阅
        if(this.regInformation.personInformation.dingyue.isCheck) {
          regIn.dingyue = true
        }
        //密码
        if(this.regInformation.Information.password.value == '') {
          this.regInformation.Information.password.isShow = true
        } else {
          this.regInformation.Information.password.isShow = false
        }
        //确认密码
        if(this.regInformation.Information.conPassword.value == '' || this.regInformation.Information.conPassword.value != this.regInformation.Information.password.value) {
          this.regInformation.Information.conPassword.isShow = true
        } else {
          this.regInformation.Information.conPassword.isShow = false
          regIn.password = this.regInformation.Information.conPassword.value
        }
        //公司
        if(this.regInformation.adressInfoamation.company.value != '') {
          regIn.comnpany = this.regInformation.adressInfoamation.company.value
        }
        //电话
        if(!checkTel.test(this.regInformation.adressInfoamation.phone.value)){
          this.regInformation.adressInfoamation.phone.isShow = true
        } else {
          this.regInformation.adressInfoamation.phone.isShow = false
          regIn.phone = this.regInformation.adressInfoamation.phone.value
        }
        //街道
        if(this.regInformation.adressInfoamation.stree.value == '') {
          this.regInformation.adressInfoamation.stree.isShow = true
        } else {
          this.regInformation.adressInfoamation.stree.isShow = false
          regIn.stree = this.regInformation.adressInfoamation.stree.value
        }
        //城市
        if(this.regInformation.adressInfoamation.city.value == '') {
          this.regInformation.adressInfoamation.city.isShow = true
        } else {
          this.regInformation.adressInfoamation.city.isShow = false
          regIn.city = this.regInformation.adressInfoamation.city.value
        }
        //地区
        if(this.regInformation.adressInfoamation.district.value != '') {
          regIn.district = this.regInformation.adressInfoamation.district.value
        }
        //邮编
        if(this.regInformation.adressInfoamation.postAddress.value =='') {
          this.regInformation.adressInfoamation.postAddress.isShow = true
        } else {
          this.regInformation.adressInfoamation.postAddress.isShow = false
          regIn.postAddress = this.regInformation.adressInfoamation.postAddress.value
        }
        //国家
        if(this.regInformation.adressInfoamation.country.value =='') {
          this.regInformation.adressInfoamation.country.isShow = true
        } else {
          this.regInformation.adressInfoamation.country.isShow = false
          regIn.country = this.regInformation.adressInfoamation.country.value
        }
        //人机验证
        if(!this.regInformation.adressInfoamation.checkMan.isCheck) {
          this.regInformation.adressInfoamation.checkMan.isShow = true
        } else {
          this.regInformation.adressInfoamation.checkMan.isShow = false
        }
        console.log(regIn)
       
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../static/hotcss/px2rem.scss";
  @import "../../../static/CSS/switch.scss";
  .user-register {
    padding: px2rem(110) px2rem(45) px2rem(50) px2rem(45);
    margin-bottom: px2rem(50);
    .reg-title {
      position: fixed; // width: 100%;
      z-index: 1002;
      top: 0;
      left: 0;
      right: 0;
      padding: px2rem(20); // padding: 0 px2rem(30);
      background-color: #000000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      font-weight: normal;
      i {
        font-size: px2rem(48);
        line-height: px2rem(48);
      }
      p {
        font-size: px2rem(40);
      }
    }
    .r-title {
      font-size: px2rem(30);
      line-height: px2rem(60);
      padding-bottom: px2rem(10);
      border-bottom: px2rem(2) solid #cecece; // padding-left: px2rem(20);
      font-weight: bold;
      margin-bottom: px2rem(30);
    }
    .person-information {
      // border: px2rem(1) solid #aaa;
      // border-radius: px2rem(10);
      margin-bottom: px2rem(40);
      .p-title {
        font-size: px2rem(24);
        font-weight: bold;
        background-color: #fff;
        text-transform: uppercase;
        margin-bottom: px2rem(20); // border-bottom: px2rem(1) solid #aaa;
        // padding: px2rem(15);
      }
      .p-contant {
        // padding: px2rem(15);
        color: #666;
        .input-text {
          p {
            font-size: px2rem(24);
            margin: px2rem(10) 0;
          }
          input {
            height: px2rem(46);
            border: none;
            border-bottom: px2rem(2) solid #aaa;
            ;
            width: 100%;
            outline: none;
            font-size: px2rem(30);
            text-indent: px2rem(10);
            margin-bottom: px2rem(10);
          }
          .addClass {
            height: px2rem(46);
            border: none;
            border-bottom: px2rem(2) solid #fc6908;
            ;
            width: 100%;
            outline: none;
            font-size: px2rem(30);
            text-indent: px2rem(10);
            margin-bottom: px2rem(10);
          }
          span {
            color: red;
          }
          .checkout {
            color: red;
            font-size: px2rem(20);
          }
        }
        .input-checkbox {
          display: flex;
          margin-top: px2rem(20);
          align-items: center;
          margin-bottom: px2rem(20);
          span {
            font-size: px2rem(30);
            display: block;
            margin-left: px2rem(20);
          }
        }
      }
    }
    .btn {
      height: px2rem(96);
      display: block;
      margin: 0 auto;
      width: 70%;
      border: none;
      background: #fc6908;
      color: #fff;
      font-size: px2rem(30);
      margin-bottom: px2rem(20);
      border-radius: px2rem(10); // margin: px2rem(30) 0;
    }
    .checkout {
      color: red;
      font-size: px2rem(20);
    }
  }
</style>
