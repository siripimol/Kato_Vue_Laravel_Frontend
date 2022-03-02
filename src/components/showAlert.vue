<template>
  <v-col cols="auto">
    <v-dialog
      v-model="show"
      transition="dialog-top-transition"
      max-width="600"
      persistent
    >
      <template>
        <v-card>
          <v-toolbar color="primary" dark
            >Opening from the top</v-toolbar
          >
          <v-card-text>
            <div class="text-h3 pa-8 text-center"
              v-if="data.status === 'success'"
            >
              รสชาติกาโตที่ได้รับ
            </div>
          </v-card-text>
          <v-card-text>
            <div class="text-h4 text-center">{{ data.type }}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="$emit('close', false, data.status)"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  props: ["show", "data"],
};
</script>

<style>
</style>