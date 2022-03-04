<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="7" align="center" justify="center">
            <v-img src="@/assets/Head_01.png" max-width="100%"></v-img>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-col align="center" justify="center">
          <h1 class="green--text">
            ลูกค้าที่เคยลงทะเบียนแล้ว<br />
            กรุณาใส่เบอร์โทรศัพท์
          </h1>
        </v-col>
        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-col align="center" justify="center">
            <v-text-field
              label="กรุณาใส่เบอร์มือถือของท่าน"
              v-model="phone"
              :rules="rules"
              maxLength="10"
              solo
            ></v-text-field>
          </v-col>
          <v-col align="center" justify="center">
            <v-btn
              @click="checkPhoneNumber()"
              elevation="2"
              color="green"
              class="white--text pa-5"
              rounded
              >ตกลง</v-btn
            >
          </v-col>
          <v-col align="center" justify="center">
            <h1 class="red--text">
              สำหรับสมาชิกใหม่<br />
              กรุณากดปุ่มลงทะเบียน
            </h1>
          </v-col>

          <v-col align="center" justify="center">
            <v-btn
              elevation="2"
              color="red"
              class="white--text pa-5"
              rounded
              :to="{ name: 'Register' }"
              >ลงทะเบียน</v-btn
            >
          </v-col>
        </v-form>
      </v-col>
    </v-row>
    <AlartMessage :show="show" :msg="msg" @close="(n) => (show = n)" />
  </v-container>
</template>

<script>
import Axios from "../../config/axios";
import AlartMessage from "../../components/AlertModal.vue";

export default {
  components: { AlartMessage },
  data: () => ({
    show: false,
    msg: "",
    formValid: false,
    phone: null,
    rules: [
      (value) => !!value || "กรุณาใส่เบอร์โทรศัพท์",
      (value) => /^(08|06|09)\d{8}$/.test(value) || "เบอร์มือถือไม่ถูกต้อง",
    ],
  }),
  methods: {
    async checkPhoneNumber() {
      if (this.$refs.form.validate()) {
        await Axios.post("/api/checkPhoneNumber", { phone: this.phone })
          .then((res) => {
            if (res.data.status == "fail") {
                this.$swal({
                  title: 'ขออภัยค่ะ',
                  text: 'เบอร์มือถือนี้ยังไม่ลงทะเบียน',
                  type: 'warning',
                  showCancelButton: false,
                  confirmButtonText: 'ลงทะเบียน',
                  showCloseButton: false,
                  showLoaderOnConfirm: true,
                  confirmButtonColor: '#018657',
                }).then((result) => {
                  if(result.value) {
                       this.$router.push({ path: "/register" });
                  } 
                })
            } else {
              localStorage.setItem("phone", JSON.stringify(res.data.phone));
              localStorage.setItem("token", res.data.token);
              this.$router.push({ path: "/menu" });
              this.$router.go();
            }
          })
          .catch(() => {
              this.$swal('ขออภัยค่ะ', 'ยังไม่ได้ลงทะเบียน กรุณากดลงทะเบียน', 'ตกลง');
          });
      }
    },
  },
};
</script>

<style>
[class^=swal2] {
    font-family: 'Athiti', sans-serif !important;
}
</style>
