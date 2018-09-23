<template>
  <div id="app">
      <v-header :seller="seller">
      </v-header>
      <div class="tab  border-1px" >
          <div class="tab-item">
              <router-link   to="/goods" tag="a" exact active-class="active" >商品</router-link>
          </div>
          <div class="tab-item">
              <router-link to="/ratings" tag="a" exact active-class="active" :seller="seller">评论</router-link>
          </div>
          <div class="tab-item">
             <router-link to="/seller" tag="a" exact active-class="active" :seller="seller">商家</router-link>
          </div>
      </div>
      <keep-alive>
          <router-view :seller="seller" ></router-view>
      </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header';

export default {
  data () {
    return {
      seller: {
        type: Object,
        default: function () {
          return {
            seller: {
              avatar: ''
            }
          };
        }
      }
    };
  },
  created () {
        this.$http.get('/api/seller').then((response) => {
          response = response.body;
            this.seller = response;
        });
      },
  components: {
          'v-header': header
        }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        .tab
            display: -webkit-flex
            width:100%
            height:40px
            //border-1px(rgba(7,17,27,0.1))
            border-bottom:1px solid rgba(7,17,27,0.1)
            .tab-item
                    flex:1
                    text-align:center
                    margin-top:13px
                    line-height:14px
                    & > a
                        display block;
                        font-size:14px;
                        color:rgb(77,85,93)
                        &.active
                            color:rgb(240,20,20)

</style>
