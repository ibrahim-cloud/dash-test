<template>
  <div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-btn icon dark @click="dialog = false">
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>

        <v-col cols="10" class="black pa-0 ml-16">
          <v-list class="primary">
            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title class="pl-5 white--text">
                  Title
                  <br />subtitle
                </v-list-item-title>
              </template>

              <v-card flat class="my-6">
                <v-row justify="center">
                  <v-col cols="3" class="mx-2">
                    <v-card height="350" class="pa-4 overflow-y-auto">
                      <p class="text-center primary--text">Categories</p>
                      <v-divider></v-divider>

                      <v-list shaped>
                        <v-list-item-group color="primary">
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-content>
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                              <v-icon color="primary">mdi-square-edit-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-icon>
                              <v-icon color="primary">mdi-delete</v-icon>
                            </v-list-item-icon>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                    <v-col cols="12" align="center">
                      <v-btn @click="dialog1 = true" color="primary">Add Categorie</v-btn>
                    </v-col>
                  </v-col>
                  <v-col cols="3" class="mx-2">
                    <v-card height="350" class="pa-4 overflow-y-auto">
                      <p class="text-center primary--text">Categories</p>
                      <v-select :items="items" label="Outlined style" outlined rounded></v-select>

                      <v-list shaped>
                        <v-list-item-group color="primary">
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-content>
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                              <v-icon color="primary">mdi-square-edit-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-icon>
                              <v-icon color="primary">mdi-delete</v-icon>
                            </v-list-item-icon>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                    <v-col cols="12" align="center">
                      <v-btn @click="dialog2 = true" color="primary">Add Categorie</v-btn>
                    </v-col>
                  </v-col>
                  <v-col cols="3" class="mx-2">
                    <v-card height="350" class="pa-4 overflow-y-auto">
                      <p class="text-center primary--text">Categories</p>
                      <v-select :items="items" label="Outlined style" outlined rounded></v-select>

                      <v-list shaped>
                        <v-list-item-group color="primary">
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-content>
                              <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                              <v-icon color="primary">mdi-square-edit-outline</v-icon>
                            </v-list-item-icon>
                            <v-list-item-icon>
                              <v-icon color="primary">mdi-delete</v-icon>
                            </v-list-item-icon>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                    <v-col cols="12" align="center">
                      <v-btn @click="dialog3 = true" color="primary">Add Categorie</v-btn>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card>
            </v-list-group>
          </v-list>
        </v-col>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" max-width="500px">
      <v-card class="pa-6">
        <v-col align="center" cols="12">
          <v-card-text>
            <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
            <v-btn color="primary">
              <v-icon class="mx-1">mdi-plus-circle</v-icon>Add Image
            </v-btn>
          </v-card-text>

          <v-col cols="6">
            <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
            <v-btn color="primary" rounded @click="dialog2 = false">Create</v-btn>
          </v-col>
        </v-col>
      </v-card>
    </v-dialog>

    <!--dialog2-->
    <v-dialog v-model="dialog2" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Create modifier</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
            </v-row>
              <P class="text-h5">modifier items</P>
<v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
               <v-btn color="primary">
              <v-icon class="mx-1">mdi-plus-circle</v-icon>Add Image
            </v-btn>
              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
      <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
            <v-btn color="primary" rounded @click="dialog2 = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
     <!--dialog3-->
         <v-dialog v-model="dialog3" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Create modifier</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
              <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
              <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
                 <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
              <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
              <v-col cols="12">
                <v-select :items="items" label="Outlined style" outlined rounded></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                   <v-switch
        v-model="showMessages"
        label="Show messages"
      ></v-switch>
              </v-col>
                  <v-col cols="12" sm="6">
                   <v-switch
        v-model="showMessages"
        label="Show messages"
      ></v-switch>
              </v-col>
           

              <v-col cols="12" >
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12" >
                <v-text-field v-model="last" label="Create Categorie" outlined rounded></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
               <v-btn color="primary">
              <v-icon class="mx-1">mdi-plus-circle</v-icon>Add Image
            </v-btn>
              </v-col>

            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
      <v-btn color="primary" text @click="dialog2 = false">Close</v-btn>
            <v-btn color="primary" rounded @click="dialog2 = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      dialog2: false,
            dialog3: false,


      items: [
        { text: "chesse Pizza", icon: "mdi-clock" },
        { text: "chesse Pizza", icon: "mdi-account" },
        { text: "chesse Pizza", icon: "mdi-account" },

        { text: "chesse Pizza", icon: "mdi-account" },

        { text: "chesse Pizza", icon: "mdi-account" }
      ]
    };
  }
};
</script>
<style>
</style>