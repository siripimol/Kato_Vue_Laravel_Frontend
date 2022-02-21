<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="10">
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-img src="@/assets/logo.png" max-width="30%"></v-img>
          </v-col>
          <v-col cols="6" align="center" justify="center">
            <router-link to="/receipt">
              <v-img src="@/assets/logo.png" max-width="30%"
                >ส่งรหัสใต้ฝาร่วมกิจกรรม</v-img
              >
            </router-link>
          </v-col>
          <v-col cols="6" align="center" justify="center">
            <router-link to="/rule">
              <v-img src="@/assets/logo.png" max-width="30%"
                >เงื่อนไขกติกาและของรางวัล</v-img
              >
            </router-link>
          </v-col>
          <v-col cols="6" align="center" justify="center">
            <router-link to="/history">
              <v-img src="@/assets/logo.png" max-width="30%"
                >ประวัติการโหวต</v-img
              >
            </router-link>
          </v-col>
          <v-col cols="6" align="center" justify="center">
            <router-link to="/reward">
              <v-img src="@/assets/logo.png" max-width="30%"
                >ประกาศรสชาติ</v-img
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