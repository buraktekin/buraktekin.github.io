import Vue from 'vue';
import Leftpane from '../Leftpane/Leftpane.vue'
import Rightpane from '../Rightpane/Rightpane.vue'
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);

export default { 
    name: 'HelloWorld',
    components: {
        Leftpane,
        Rightpane
    }
}