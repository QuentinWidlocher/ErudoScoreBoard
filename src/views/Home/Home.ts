import { Component, Vue } from "vue-property-decorator";
import { firebaseService } from "@/services/firebase";
import Score from '@/models/Score';
import Card from "@/components/Card/Card.vue";
import toScore from '@/mappers/ScoreMapper';

@Component({
    components: {
        Card,
    },
})
export default class Home extends Vue {

    scores: Score[] = [];
    loading: boolean = true;

    private mounted() {
        this.loadScores();
    }

    private loadScores() {
        this.loading = true;
        firebaseService.db.collection('scores').get().then((scores: firebase.firestore.QuerySnapshot) => {
            scores.forEach(scoreDoc => {
                this.scores.push(toScore(scoreDoc.data()));
            });
            this.loading = false;
        });
    }
}