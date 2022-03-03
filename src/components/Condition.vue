<template>
  <v-row justify="center">
    <v-dialog v-model="showCriteria" scrollable max-width="500px" persistent>
      <v-card>
        <v-layout justify-center>
          <v-card-title style="color: red">เกณฑ์การคัดเลือก</v-card-title>
        </v-layout>
        <v-card-text style="height: 300px" class="text-left">
          <ul>
            <li style="font-weight: 400">
              <span style="font-weight: 400"
                >สุขภาพดี ร่างกายแข็งแรง
                ไม่มีประวัติอาการที่ส่งผลกระทบต่อการนอนหลับ&nbsp;</span
              >
            </li>
            <li style="font-weight: 400">
              <span style="font-weight: 400"
                >มีทักษะการสื่อสาร และสามารถถ่ายทอดความรู้สึกได้ดี ทั้งการพูด
                และการเขียน&nbsp;</span
              >
            </li>
            <li style="font-weight: 400">
              <span style="font-weight: 400"
                >บุคลิกภาพดี มีเสน่ห์ สร้างความเชื่อมั่นให้กับผู้คนรอบข้าง</span
              >
            </li>
            <li style="font-weight: 400">
              <span style="font-weight: 400"
                >สามารถเดินทางเพื่อเข้างานตามสถานที่และระยะเวลาที่กำหนดได้อย่างสม่ำเสมอ</span
              >
            </li>
            <li style="font-weight: 400">
              <span style="font-weight: 400"
                >มี Passion ในการนอนหลับ
                และใจรักในการพักผ่อนยามค่ำคืน&nbsp;</span
              >
            </li>
            <li style="font-weight: 400">
              <span style="font-weight: 400"
                >หากเป็นผู้ที่มีความรู้เบื้องต้นเกี่ยวกับที่นอน
                หรือการนอนหลับจะได้รับการพิจารณาเป็นพิเศษ
              </span>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>*</strong
            ><span style="font-weight: 400">
              ผู้สมัคร “นักนอน” จะต้องมีเอกสารรับรอง
              หรือหลักฐานยืนยันการได้รับวัคซีนครบ 2 เข็มแล้วเท่านั้น
              &nbsp;&nbsp;</span
            >
          </p>
          <p>
            <strong>**</strong
            ><span style="font-weight: 400">
              สำหรับผู้ที่ผ่านการคัดเลือก ทางบริษัทมีมาตรการตรวจเชื้อไวรัส COVID
              19 ก่อนเข้าพื้นที่ทุกครั้ง
              พร้อมมาตรการป้องกันภายในพื้นที่ขั้นสูงสุด &nbsp;&nbsp;</span
            >
          </p>
          <p>&nbsp;</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn
              color="black"
              class="white--text"
              @click="closeCriteria('criteria')"
            >
              ไม่ยอมรับ
            </v-btn>
          </v-layout>
          <v-layout justify-center>
            <v-btn color="red" class="white--text" @click="confirm('criteria')">
              ยอมรับ
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["showCriteria"],
  methods: {
    closeCriteria(text) {
      this.$emit("next", { type: text });
    },
    confirm(text) {
      this.$emit("submit", { type: text });
    },
  },
};
</script>

<style>
</style>
