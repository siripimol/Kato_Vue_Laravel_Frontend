<template>
  <v-app-bar id="app-bar" app color="transparent" flat height="75">
    <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
      <v-icon v-if="value"> mdi-view-quilt </v-icon>
      <v-icon v-else> mdi-dots-vertical </v-icon>
    </v-btn>
    <v-spacer />
    <v-btn class="ml-2" min-width="0" text to="/pages/user">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "DashboardCoreAppBar",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  computed: {
    ...mapState(["drawer"]),
  },

  methods: {
    ...mapMutations({
      setDrawer: "SET_DRAWER",
    }),
  },
};
</script>
