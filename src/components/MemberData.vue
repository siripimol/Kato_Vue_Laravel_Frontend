<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-row align="center" justify="center">
        <v-col cols="5">
          <v-select
            v-model="searchStatus"
            outlined
            dense
            :items="modeFilter"
            label="ตัวเลือก"
          ></v-select>
        </v-col>
        <v-col cols="5">
          <v-text-field
            dense
            label="ค้นหา"
            v-model="search"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="12" sm="8" md="11">
        <v-data-table
          :headers="headers"
          :items="datas"
          :options.sync="options"
          :server-items-length="totalDatas"
          :loading="loading"
          class="elevation-1"
        ></v-data-table
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Axios from "../config/axios";
export default {
  data() {
    return {
      searchStatus: null,
      search: null,
      totalDatas: 0,
      datas: [],
      loading: true,
      options: {},
      modeFilter: ["SMS", "Website"],
      headers: [
        {
          text: "ลำดับ",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "ชื่อ", value: "fname" },
        { text: "นามสกุล", value: "lname" },
        { text: "เบอร์โทรศัพท์", value: "phone" },
        { text: "อายุ", value: "age" },
        { text: "อีเมล", value: "email" },
        { text: "ช่องทางลงทะเบียน", value: "register_channel" },
        { text: "สิทธิ์ลุ้นรางวัล", value: "total_point" },
        { text: "วันที่ลงทะเบียน", value: "created_at" },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    search: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  methods: {
    async getDataFromApi() {
      this.loading = true;
      await this.getApiCall().then((data) => {
        this.datas = data.items;
        this.totalDatas = data.total;
        this.loading = false;
      });
    },
    async getApiCall() {
      const { page, itemsPerPage } = this.options;
      let items = await this.getDatas(page, itemsPerPage);
      const total = items.length;

      if (itemsPerPage > 0) {
        items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      }

      this.datas = items;
      this.totalDatas = total;
    },
    async getDatas(page, itemsPerPage) {
      console.log(
        "page, itemsPerPage, search :>> ",
        page,
        itemsPerPage,
        this.search
      );
      await Axios.post("/api/listMemberTable", {
        page: page,
        itemsPerPage: itemsPerPage,
        search: this.search,
        searchStatus: this.searchStatus,
      }).then((res) => {
        console.log("res.data :>> ", res.data);
      });
    },
  },
};
</script>

<style>
</style>