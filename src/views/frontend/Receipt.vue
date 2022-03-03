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
            outlined
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
            <router-link :to="'/menu'"><v-btn
              elevation="2"
              color="grey"
              class="white--text pa-5 mr-4"
              rounded
              >ย้อนกลับ</v-btn
            > </router-link>
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
        (value) =>
          (value.length && value.length == 10) || "กรุณากรอกรหัสใต้ฝา 10 หลัก",
        (value) => /^[0-9]*$$/.test(value) || "รหัสใต้ฝาเป็นตัวเลขเท่านั้น",
      ],
    };
  },
  methods: {
    async sendCode() {
      if (!this.$refs.form.validate()) {
        
      let getLocalStorage = localStorage.getItem("user");
      let parseLocalStorage = JSON.parse(getLocalStorage);
      await Axios.post("/api/receipt", {
        input_1: this.input_1,
        phone: parseLocalStorage.phone,
      })
        .then((res) => {
          console.log("res.data :>> ", res.data);
          this.data = res.data;
          this.show = true;
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    }
      }
,
    closeDialog(data, status) {
      console.log("data: ",data)
      if (status === "success") {
      this.$swal({
          title: 'Are you sure?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Deleted', 'You successfully deleted this file', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
      }
      this.show = data;
    },
  },
};
</script>

<style>
</style>