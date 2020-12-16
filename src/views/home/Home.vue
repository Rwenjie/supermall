<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>

    <h2>主页</h2>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import {getHomeMultidate} from "network/home";

    export default {
      name: "Home",
      components: {
        NavBar,
        HomeSwiper,
        RecommendView

      },
      data() {
        return{
          banners: [],
          recommends: []
        }
      },
      created() {
        //1.请求多个数据
        getHomeMultidate().then(res=> {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list;
        })
      }
    }
</script>

<style scoped>
 .home-nav {
   background-color: var(--color-tint);
   color: #ffffff;
 }
</style>
