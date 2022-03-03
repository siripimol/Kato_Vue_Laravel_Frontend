<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="10">
          <v-col align="center" justify="center">
            <v-img src="@/assets/Head_01.png" max-width="50%"></v-img>
          </v-col>
        <v-col align="center" justify="center">
          <v-card class="pa-md-4 mx-lg-auto" max-width="600">
            <v-card-text>
              <h3 class="green--text mb-5">
                ประกาศรสชาติที่ได้รับการโหวตสูงสุด
              </h3>
              <p>ติดตามการประกาศผลโหวตรสชาติ ที่ได้รับคะแนนโหวตสูงสุด</p>
              <div class="red--text">วันที่ 27 พฤษภาคม 2565 เวลา 16.00 น.</div>
            </v-card-text>
          </v-card>
        </v-col>
        <br />
        <v-col align="center" justify="center">
          <v-card class="pa-md-4 mx-lg-auto" max-width="600">
            <v-card-text>
              <h3 class="green--text mb-5">ประกาศหมายเลขโทรศัพท์ผู้โชคดี</h3>
              <p>
                ติดตามการประกาศผลเบอร์โทรศัพท์
                ผู้โชคดีและรหัสใต้ฝาที่ได้รับรางวัล
              </p>
              <div class="red--text">วันที่ 27 พฤษภาคม 2565 เวลา 16.00 น.</div>
            </v-card-text>
          </v-card>
        </v-col>
          <v-col align="center" justify="center">
          <router-link :to="'/menu'"><v-btn
                elevation="2"
                color="grey"
                class="white--text pa-5 mr-4"
                rounded
                >ย้อนกลับ</v-btn></router-link>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>