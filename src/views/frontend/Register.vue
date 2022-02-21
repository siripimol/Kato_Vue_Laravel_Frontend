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
            :rules="rules.name"
            outlined
          ></v-text-field>
          <v-text-field
            label="นามสกุล"
            v-model="dataRegister.lname"
            :rules="rules.name"
            outlined
          ></v-text-field>
          <v-text-field
            label="เบอร์โทรศัพท์"
            v-model="dataRegister.phone"
            :rules="rules.mobile"
            outlined
          ></v-text-field>
          <v-text-field
            label="อีเมล"
            v-model="dataRegister.email"
            :rules="rules.email"
            outlined
          ></v-text-field>
          <v-row>
            <v-col cols="12" md="4">
              <v-select
                v-model="dataRegister.day"
                :items="birthDate"
                :rules="rules.date"
                label="วันที่"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="dataRegister.month"
                :items="monthList"
                item-text="month"
                item-value="data"
                :rules="rules.date"
                label="เดือน"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="dataRegister.year"
                :items="yearDate"
                :rules="rules.date"
                label="พ.ศ."
                required
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-col align="center" justify="center">
            <v-btn
              :disabled="!valid"
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
    <AlartMessage :show="show" :msg="msg" @close="(n) => (show = n)" />
  </v-container>
</template>

<script>
import Axios from "../../config/axios";
import AlartMessage from "../../components/AlertModal.vue";

export default {
  components: { AlartMessage },
  data() {
    return {
      show: false,
      msg: "",
      formValid: false,
      valid: true,
      dataRegister: {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        day: "",
        month: "",
        year: "",
      },
      monthList: [
        { data: 1, month: "มกราคม" },
        { data: 2, month: "กุมภาพันธ์" },
        { data: 3, month: "มีนาคม" },
        { data: 4, month: "เมษายน" },
        { data: 5, month: "พฤษภาคม" },
        { data: 6, month: "มิถุนายน" },
        { data: 7, month: "กรกฎาคม" },
        { data: 8, month: "สิงหาคม" },
        { data: 9, month: "กันยายน" },
        { data: 10, month: "ตุลาคม" },
        { data: 11, month: "พฤศจิกายน" },
        { data: 12, month: "ธันวาคม" },
      ],
      rules: {
        name: [(value) => !!value || "กรุณากรอกข้อมูล"],
        mobile: [
          (value) => !!value || "กรุณากรอกเบอร์โทรศัพท์",
          (value) => /^(08|06|09)\d{8}$/.test(value) || "เบอร์มือถือไม่ถูกต้อง",
        ],
        email: [
          (value) => !!value || "กรุณากรอกอีเมล",
          (value) => /.+@.+\..+/.test(value) || "อีเมลไม่ถูกต้อง",
        ],
        date: [(value) => !!value || "กรุณากรอกข้อมูล"],
      },
    };
  },
  methods: {
    sendRegister() {
      if (this.$refs.form.validate()) {
        console.log("this.dataRegister :>> ", this.dataRegister);
        Axios.post("/api/register", this.dataRegister)
          .then((res) => {
            console.log("res :>> ", res.data);
            if (res.data.success == "success") {
              this.$router.push({ path: "/menu" });
            }
          })
          .catch((err) => {
            console.log("err :>> ", err);
            this.msg = "เบอร์มือถือถูกลงทะเบียนแล้ว";
            this.show = true;
          });
      }
    },
  },
  computed: {
    birthDate() {
      return Array.from({ length: 31 }, (_, i) => i + 1);
    },
    yearDate() {
      return Array.from({ length: 100 }, (_, i) => 2565 - i);
    },
  },
};
</script>

<style>
</style>