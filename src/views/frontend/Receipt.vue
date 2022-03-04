<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" align="center" justify="center">
        <v-img src="@/assets/Head_01.png" max-width="50%"></v-img>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-col align="center" justify="center">
          <h4 class="green--text">กรุณากรอกรหัสใต้ฝา 10 หลัก</h4>
        </v-col>
        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-text-field
            v-model="input_1"
            label="รหัสใต้ฝา"
            solo
            maxLength="10"
            :rules="rules"
            required
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
            <router-link :to="'/menu'"
              ><v-btn
                elevation="2"
                color="grey"
                class="white--text pa-5 mr-4"
                rounded
                >ย้อนกลับ</v-btn
              >
            </router-link>
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
    >
    <ShowAlert :show="show" :data="data" @close="closeDialog" />
  </v-container>
</template>

<script>
import ShowAlert from "@/components/showAlert";
import Axios from "../../config/axios";
export default {
  components: { ShowAlert },
  data() {
    return {
      formValid: false,
      valid: true,
      example: false,
      input_1: "",
      show: false,
      data: {},
      rules: [
        (value) => !!value || "กรุณารหัสใต้ฝา",
        (value) =>(value.length && value.length == 10) || "กรุณากรอกรหัสใต้ฝา 10 หลัก",
        (value) => /^[0-9]*$$/.test(value) || "รหัสใต้ฝาเป็นตัวเลขเท่านั้น",
      ],
    };
  },
  methods: {
    async sendCode() {
    if (this.$refs.form.validate()) {
      let getLocalStorage = localStorage.getItem("phone");
      let parseLocalStorage = JSON.parse(getLocalStorage);
      await Axios.post("/api/receiptType", {
        input_1: this.input_1,
        phone: parseLocalStorage,
      })
        .then((res) => {
          if (res.data.status == "success") {
            this.$swal({
              title:
                '<strong style="color:black">ยืนยันการส่งรหัสและโหวตรสชาติ</strong>',
              html:
                '<h2 class="text-center" style="color: #018657">' +
                res.data.type +
                "</h2>",
              confirmButtonColor: "#018657",
              confirmButtonText: "ตกลง",
              cancelButtonText: "ยกเลิก",
              showCancelButton: true,
              showConfirmButton: true,
              reverseButtons: true,
            }).then((result) => {
              if (result.isConfirmed) {
                this.saveTransection();
              }
            });
          } else {
            this.$swal({
              title: '<strong style="color:red">รหัสไม่ถูกต้อง</strong>',
              html: '<p class="text-center">กรุณาตรวจสอบอีกครั้ง</p>',
              confirmButtonColor: "#018657",
              confirmButtonText: "ตกลง",
              cancelButtonText: "ยกเลิก",
              showCancelButton: true,
              reverseButtons: true,
            });
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    }},
    async saveTransection() {
      let getLocalStorage = localStorage.getItem("phone");
      let parseLocalStorage = JSON.parse(getLocalStorage);
      await Axios.post("/api/receiptCheck", {
        input_1: this.input_1,
        phone: parseLocalStorage,
      })
        .then((res) => {
          if (res.data.status == "success") {
            this.$swal({
              title:
                '<strong style="color:#018657">ขอบคุณที่ร่วมกิจกรรม</strong>',
              confirmButtonColor: "#018657",
              confirmButtonText: "ตกลง",
              showCancelButton: false,
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.go();
              }
            });
          } else {
           this.$swal({
              title: '<strong style="color:red">ขออภัยค่ะ</strong>',
              html: '<p class="text-center">รหัสใต้ฝาได้ถูกใช้ร่วมกิจกรรมแล้ว</p>',
              confirmButtonColor: "#018657",
              confirmButtonText: "ตกลง",
              cancelButtonText: "ยกเลิก",
              showCancelButton: true,
              reverseButtons: true,
            }).then((result) => {
              if (result.isConfirmed) {
               this.$router.go();
              }
            });
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    },
  },
};
</script>

<style></style>
