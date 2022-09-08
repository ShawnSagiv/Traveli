import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FFF9C4',
                info: '#B2EBF2',
                accent: '#00BCD4',
            }
        }
    }
});
