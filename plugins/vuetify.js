import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default (ctx) => {
    const vuetify = new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#e10a23',
          secondary:'#000000',
          anchor: '#8c9eff',
          footer:'#202329',
                    error: '#f55a4e',
                    info: '#00d3ee',
                    success: '#5cb860',
                    warning: '#ffa21a',
                },
            },
        },
        icons: {
            iconfont: 'mdi',
        },
    });

    ctx.app.vuetify = vuetify;
    ctx.$vuetify = vuetify.framework;
};
