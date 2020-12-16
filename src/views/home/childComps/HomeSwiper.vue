<template>
  <div id="homeSwiper">
    <swiper>
      <swiper-item v-for="itme in banners">
        <a :href="itme.link">
          <img :src="itme.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
