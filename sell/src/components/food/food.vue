<template>
    <div class="food" v-show="showFlag" ref="food">
        <div class="food-content">
            <div class="image-header">
                <img :src="food.image"/>
                <div class="back" @click="hide">
                    <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </div>
            </div>
            <div class="content">
                <h1 class="title">{{food.name}}</h1>
                <div class="detail">
                    <span class="seller-count">月售{{food.sellCount}}份</span>
                    <span class="rating">好评率{{food.rating}}</span>
                </div>
                <div class="price">
                    <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                </div>
                <div @click.stop.prevent="addFirst(food,$event)" class="buy" v-show="!food.count||food.count===0">加入购物车</div>
            </div>
           <split v-show="food.info"></split>
            <div class="info" v-show="food.info">
                <h1 class="title">商品详情</h1>
                <p class="text">{{food.info}}</p>
            </div>
            <split></split>
            <div class="rating">
                <h1 class="title">商品评价</h1>
                <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
                <div class="rating-wrapper">
                    <ul v-show="food.ratings&&food.ratings.length">
                        <li v-for="(rating,index) in food.ratings"  class="rating-item" :key="index">
                            <div class="user">
                                <span class="name">{{rating.username}}</span>
                                <img class="avatar" width="12" height="12" :src="rating.avatar"/>
                            </div>
                            <div class="time">{{rating.rateTime}}</div>
                            <p class="text">
                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            </p>
                        </li>
                    </ul>
                    <div class="no-rating" v-show="!food.ratings||!food.ratings.length">暂无评价</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import cartcontrol from '../cartcontrol/cartcontrol';
    import Vue from 'vue';
    import split from '../split/split';
    import ratingselect from '../ratingselect/ratingselect';

    // const POSITIVE = 0;
    // const NEGATIVE = 1;
    const All = 2;
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      show () {
        this.selectType = All;
        this.onlyContent = true;
        this.showFlag = true;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide () {
        this.showFlag = false;
      },
      addFirst () {
        if (!event._constructed) {
            return;
        }
        Vue.set(this.food, 'count', 1);
      }
    },
    data () {
      return {
       showFlag: false,
        selectType: All,
        onlyContent: true,
        desc: {
         all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    components: {
      cartcontrol, split, ratingselect
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.food
    position:fixed
    left:0
    top:0
    bottom:48px
    z-index :30
    width: 100%
    background:#fff
    .image-header
        position :relative
        width: 100%
        height:0
        padding-top:100%
        img
            position:absolute
            top:0
            left:0
            width: 100%
            height:100%
        .back
            position:absolute
            top:10px
            left:0
            .fa-chevron-circle-left
                display :block
                padding:10px
                font-size:40px
                color:#fff

    .content
        padding:18px
        position:relative
        .title
            line-height:14px
            margin-bottom:8px
            font-size:14px
            font-weight:700
            color:rgb(7,17,27)
        .detail
            margin-bottom:18px
            line-height :10px
            height:10px
            font-size:0
            .sell-count,.rating
                font-size:10px
                color:rgb(147,153,159)
            .sell-count
                margin-right:12px
        .price
              font-weight:700
              line-height:24px
              .now
                  margin-right: 8px
                  font-size :14px
                  color:rgb(240,20,20)
              .old
                  text-decoration :line-through
                  font-size:10px
                  color:rgb(147,153,159)
        .cartcontrol-wrapper
            position :absolute
            right:12px
            bottom:12px
        .buy
            position:absolute
            right:18px
            bottom:18px
            z-index:10
            height:24px
            line-height:24px
            padding:0 12px
            box-sizing :border-box
            font-size:10px
            border-radius :12px
            font-size:10px
            color:#fff
            background:rgb(0,160,220)

    .info
        padding:18px
        .title
            line-height:14px
            margin-bottom :6px
            font-size :14px
            color:rgb(7,17,27)
        .text
            line-height :24px
            padding:0 8px
            font-size:12px
            color:rgb(77,85,93)
    .rating
        padding-top:18px
        .title
            line-height:14px
            margin-left :18px
            font-size :14px
            color:rgb(7,17,27)
        .rating-wrapper
            padding: 0 18px
        .rating-item
            position: relative
            padding: 16px 0
            border-bottom:1px solid #eee
            .user
                position: absolute
                right: 0
                top: 16px
                line-height: 12px
                font-size: 0
                .name
                    display: inline-block
                    margin-right: 6px
                    vertical-align: top
                    font-size: 10px
                    color: rgb(147, 153, 159)
                .avatar
                    border-radius: 50%
            .time
                margin-bottom: 6px
                line-height: 12px
                font-size: 10px
                color: rgb(147, 153, 159)
            .text
                line-height: 16px
                font-size: 12px
                color: rgb(7, 17, 27)
                .fa-thumbs-up, .fa-thumbs-up
                    margin-right: 4px
                    line-height: 16px
                    font-size: 12px
                .fa-thumbs-up
                    color: rgb(0, 160, 220)
                .fa-thumbs-up
                    color: rgb(147, 153, 159)
            .no-rating
                padding: 16px 0
                font-size: 12px
                color: rgb(147, 153, 159)
</style>
