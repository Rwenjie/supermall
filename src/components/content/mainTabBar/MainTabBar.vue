<template>
  <tab-bar>

    <tab-bar-item path="/home" activeColer="#ff2f82">
      <img slot="item-icon" src="assets/img/tabbar/shouye.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/shouye_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="assets/img/tabbar/fenlei.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/fenlei_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="item-icon" src="assets/img/tabbar/gouwu.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/gouwu_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="assets/img/tabbar/wode.svg" alt="">
      <img slot="item-icon-active" src="assets/img/tabbar/wode_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

    export default {
      name: "MainTabBar",
      components: {
        //2.注册
        TabBar,
        TabBarItem
      }

    }
</script>

<style scoped>
  .tab-bar-item  {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
</style>
