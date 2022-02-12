<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-col align="center" justify="center">
          <h1 class="green--text">ลงทะเบียนกิจกรรม</h1>
        </v-col>
        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-text-field
            label="ชื่อ"
            v-model="dataRegister.fname"
            :rules="rules"
            outlined
          ></v-text-field>
          <v-text-field
            label="นามสกุล"
            v-model="dataRegister.lname"
            :rules="rules"
            outlined
          ></v-text-field>
          <v-text-field
            label="เบอร์โทรศัพท์"
            v-model="dataRegister.phone"
            :rules="rules"
            outlined
          ></v-text-field>
          <v-text-field
            label="อีเมล"
            v-model="dataRegister.email"
            :rules="rules"
            outlined
          ></v-text-field>
          <!-- <v-row>
            <v-col cols="12" md="4">
              <v-select
                v-model="dataRegister.day"
                :items="birthDate"
                :rules="nameRules"
                label="วันที่"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="dataRegister.month"
                :rules="nameRules"
                label="เดือน"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="dataRegister.year"
                :rules="emailRules"
                label="พ.ศ."
                required
                outlined
              ></v-select>
            </v-col>
          </v-row> -->
          <v-col align="center" justify="center">
            <v-btn
              elevation="2"
              color="green"
              class="white--text pa-5"
              rounded
              @click="sendRegister()"
              >ตกลง</v-btn
            >
          </v-col>
        </v-form>
      </v-col></v-row
    >
  </v-container>
</template>

<script>
import Axios from "../../config/axios";
export default {
  data() {
    return {
      dataRegister: {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        // day: "",
        // month: "",
        // year: "",
      },
    };
  },
  methods: {
    sendRegister() {
      Axios.post("/register", this.dataRegister)
        .then((res) => {
          console.log("res :>> ", res.data);
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    },
  },
  computed: {
    birthDate() {
      return Array.from({ length: 31 }, (_, i) => i + 1);
    },
  },
};
</script>

<style>
</style>