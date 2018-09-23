<template>
    <div class="seller" ref="seller">
        <div class="seller-content">
            <div class="overview">
                <h1 class="title">{{seller.name}}</h1>
                <div class="desc">
                    <span class="text">({{seller.ratingCount}})</span>
                    <span class="text">月售{{seller.sellCount}}单</span>
                </div>
                <ul class="remark">
                    <li class="block">
                        <h2>起送价</h2>
                        <div class="content">
                            <span class="stress">{{seller.minPrice}}</span>
                        </div>
                    </li>
                    <li class="block">
                        <h2>商家起送</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryPrice}}</span>
                        </div>
                    </li>
                    <li class="block">
                        <h2>平均配送时间</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryTime}}</span>
                        </div>
                    </li>
                </ul>
                <div class="favorite">
                </div>
            </div>
            <split></split>
            <div class="bulletin">
                <h1 class="title">公告与活动</h1>
                <div class="content-wrapper">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
                <ul v-if="seller.supports" class="supports">
                    <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                           <span class="icon" :class="classMap[seller.supports[index].type]">
                           </span>
                        <span class="text">{{seller.supports[index].description}}</span>
                    </li>
                </ul>
            </div>
            <split></split>
            <div class="pics">
                <h1 class="title">商家实景</h1>
                <div class="pic-wrapper">
                    <ul class="pic-list">
                        <li class="pic-item" v-for="pic in seller.pics" >
                            <img :src="pic" alt="" width="120" height="90">
                        </li>
                    </ul>
                </div>
            </div>
            <split></split>
            <div class="info">
                <h1 class="title">商家信息</h1>
                <ul>
                    <li class="info-item" v-for="(info,index) in seller.infos">{{seller.infos[index]}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import start from '../star/star';
    import split from '../split/split';
    import BScroll from 'better-scroll';
    export default {
      created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
      watch: {
        'seller' () {
            this._initScroll();
        }
      },
      ready () {
        this._initScroll();
      },
      methods: {
        _initScroll () {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.seller, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        }
      },
      props: {
        seller: {
          type: Object
        }
      },
      components: {
        start, split
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .seller
        postion:absolute
        top:174px
        bottom:0
        left:0
        width: 100%
        overflow:hidden
        .overview
            padding:18px
            .title
                margin-bottom:8px
                line-height:17px
                color:rgb(7,17,27)
                font-size:14px
            .desc
                padding-bottom :18px
                font-size:0
                border-bottom :1px solid rgba(7,17,27,.1)
                .text
                    display :inline-block
                    margin-right :12px
                    line-height :18px
                    vertical-align :top
                    font-size:10px
                    color:rgb(77,85,93)

            .remark
                display :flex
                padding-top :18px
                text-align :center
                .block
                    flex:1
                    text-align: center
                    border-right:1px solid rgba(7,17,27,.1)
                    &:last-child
                        border-right:none
                h2
                    margin-bottom:4px
                    line-height:10px
                    font-size:10px
                    lolor:rgb(147,153,159)
                .content
                    line-height :24px
                    font-size:10px
                    color:rgb(7,17,27)
                    .stress
                        font-size:24px

        .bulletin
            padding:18px 18px 0 18px
            .title
                margin-bottom:8px
                line-height:17px
                color:rgb(7,17,27)
                font-size:14px
            .content-wrapper
                padding :0 12px 16px 12px
                border-bottom :1px solid rgba(7,17,27,.1)
                .content
                    line-height:24px
                    font-size:12px
                    color:rgb(240,20,20)
            .supports
                .support-item
                    padding:16px 12px
                    font-size:0
                    border-bottom :1px solid rgba(7,17,27,.1)
                    &.last-child
                        border:none
                .icon
                    display :inline-block
                    width:16px
                    height:16px
                    vertical-align :top
                    margin-right:6px
                    background-size :16px 16px
                    background-repeat:no-repeat
                .decrease
                    background-image :url("./decrease_1@2x.png")
                .discount
                    background-image :url("./discount_1@2x.png")
                .special
                    background-image :url("./special_4@2x.png")
                .invoice
                    background-image :url("./invoice_2@2x.png")
                .guarantee
                    background-image :url("./guarantee_1@2x.png")
                .text
                    line-height:16px
                    font-size: 12px
        .pics
            padding:18px 18px 0 18px
            .title
                margin-bottom:12px
                line-height:14px
                color:rgb(7,17,27)
                font-size:14px
            .pic-wrapper
                width: 100%
                overflow:hidden
                white-space :nowrap
                .pic-list
                    font-size:0
                    .pic-item
                        margin-right:6px
                        display :inline-block
                        height:90px
        .info
            padding:18px 18px 0 18px
            .title
                margin-bottom:12px
                line-height:14px
                color:rgb(7,17,27)
                font-size:14px
            .info-item
                padding :16px 12px
                border-bottom :1px solid rgba(7,17,27,.1)
                line-height:16px

</style>
