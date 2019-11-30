import { Component, Vue } from "vue-property-decorator";
import { firebaseService } from "@/services/firebase";
import Score from '@/models/Score';
import Card from "@/components/Card/Card.vue";

@Component({
    components: {
        Card,
    },
})
export default class Home extends Vue {

    scores: Score[] = [];
    loading: boolean = true;
    private mounted() {
        
    }
}