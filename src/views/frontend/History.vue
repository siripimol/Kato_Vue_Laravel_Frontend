<template>
  <v-container>
    <v-row align="center" justify="center">
       <v-col cols="12" align="center" justify="center">
            <v-img src="@/assets/Head_01.png" max-width="50%"></v-img>
          </v-col>
      <v-col cols="12" sm="8" md="10">
        <v-col>
          <v-col align="center" justify="center">
            <h1 class="green--text">ประวัติการโหวต</h1> </v-col
          ><v-card elevation="2">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">ชื่อสินค้า</th>
                    <th class="text-center">วันที่โหวต</th>
                    <th class="text-center">เวลาที่โหวต</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
          <v-col align="center" justify="center">
             <router-link :to="'/menu'"><v-btn
              elevation="2"
              color="green"
              class="white--text pa-5"
              rounded
            >ย้อนกลับ</v-btn
            >   
            </router-link>
          </v-col>
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