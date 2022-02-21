<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="10">
        <v-col align="center" justify="center">
          <v-img src="@/assets/logo.png" max-width="30%"></v-img>
        </v-col>
        <v-row>
          <v-col align="center" justify="center">
            <v-img src="@/assets/logo.png" max-width="50%"></v-img>
          </v-col>
          <v-col>
            <v-card height="500px">
              <v-toolbar card>
                <v-toolbar-title>Title</v-toolbar-title>
              </v-toolbar>

              <v-divider></v-divider>

              <v-card-text>
                <v-list>
                  <template>
                    <v-list-tile>
                      <v-list-tile-content v-for="i in 40" :key="i">
                        <div>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nam reiciendis, id esse perspiciatis a amet.
                          Unde optio, fuga reiciendis minima doloremque
                          voluptate quisquam, deserunt tempora nesciunt ea,
                          saepe amet recusandae?
                        </div>
                      </v-list-tile-content>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-card-text>
            </v-card></v-col
          >
        </v-row>
      </v-col></v-row
    ></v-container
  >
</template>

<script>
export default {};
</script>

<style>
.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>