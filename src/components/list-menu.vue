<template>
  <md-list>
    <md-list-item v-for="(item , i) in list" :key="`${i}-${item}`">
      <md-button v-on:click="goToCard(item.id)" class="md-primary">
        <md-icon>{{item.code | icon}}</md-icon>
        <span class="accent-color">
          {{item.title}}
        </span>
      </md-button>
    </md-list-item>
  </md-list>
</template>

<script>
import listIcons from "../data/list-icons";
import menuItems from "../data/categories.json"

export default {
  name: 'ListMenu',
  data() {
    return {
      list: [...menuItems]
    };
  },
  methods: {
    goToCard(id) {
      this.$router.push({name:'giftcards',params:{id:id}});
    }
  },
  filters: {
    icon(value) {
      return listIcons[value];
    }
  }
};
</script>

<style lang="scss" scoped>
.accent-color {
  color: #f16536;
}
</style>
