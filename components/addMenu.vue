<template>
  <div class="mt-12">
    <v-sheet class="mx-auto" elevation="8" max-width="1200">
      <v-slide-group>
        <v-card class="ma-4" rounded-xl height="90" width="200">
          <v-alert height="90" outlined color="red darken-2">
            <v-card-title class="primary--text">
              <v-btn @click="dialog = true" icon color="primary">
                <v-icon class="mx-1">mdi-plus-circle</v-icon>
              </v-btn>Add Menu
            </v-card-title>
          </v-alert>
        </v-card>
        <v-card
          color="primary"
          class="ma-4"
          height="90"
          width="200"
          v-for="item in items"
          :key="item.title"
        >
          <div align="center" class="mt-4 white--text">
            {{ item.title }}
            <br />
            {{ item.city }}
          </div>
        </v-card>
      </v-slide-group>
    </v-sheet>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card class="pa-6">
        <v-col align="center" cols="12">
          <v-card-text>
            <v-text-field v-model="last" label="Last Name" outlined rounded></v-text-field>
          </v-card-text>

          <v-col cols="6">
            <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
            <v-btn color="primary" rounded  @click="dialog2 = false">Create</v-btn>
          </v-col>
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          title: "Wendys",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        },
        {
          title: "Wendys",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        },
        {
          title: "Wendys",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        },
        {
          title: "Wendys",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        },
        {
          title: "Wendys",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        },
        {
          title: "CC",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        },
        {
          title: "CC",
          icon: "star_rate",
          stars: "9.0",
          city: "New York"
        }
      ]
    };
  }
};
</script>
<style>
</style>