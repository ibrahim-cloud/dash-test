<template>
  <div>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer width="20%" v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-home-currency-usd" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title color="primary">payements</v-list-tile-title>
          </v-list-tile>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-semantic-web</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Item1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="mdi-ballot-recount" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Marketing</v-list-tile-title>
          </v-list-tile>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-semantic-web</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Item2</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="primary">
            <v-icon>mdi-logout</v-icon>Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home" },

        { title: "Menus", icon: "mdi-food" },

        { title: "Orders", icon: "mdi-cube" },

        { title: "locations", icon: "mdi-crosshairs-gps" },

        { title: "Roles", icon: "mdi-account-group" },

        { title: "Website", icon: "mdi-web" }
      ]
    };
  }
};
</script>
<style scoped>
</style>
