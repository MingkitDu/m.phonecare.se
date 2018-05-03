<template>
  <div class="tabbarmid">
    <div class="tabbarmid-l">
      <img src="https://www.phonecare.se/media/catalog/product/cache/1/small_image/300x350/9df78eab33525d08d6e5fb8d27136e95/4/8/4897058383737-1.jpg" alt="" @click="imgisShow()">

      <div class="imgBackground" v-show="imgShow"></div>

      <transition name="fade">
        <div class="imgAfter" v-show="imgShow">
          <p class="imgTitle">7G HongHao Case Red</p>
          <img src="https://www.phonecare.se/media/catalog/product/cache/1/small_image/300x350/9df78eab33525d08d6e5fb8d27136e95/4/8/4897058383737-1.jpg" alt="">
          <button @click="imgisShow()">fastställa</button>
        </div>
      </transition>
    </div>
    <div class="tabbarmid-r">
      <router-link class="toProduct" to='/Shop'>
        <p class="tabbarmid-r-title">
          7G HongHao Case Red
        </p>
        <p class="tabbarmid-r-context">
          ARTIKELNUMMER : 4897058383737
        </p>
        <p class="tabbarmid-r-price">
          Price: 199,00 kr
        </p>
      </router-link>

      <div class="tabbarmid-r-b">
        <div v-if="fullorempty" class="tabbarmid-r-cart">
          <div class="computed">
            <span @click="cutProduct()">-</span>
            <input type="text" :value="number">
            <span @click="addProduct()">+</span>
          </div>
          <button class="atCart">Add to Cart</button>
        </div>
        <p v-else class="empty">Out of stock</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbarmid',
    data() {
      return {
        fullorempty: true,
        imgShow: false,
        number: 1
      }
    },
    methods: {
      imgisShow() {
        this.imgShow = !this.imgShow
      },
      addProduct () {
        this.number ++
      },
      cutProduct () {
        if(this.number > 1) {
          this.number--
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../static/hotcss/px2rem.scss';
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease;
  }

  // .fade-leave-active  {
  //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // }
  .fade-enter,
  .fade-leave-to {
    transform: translateY(-50%);
    opacity: 0;
  }

  .tabbarmid {
    margin-top: px2rem(20);
    width: 100%;
    margin-bottom: px2rem(10);
    padding-bottom: px2rem(10);
    border-bottom: px2rem(1) solid #eee;
    &:last-child {
      border: none;
    }
    // margin-right: px2rem(20);
    display: flex;
    justify-content: space-between;
    .tabbarmid-l {
      img {
        width: px2rem(200);
        // height: px2rem(200);
      }
      .imgBackground {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #282828;
        opacity: .6;
        z-index: 1002;
      }
      .imgAfter {
        width: px2rem(650);
        height: px2rem(750);
        padding: px2rem(50);
        position: fixed;
        z-index: 1003;
        // border: px2rem(1) solid #fc6908;
        border-radius: px2rem(20);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .imgTitle {
          white-space:initial;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        button {
          font-size: px2rem(30);
          padding: px2rem(20);
          color: #fff;
          background-color: #fc6908;
          width: 80%;
          margin-top: px2rem(20);
          border: none;
          outline: none;
          border-radius: px2rem(10);
        }
        img {
          width: 70%;
        }
      }
    }
    .tabbarmid-r {
      margin-right: px2rem(30);
      margin-top: px2rem(10);
      .tabbarmid-r-title {
        font-size: px2rem(30);
        font-weight: bolder;
        height: px2rem(60);
        line-height: px2rem(60);
        max-width: px2rem(400);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #282828;
      }
      .tabbarmid-r-context {
        font-size: px2rem(24);
        color: #282828;
        height: px2rem(40);
        line-height: px2rem(40);
      }
      .tabbarmid-r-price {
        font-size: px2rem(24);
        height: px2rem(40);
        line-height: px2rem(40);
        margin-top: px2rem(10);
        color: #282828;
      }
      .tabbarmid-r-cart {
        display: flex;
        justify-content: space-between;
        margin-top: px2rem(10);
        align-items: center;
        .computed {
          input {
            width: px2rem(80);
            height: px2rem(55);
            font-size: px2rem(40);
            text-align: center;
            border: none;
            outline: none;
          }
        }
        .atCart {
          // height: px2rem(55);
          // width: px2rem(150);
          border-radius: px2rem(5);
          padding: px2rem(20);
          background-color: #fc6908;
          border: none;
          color: #fff;
          font-size: px2rem(24);
          outline: none;
        }
      }
      .empty {
        color: #fff;
        border-radius: px2rem(5);
        font-size: px2rem(24);
        padding: px2rem(10);
        background-color: #e22d2d;
        display: inline-block;
      }
    }
  }

  .toProduct {
    text-decoration: none;
  }
</style>
