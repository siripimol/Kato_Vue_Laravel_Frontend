<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          <v-col align="center" justify="center">แจ้งเตือน </v-col>
        </v-card-title>

        <v-card-text align="center" class="text-h5 lighten-1">
          <br />
          {{ msg }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-col align="center">
            <v-btn color="primary" @click="$emit('close', false)"> ตกลง </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["show", "msg"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>