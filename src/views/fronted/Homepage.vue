<template>
  <v-container>
    <v-row align="center" justify="center">
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
              v-model="phoneNumber"
              :rules="rules"
              outlined
            ></v-text-field>
          </v-col>
          <v-col align="center" justify="center">
            <v-btn elevation="2" color="green" class="white--text pa-5" rounded
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    formValid: true,
    phoneNumber: null,
    rules: [
      (value) => !!value || "กรุณาใส่เบอร์โทรศัพท์",
      (value) => /^(08|06|09)\d{8}$/.test(value) || "เบอร์มือถือไม่ถูกต้อง",
    ],
  }),
};
</script>

<style></style>
