<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-col cols="12" align="center" justify="center">
          <v-img src="@/assets/logo.png" max-width="30%"></v-img>
        </v-col>
        <v-col align="center" justify="center">
          <h4 class="green--text">กรุณากรอกรหัสใต้ฝา 10 หลัก</h4>
        </v-col>
        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-text-field
            v-model="input_1"
            label="รหัสใต้ฝา"
            outlined
          ></v-text-field>
          <v-col align="center" justify="center">
            <v-btn
              elevation="2"
              color="green"
              class="white--text pa-5"
              rounded
              @click="example = !example"
              >ตัวอย่างรหัสใต้ฝา</v-btn
            >
          </v-col>
          <v-col v-if="example" cols="12" align="center" justify="center">
            <v-img src="@/assets/code.png" max-width="30%"></v-img>
          </v-col>
          <v-col align="center" justify="center">
            <h4 class="red--text">
              กรุณาเก็บฝาที่มีรหัสใต้ฝาตัวจริง <br />เพื่อใช้ยืนยันการรับรางวัล
            </h4>
          </v-col>
          <v-col align="center" justify="center">
            <v-btn
              elevation="2"
              color="grey"
              class="white--text pa-5 mr-4"
              rounded
              >ย้อนกลับ</v-btn
            >
            <v-btn
              :disabled="!valid"
              elevation="2"
              color="green"
              class="white--text pa-5"
              rounded
              @click="sendCode()"
              >ตกลง</v-btn
            >
          </v-col>
        </v-form>
      </v-col></v-row
    ></v-container
  >
</template>

<script>
import Axios from "../../config/axios";
export default {
  data() {
    return {
      formValid: false,
      valid: true,
      example: false,
      input_1: "",
    };
  },
  methods: {
    async sendCode() {
      await Axios.post("/api/inputCheck", { input_1: this.input_1 })
        .then((res) => {
          console.log("res.data :>> ", res.data);
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    },
  },
};
</script>

<style>
</style>