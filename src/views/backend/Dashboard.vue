<template>
  <v-app>
    <DashBoardCoreAppBar />
    <DashBoardCoreSideBar />
    <DashBoardCoreView />
  </v-app>
</template>

<script>
export default {
  components: {
    DashBoardCoreAppBar: () => import("../../components/Appbar"),
    DashBoardCoreSideBar: () => import("../../components/Sidebar"),
    DashBoardCoreView: () => import("../../components/View"),
  },
};
</script>

<style>
element.style {
  padding: 0px 0px 0px 0px !important;
}
</style>