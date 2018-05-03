
<template>
   <div class="m-sliderbartag">
     <ul class="m-sliderbartag-ul">
       <li class="m-sliderbartag-ul-li" v-for="(item,index) in li">
         <span @click="ddisShow(item,index)">
           {{item.title}}
         </span>
         <transition name="fade">
           <ul v-show="li[index].isShow">
             <li>111</li>
             <li>111</li>
             <li>111</li>
           </ul>
         </transition>
        </li>
     </ul>
   </div>
</template>
<script>
    export default {
        data () {
            return {
              li: [{
                title: 'Priser',
                isShow: false
              },{
                title: 'Reparationer',
                isShow: false
              },{
                title: 'Kontakta oss',
                isShow: false
              }]

            }
        },
        methods: {
          ddisShow (item,index) {
             this.$nextTick(function (item) {
              this.li.forEach(function (item) {

                item.isShow = false;

              })
              this.li[index].isShow = !this.li[index].isShow;
            })
          }
        }
    }
</script>

 <style lang="scss" scoped>
 @import '../../../static/hotcss/px2rem.scss';
  // .fade-enter-active, .fade-leave-active {
  //   transition: all .3s ease;
  // }
  // // .fade-leave-active  {
  // //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // // }
  // .fade-enter, .fade-leave-to {
  //   transform: translateY(-50%);
  //   opacity: 0;
  // }
  .m-sliderbartag {
    .m-sliderbartag-ul {
      // padding: px2rem(20);
      font-size: px2rem(28);
      .m-sliderbartag-ul-li {
        span {
          padding: px2rem(20) px2rem(20);
          border-bottom: px2rem(2) dotted #333;
          display: block;
        }

      }
    }
  }

 </style>
