<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"/>
    <slot v-else name="item-icon-active"/>
    <div :style="activeStyle">
      <slot  name="item-text"/>
    </div>

  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props: {
        path: String,
        activeColer: {
          type: String,
          default: '#ff2f82'
        }
      },
      data() {
          return {
          }
      },
      computed: {
        isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
          return this.isActive ? {color: this.activeColer} : {}
        }
      },
      methods: {
        itemClick() {
          if(this.$route.path.indexOf(this.path) === -1){
            this.$router.replace(this.path)
          }
        }
      }
    }
</script>

<style scoped>

</style>
