<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" align="center" justify="center">
            <v-img src="@/assets/Head_01.png" max-width="50%"></v-img>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <v-col align="center" justify="center">
          <h1 class="green--text">ลงทะเบียนกิจกรรม</h1>
        </v-col>
        <v-form ref="form" v-model="formValid" lazy-validation>
          <v-text-field
            label="ชื่อ"
            v-model="dataRegister.fname"
            :rules="rules.name"
            solo
          ></v-text-field>
          <v-text-field
            label="นามสกุล"
            v-model="dataRegister.lname"
            :rules="rules.name"
            solo
          ></v-text-field>
          <v-text-field
            label="เบอร์โทรศัพท์"
            v-model="dataRegister.phone"
            :rules="rules.mobile"
            solo
          ></v-text-field>
          <v-text-field
            label="อีเมล"
            v-model="dataRegister.email"
            :rules="rules.email"
            solo
          ></v-text-field> 
          <p color="#018657" >กรุณาระบุวันเกิด</p> 
          <v-row style="margin-bottom: -60px;">
            <v-col cols="4" md="4" sm="4">
              <v-select
                v-model="dataRegister.day"
                :items="birthDate"
                :rules="rules.date"
                label="วันที่"
                required
                solo
              ></v-select>
            </v-col>

            <v-col cols="4" md="4"  sm="4">
              <v-select
                v-model="dataRegister.month"
                :items="monthList"
                item-text="month"
                item-value="data"
                :rules="rules.date"
                label="เดือน"
                required
                solo
              ></v-select>
            </v-col>

            <v-col cols="4" md="4"  sm="4">
              <v-select
                v-model="dataRegister.year"
                :items="yearDate"
                :rules="rules.date"
                label="พ.ศ."
                required
                solo
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
             <v-radio-group
                v-model="dataRegister.gender"
                row
              >
              <p  color="#018657" style="margin: 20px;">เพศ</p>
              <v-radio
                label="ชาย"
                value="1"
                color="#018657"
              ></v-radio>
              <v-radio
                label="หญิง"
                value="2"
                color="#018657"
              ></v-radio>
          </v-radio-group>
          </v-row>
             <v-col align="center" justify="center">
            <v-checkbox
            class="ma-0"
            v-model="checkboxCondition"
            :rules="checkRule"
            ><span
              @click="showPDPA = true"
              slot="label"
              id="checkboxx"
              style="font-size: 10pt"
              ><a>เงื่อนไขการลงทะเบียนร่วมกิจกรรม</a>
            </span></v-checkbox
          >
          <v-checkbox class="ma-0" v-model="checkboxRulePlay" :rules="checkRule"
            ><span
              @click="showCriteria = true"
              slot="label"
              id="checkboxx"
              style="font-size: 10pt"
              ><a>กติกาการร่วมสนุก</a>
            </span>
          </v-checkbox>
           </v-col>
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
    <PDPA :showPDPA="showPDPA" @next="closeDialog" @submit="submitPDPA" />
    <Criteria
      :showCriteria="showCriteria"
      @next="closeDialog"
      @submit="submitPDPA"
    />
  </v-container>
</template>

<script>
import Axios from "../../config/axios";
import AlartMessage from "../../components/AlertModal.vue";

export default {
  components: { 
    AlartMessage ,
    PDPA: () => import("@/components/PDPA.vue"),
    Criteria: () => import("@/components/Condition.vue"),
  },
  data() {
    return {
      show: false,
      msg: "",
      formValid: false,
      valid: true,
      showPDPA: false,
      showCriteria: false,
      dataRegister: {
        fname: "",
        lname: "",
        phone: "",
        email: "",
        day: "",
        month: "",
        year: "",
        gender:""
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
          (value) => /.+@.+\..+/.test(value) || "อีเมลไม่ถูกต้อง",
        ],
        date: [(value) => !!value || "กรุณากรอกข้อมูล"],
      },
    };
  },
  methods: {
    sendRegister() {
      if (this.$refs.form.validate()) {
        Axios.post("/api/register", this.dataRegister)
          .then((res) => {
            console.log("res :>> ", res.data);
            if (res.data.status == "success") {
              localStorage.setItem('phone', res.data.phone)
              this.$router.push({ path: "/menu" });
            }
          })
          .catch(() => {
           this.$swal({
              title: '<i>Custom HTML</i>',
              html:`This is an <em> emaphazied text </em>, <a href="#">links</a><strong>And other tags</strong>`,
              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
            })
          });
      }
    },
    submitPDPA(value) {
      if (value.type == "pdpa") {
        this.checkboxCondition = true;
        this.showPDPA = false;
      } else {
        this.checkboxRulePlay = true;
        this.showCriteria = false;
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