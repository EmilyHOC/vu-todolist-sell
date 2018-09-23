<template >
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64"/>
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand">
                    </span>
                    <san class="name">{{seller.name}}</san>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count"  @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="fa fa-angle-right icon-keyboard_arrow_right" aria-hidden="true"></i>
            </div>
        </div>
        <div class="bulletin-wrapper"  @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="fa fa-angle-right icon-keyboard_arrow_right" aria-hidden="true"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%" />
        </div>
        <div v-show="detailShow" class="detail" >
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" score="seller.score"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports">
                        <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                           <span class="icon" :class="classMap[seller.supports[index].type]">
                           </span>
                            <span class="text"   >{{seller.supports[index].description}}</span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <p class="content">
                            {{seller.bulletin}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                <i class="fa fa-times-circle-o icon-close" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import star from '../star/star';
    export default {
      components: {star},
      created () {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
      props: {
          seller: {
            type: Object
          }
        },
      data () {
          return {
            detailShow: false
          };
      },
      methods: {
        showDetail () {
           this.detailShow = true;
         },
        hideDetail () {
          this.detailShow = false;
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .header
        position:relative
        overflow:hidden
        color :#fff
        background :rgba(7,17,27,0.5)
        .content-wrapper
            padding:24px 12px 18px 24px
            font-size:0
            .avatar
                display :inline-block
                vertical-align :top
                img
                    border-radius:2px
            .content
                display inline-block
                margin-left:16px
                .title
                    margin:2px 0 8px 0
                    .brand
                        display:inline-block
                        vertical-align :top
                        background-image :url("./brand@3x.png")
                        width:30px
                        height:18px;
                        background-repeat :no-repeat
                        background-size :30px 18px
                    .name
                        margin-left:6px
                        font-size:16px
                        font-weight :bold
                        line-height :18px

                .description
                    margin-bottom :10px
                    line-height:12px
                    font-size:12px
                    font-weight :100
                .support
                    .icon
                        display:inline-block
                        background-image:url("decrease_2@3x.png")
                        background-repeat:no-repeat;
                        width:12px
                        height:12px
                        margin-right:4px
                        background-size :12px 12px
                    .text
                        line-height:12px
                        vertical-align :top
                        font-size :12px
                        color :rgb(255,255,255)
                        font-weight:100

            .support-count
                right:12px
                position :absolute
                top:63px
                padding: 0 8px
                height:24px
                line-height:24px
                border-radius :14px
                background:rgba(0,0,0,.2)
                text-align :center
                .count
                    font-size:10px
                    vertical-align :top
                .icon-keyboard_arrow_right
                    margin-left:2px
                    margin-top :6px;
                    font-size:10px
        .bulletin-wrapper
            background :rgba(7,17,27,.2)
            position :relative
            heihgt:28px
            line-height:28px
            padding :0 22px 0 12px
            white-space :nowrap
            overflow :hidden;
            text-overflow :ellipsis
            .bulletin-title
                display inline-block
                vertical-align :top
                width:22px
                height:12px
                background-image :url("bulletin@3x.png")
                background-repeat :no-repeat
                background-size:22px 12px
                margin-top:8px
            .bulletin-text
                font-size :10px
                vertical-align :top
                margin:0 4px
                font-size:10px
            .icon-keyboard_arrow_right
                position :absolute
                font-size :10px
                right:12px
                top:8px
        .background
            position:absolute
            left:0
            top:0
            width: 100%
            height: 100%
            z-index: -1
            filter:blur(10px)
        .detail
            position :fixed
            z-index: 100
            width:100%
            height: 100%
            overflow:auto
            background :rgba(7,17,27,.8)
            top:0
            left:0
            .clearfix
                display :inline-block
                &:after
                   display :block
                    content:"."
                    height:0
                    line-height :0
                    clear:both
                    visibility: hidden
            .detail-wrapper
                width:100%
                min-height:100%
                .detail-main
                    margin-top: 64px
                    padding-bottom:64px
                    .name
                        line-height :16px
                        text-align :center
                    .star-wrapper
                        margin-top:18px
                        padding 2px 0
                        text-align :center
                    .title
                        display :flex
                        width:80%
                        margin:30px auto 24px auto
                        .line
                            flex:1
                            position :relative
                            top:-6px
                            border-bottom :1px solid rgba(255,255,255,.2)
                        .text
                            padding :0 12px
                            font-size :14px
                    .supports
                        width: 80%
                        margin: 0 auto
                        .support-item
                           padding:0 12px
                           margin-bottom: 12px
                           font-size:0
                           &:last-child
                               margin-bottom:0
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
                    .bulletin
                        width: 80%
                        margin :0 auto
                        .content
                            padding: 0 12px
                            line-height:24px
                            font-size :12px

            .detail-close
                position:relative
                width:32px
                height:32px
                margin:-64px auto 0 auto
                clear:both
                font-size :32px

</style>
