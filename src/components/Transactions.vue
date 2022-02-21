<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="11">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">ลำดับ</th>
                <th class="text-center">รหัสใต้ฝา</th>
                <th class="text-center">รสชาติ</th>
                <th class="text-center">ลงทะเบียนโทรศัพท์</th>
                <th class="text-center">ช่องทางลงทะเบียน</th>
                <th class="text-center">วันที่ลงทะเบียน</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr> -->
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>