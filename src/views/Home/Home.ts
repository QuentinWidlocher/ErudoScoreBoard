import { Component, Vue } from "vue-property-decorator";
import { firebaseService } from "@/services/firebase";
import router from '@/router/index';
import Score from '@/models/Score';
import Card from "@/components/Card/Card.vue";
import ScoreMapper from '@/mappers/ScoreMapper';

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
                this.scores.push(ScoreMapper.toScore(scoreDoc));
            });
            this.loading = false;
        });
    }

    private goToCardEdit(id: string) {
        router.push({ name: 'edit', params: { scoreId: id, createOrEdit: 'edit' } })
    }
}