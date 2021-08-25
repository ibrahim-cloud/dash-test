<template>
    <v-container fluid>
            <v-col cols="12" lg="4">
                <material-chart-card
                    :data="dailySalesChart.data"
                    :options="dailySalesChart.options"
                    color="#fff"
                    type="Line"
                >
                    <template v-slot:actions>
                        <v-icon class="mr-2" small>mdi-clock-outline</v-icon>
                        <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
                    </template>
                </material-chart-card>
            </v-col>
    </v-container>
</template>

<script>

export default {
 
    data() {
        return {
           
            dailySalesChart: {
                data: {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    series: [[12, 17, 7, 17, 23, 18, 38]],
                
                },
            },
        }
            
            
          
        
    }
};
</script>
