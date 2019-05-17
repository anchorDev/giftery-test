<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary md-layout md-alignment-top-space-between">
        <md-button class="md-icon-button md-primary" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>category</md-icon>
        </md-button>
        <!--page logo start-->
        <shopping-card class="shopping-card" />
        <!--page logo end-->
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-primary">
          <!--page logo start-->
          <page-logo />
          <!--page logo end-->

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>arrow_back</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <!--List menu start-->
        <list-menu />
        <!--List menu end-->
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import ListMenu from '../components/list-menu.vue';
import PageLogo from '../components/page-logo.vue';
import ShoppingCard from '../components/shopping-card.vue';


export default {
  name: 'Home',
  components: {
    ListMenu,
    PageLogo,
    ShoppingCard,
  },
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>

.md-app {
  border: 1px solid rgba(#000, .12);
  min-height: 100vh;
}

.md-drawer {
  width: 280px;
  max-width: calc(100vw - 250px);
}

.shopping-card {
  margin-left: auto;
}
</style>
