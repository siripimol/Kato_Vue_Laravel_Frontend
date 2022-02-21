<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="11">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">ID</th>
                <th class="text-center">Name</th>
                <th class="text-center">Email</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody v-if="dataUser">
              <tr v-for="(item, index) in dataUser" :key="index">
                <td class="text-center">{{ item.id }}</td>
                <td class="text-center">{{ item.fname }}</td>
                <td class="text-center">{{ item.lname }}</td>
                <td class="text-center">{{ item.mobile }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../config/axios";
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      dataUser: null,
    };
  },
  methods: {
    async fetchData() {
      this.dataUser = await axios.get("/api/users");
      this.dataUser = this.dataUser.data;
    },
  },
};
</script>

<style>
</style>