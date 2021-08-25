<template>
  <div class="pa-16">
    

      

        <v-col cols="10" class=" pa-16 ml-16">
          <v-list class=" primary">
            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title class="pl-5 white--text">Title <br> subtitle</v-list-item-title>
              </template>
<v-card class="pa-6">
<v-col cols="12" class="grey lighten-4">
<v-row class=" pa-3">
 <v-text-field
          v-model=" dateRangeText"
          label="Date range"
          prepend-icon="mdi-calendar"
          readonly
        ></v-text-field>
<v-spacer></v-spacer>
  <v-icon>mdi-card-search</v-icon>
</v-row>


</v-col>
     <v-date-picker
          v-model="dates"
          range
        ></v-date-picker>
      
</v-card>
          



          

            </v-list-group>
          </v-list>
        </v-col>
  </div>
   
</template>

<script>
export default {
  data() {
    return {
            dates: ['2021-08-25', '2021-09-20'],

     
    }
  },
      computed: {
    dateRangeText () {
      return this.dates.join(' to ')
    },
  }
};
</script>
<style>
</style>