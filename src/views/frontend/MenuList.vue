<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="10">
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-img src="@/assets/Head_01.png" max-width="100%"></v-img>
          </v-col>
          <v-col cols="12" md="6" align="center" justify="center">
            <router-link to="/receipt">
              <v-img src="@/assets/box1.png" max-width="100%"
                ></v-img
              >
            </router-link>
          </v-col>
          <v-col cols="12" md="6"  align="center" justify="center">
            <router-link to="/rule">
              <v-img src="@/assets/box2.png" max-width="100%"
                ></v-img
              >
            </router-link>
          </v-col>
          <v-col cols="12" md="6"  align="center" justify="center">
            <router-link to="/history">
              <v-img  src="@/assets/box3.png" max-width="100%"
                ></v-img
              >
            </router-link>
          </v-col>
          <v-col cols="12" md="6"  align="center" justify="center">
            <router-link to="/reward">
              <v-img src="@/assets/box4.png" max-width="100%"
                ></v-img
              >
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>