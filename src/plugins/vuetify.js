import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        'text': '#212121',
        'primary-1': '#039BE5',
        'primary-2': '#29B5F6',
        'primary-3': '#4FC2F8',
        'primary-4': '#80D4F9',
        'secondary-1': '#E64A19',
        'secondary-2': '#F55020',
        'secondary-3': '#FE7143',
        'secondary-4': '#FC8A65',
        'background-1': '#FFFFFF',
        'background-2': '#F3F0EA',
        'dark': '#101820',
      },
    },
  },
});
