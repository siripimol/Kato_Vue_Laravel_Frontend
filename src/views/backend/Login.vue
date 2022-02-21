<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="10">
        <v-card class="mx-auto my-12" max-width="400">
          <v-card-text>
            <v-row>
              <v-col align="center" justify="center">
                <div class="black--text mx-4">Log in</div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-text-field
            v-model="user.email"
            class="mx-4"
            label="Username"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            class="mx-4"
            label="Password"
            outlined
          ></v-text-field>
          <v-col align="center" justify="center">
            <v-btn
              elevation="2"
              color="blue"
              class="white--text pa-4"
              large
              @click="login()"
              >ตกลง</v-btn
            >
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: { email: null, password: null },
      loading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$store.dispatch("login", this.user);
        // await this.$router.push({ path: "/admin/dashboard" });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>